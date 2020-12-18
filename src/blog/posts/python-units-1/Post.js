import '../Post.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const info = {
  name: "Physical Units in Python: Part 1 - Emulating Python Primitives",
  date: "Dec 17 2020",
  tags: ["python"]
};
  
const codeBlock1 = `
class MyNumber:
    def __init__(self, value, units=None):
        self._value = value
        self._units = units
`.trim();

const codeBlock2 = `
x = MyNumber(5)
print(str(x))  # returns <__main__.MyNumber instance at 0x037B3990>
print(repr(x))  # also returns <__main__.MyNumber instance at 0x037B3990>
`.trim();

const codeBlock3 = `
class MyNumber:
    def __init__(self, value, units=None):
        self._value = value
        self._units = units
    def __str__(self):
        return f'my value is {self._value}'
    def __repr__(self):
        return f'my repr is {self._value}'
`.trim();

const codeBlock4 = `
x = MyNumber(5)
print(f'here is the string: {x}')  # returns here is the string: my value is 5
print([x])  # returns [my repr is 5]
`.trim();

const codeBlock5 = `
x = MyNumber(5)
print(f'here is the string: {x}')  # returns here is the string: my value is 5
print([x])  # returns [my repr is 5]
`.trim();

const codeBlock6 = `
class MyNumber:
    def __init__(self, value, units=None):
        self._value = value
        self._units = units
    def __repr__(self):
        if self._units:
            return f'{self._value} {self._units}'
        else:
            return f'{self._value}'
`.trim();

const codeBlock7 = `
class MyNumber:
    def __init__(self, value, units=None):
        self._value = value
        self._units = units
    def __repr__(self):
        if self._units:
            return f'{self._value} {self._units}'
        else:
            return f'{self._value}'
    def __add__(self, other):
        if isinstance(other, MyNumber):
            return MyNumber(self._value + other._value, self._units)
        else:
            return MyNumber(self._value + other, self._units)
`.trim();

const codeBlock8 = `
x = MyNumber(5, 'seconds')
y = x + 3
print(type(y))  # returns <class '__main__.MyNumber'
print(y)  # returns 8 seconds
`.trim();

const codeBlock9 = `
def __radd__(self, other):
    if isinstance(other, MyNumber):
        return MyNumber(self._value + other._value, self._units)
    else:
        return MyNumber(self._value + other, self._units)
`.trim();

export default function Post() {
  return (
    <div>
      <h3>{info.name}</h3>
      <p className="dateText">{info.date}</p> 
      <p>
          One problem that comes up when using computer programming to solve 
          physics problems is handling physical units like distance or time. 
          In this series, we'll look at developing a flexible framework for 
          handling units in Python. Part 1 of this series will take a look
          at some prerequisite Python knowledge that will be useful when 
          creating something that acts like a primitive Python type.
      </p>
      <h4>The Python "Dunders"</h4>
      <p>
          Let's frst take a look behind the scenes to understand how Python works.
          It starts with the magical functions often referred to as "dunders",
          which is short for double underscore. The most common one Pythonistas
          see is <code>__init__</code>, which is used to instantiate a class. However,
          Python uses these functions for all sorts of purposes, such as adding or 
          subtracting. Let's make our own class and take a look at manipulating 
          some basic arithmetic. We'll start with a simple class.
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock1}
      </SyntaxHighlighter>
      <p>
          Note we're using <code>self._value</code> instead of <code>self.value</code>.
          In Python, it's convention to prefix private variables with an underscore.
          We're doing this because we don't want users to access the value directly.
          Instead, we want this class to <i>be</i> the value. For this to happen, let's
          take a look at two other dunders, <code>__str__</code> and <code>__repr__</code>.
      </p>
      <h4>The __str__ and __repr__ Dunders</h4>
      <p>
          <code>__str__</code> is the dunder method that converts an object into a 
          string. <code>__repr__</code> is the dunder method that converts an object 
          into a string representation of the object. The big difference is 
          that <code>__repr__</code> is meant to be unambiguous, whereas 
          <code>__str__</code> is just meant to be human-readable.
      </p>
      <p>
        Let's look at a couple scenarios to understand how these behave. Let's
        start with our simple class. What happens when we look at the string
        and repr for this?
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock2}
      </SyntaxHighlighter>
      <p>
          Note these both return the same thing. This is because the default
          functionality of <code>__str__</code> is to just return the same thing
          as <code>__repr__</code>. This will always be the case unless we 
          override <code>__str__</code>. Note the memory address that's returned
          from <code>__repr__</code>. This memory address is unique to this
          class instance, which makes it unambiguous.
      </p>
      <p>
        Now let's look at what happens when we override <code>__str__</code> and
        <code>__repr__</code>. Here's our updated class.
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock3}
      </SyntaxHighlighter>
      <p>
        We should know how our previous tests should go. Let's look at some 
        more complicated scenarios to see how our instance shows up.
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock4}
      </SyntaxHighlighter>
      <p>
        In the first print statement, we're formatting <code>x</code> into a string.
        This will convert it to a string and insert it into the string
        that is being printed. We can see that it's calling <code>__str__</code> in
        this case.
      </p>
      <p>
        In the second print statement, we add our instance to a list, then print
        that list. When we do that, Python shows us what's in that list by 
        calling <code>__repr__</code> for each item, since that will tell us, 
        unambiguously, what each item is. We can see it's 
        calling <code>__repr__</code> in this case.
      </p>
      <p>
        In our case, we want it to return the value and the units. If the units
        are omitted, we'll leave them out and just return the value. We'll
        use <code>__repr__</code> in this case since it's intended to be a
        numeric type. For now, we'll assume <code>value</code> will be 
        a float or int and <code>units</code> will be a string. Since neither of
        these override the default <code>__str__</code>, we'll convert them 
        to strings in our <code>__repr__</code> to simplify the code.
        Here's our new class.
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock6}
      </SyntaxHighlighter>
      <h4>Dunders for Arithmetic</h4>
      <p>
        With that out of the way, let's take a look at some more dunders.
        this time, we'll look at the ones that are used for basic arithmetic.
        Here's a quick rundown of all the arithmetic dunders and what they're
        used for.
      </p>
      <ul>
        <li><code>__add__(self, other)</code> is for addition (+)</li>
        <li><code>__sub__(self, other)</code> is for subtraction (-)</li>
        <li><code>__mul__(self, other)</code> is for multiplication (*)</li>
        <li><code>__truediv__(self, other)</code> is for division (/)</li>
        <li><code>__pow__(self, other)</code> is for power (**)</li>
        <li><code>__lt__(self, other)</code> is for less than (&lt;)</li>
        <li><code>__le__(self, other)</code> is for less than or equal to (&lt;=)</li>
        <li><code>__eq__(self, other)</code> is for equal to (==)</li>
        <li><code>__gt__(self, other)</code> is for greater than (&gt;)</li>
        <li><code>__ge__(self, other)</code> is for greater than or equal to (&gt;=)</li>
      </ul>
      <p>
        This is just scratching the surface. Check out the <a href="https://docs.python.org/3/reference/datamodel.html#emulating-numeric-types">
        Python documentation</a> for more information on emulating data types in Python.
        For now, we'll stick to these and take a look at them in action. Let's start
        with addition. We'll account for two use cases.
      </p>
      <ol>
        <li>Adding a float or an int to our class</li>
        <li>Adding another instance of <code>MyNumber</code> to our class</li>
      </ol>
      <p>
        Let's now add a <code>__add__</code> method to handle this.
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock7}
      </SyntaxHighlighter>
      <p>
        We're first checking to see if the other thing we're adding is another
        instance of <code>MyNumber</code>. If it is, we'll add the two
        values together. Down the road, we'll probably want to handle unit 
        compatibility and conversion, but we'll leave it at this for now. If
        the other object isn't an instance of <code>MyNumber</code>, then we'll
        just add it to our value. In both cases, we leave it to <code>self._value</code> to
        handle the addition. Since the value is an int or float, this will 
        behave just like regular int or float addition. For example, an error will be raised 
        if we try adding a string. Let's see it in action.
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock8}
      </SyntaxHighlighter>
      <p>
        Great! We see it returns an instance of <code>MyNumber</code> with the value of 8 
        and units of seconds.
      </p>
      <p>
        Note that we get an error if we try <code>y = 3 + x</code>. This
        is because there's another dunder called <code>__radd__</code> that handles the case where our
        object is on the right side of the addition. Note that <code>__radd__</code> is only
        called when the object on the left either doesn't have its own <code>__add__</code> method
        or it doesn't know how to add the two objects together. We can add an <code>__radd__</code> method
        to our class to handle this case. It would look just like our <code>__add__</code> method.
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock9}
      </SyntaxHighlighter>
      <p>
        That's where we'll stop for now. I encourage you to test out the other dunders and get a feel
        for how other arithmetic is handled. In the next post, we'll take a look at handling units. Until
        then, happy coding!
      </p>
    </div>
  )
}
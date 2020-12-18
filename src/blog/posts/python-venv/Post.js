import '../Post.scss';
import Python from './python.png'
import PythonPackage from './PythonPackage.png'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Image, Alert } from 'react-bootstrap';

const info = {
  name: "Python Virtual Environments",
  date: "Dec 11 2020",
  tags: ["python"]
};

const codeBlock1 = `
pip install some-package
`.trim();

const codeBlock2 = `
import sys
print(sys.executable)
`.trim();

const codeBlock3 = `
/my-app
`.trim();

const codeBlock4 = `
/my-app
└─ .venv
   ├─ Include
   ├─ Scripts
   │  ├─ activate
   │  ├─ python.exe
   │  └─ pip.exe
   └─ Lib
      └─ site-packages
`.trim();

const codeBlock5 = `
/my-app
└─ .venv
   ├─ Include
   ├─ Scripts
   │  ├─ activate
   │  ├─ python.exe
   │  └─ pip.exe
   └─ Lib
      └─ site-packages
         └─ requests
`.trim();

const codeBlock6 = `
certifi==2020.12.5
chardet==3.0.4
idna==2.10
requests==2.25.0
urllib3==1.26.2
`.trim();

const codeBlock7 = `
pip install -r requirements.txt
`.trim();

const codeBlock8 = `
pip freeze > requirements.txt
`.trim();

const codeBlock9 = `
import requests
`.trim();

const codeBlock10 = `
python -m venv .venv
`.trim();

const codeBlock11 = `
./.venv/Scripts/activate
`.trim();

const codeBlock12 = `
pip install requests
`.trim();

export default function Post() {
  return (
    <div>
      <h3>{info.name}</h3>
      <p className="dateText">{info.date}</p> 
      <p>
        Python virtual environments are a great way to manage and share dependencies
        for a project. But what are they exactly, and how do they work? In this post, we'll
        take a practical look at virtual environments and give you the understanding you need
        to start using them today.
      </p>
      <Alert variant="info">
        This post assumes you're using Python >3.6. Previous versions of Python do not
        include the <code>venv</code> command. If you're using a different version, I 
        would suggest taking a look at the <code>virtualenv</code> package.
      </Alert>
      <h4>What are Virtual Environments?</h4>
      <p>
        Let's start with taking a look at how Python works on its own. When you first
        install Python, it looks a bit like this.
      </p>
      <Image fluid src={Python} alt="Python" className="mx-auto d-block" />
      <p>
        Two scripts inside are <code>python.exe</code> and <code>pip.exe</code>.
        These are called when you type <code>python</code> and <code>pip</code> in the
        terminal. Now let's say you're working on a project that needs some package. 
        Let's install that package into our Python environment using
      </p>
      <SyntaxHighlighter language="shell" style={docco}>
          {codeBlock1}
      </SyntaxHighlighter>
      <p>
        Now our environment looks like this.
      </p>
      <Image fluid src={PythonPackage} alt="Python Package" className="mx-auto d-block" />
      <p>
        Great! Now we can import that package in our Python code. Now let's consider 
        two situations:
      </p>
      <ul>
        <li>
          You're working on a different project that requires a different version of
          some-package.
        </li>
        <li>
          Someone else joins the project, and they need to download some-package as well.
          It's possible the package version has changed since you downloaded it. Anyone
          who runs <code>pip install some-package</code> will install the latest version.
          If you're using different versions, that may lead to issues running the code.
        </li>
      </ul>
      <p>
        This is where virtual environments come into play. In a nutshell, they copy that
        entire Python environment into your project's folder. This new environment has
        its own <code>python.exe</code> and <code>pip.exe</code>, and it has its own 
        set of packages that are unique to this environment!
      </p>
      <h4>Let's Give it a Try!</h4>
      <p>
        Now that we've covered the basics, let's take a look at virtual environments 
        to see how they work. We'll start in an empty directory, set up a virtual
        environment, and install the requests package into it. Here's what our empty
        directory looks like so far.
      </p>
      <SyntaxHighlighter language="shell" style={docco}>
          {codeBlock3}
      </SyntaxHighlighter>
      <p>
        Just an empty folder. Let's set up a virtual environment here to see what 
        happens. To do so, we'll type the command
      </p>
      <SyntaxHighlighter language="shell" style={docco}>
          {codeBlock10}
      </SyntaxHighlighter>
      <p>
        into our terminal. This command instructs Python to create a
        new virtual environment and place it into a folder named <code>.venv</code>.
        Now let's see how this directory changes.
      </p>
      <SyntaxHighlighter language="shell" style={docco}>
          {codeBlock4}
      </SyntaxHighlighter>
      <p>
        You'll notice a couple more files in there, but these are the important
        ones. After creating a virtual environment, the next step is to activate
        it. You'll have to do this each time you work on the project. This step
        is what tells your computer to use this virtual envinroment instead of 
        the regular old Python on your machine. The command to activate the
        virtual envinroment is
      </p>
      <SyntaxHighlighter language="shell" style={docco}>
          {codeBlock11}
      </SyntaxHighlighter>
      <p> 
        After running it, you should see the text <code>(.venv)</code> to the left
        of your terminal line. This means the virtual envinroment is active.
        To deactivate the virtual environment, just type <code>deactivate</code>.
      </p>
      <Alert variant="info">
        If you're working on Linux, the command will 
        be <code>source ./.venv/bin/activate</code>.
      </Alert>
      <p>
        Now that our virtual environment is active, let's see what happens when we
        run some Python code. Run the following Python lines of code and see what
        comes up.
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock2}
      </SyntaxHighlighter>
      <p>
        You should see it print out the <code>python.exe</code> that's in your
        virtual environment. Next, let's install a package and see what happens
        there. We'll call
      </p>
      <SyntaxHighlighter language="shell" style={docco}>
          {codeBlock12}
      </SyntaxHighlighter>
      <p>
        while our virtual environment is active. We should now see our folder update.
      </p>
      <SyntaxHighlighter language="shell" style={docco}>
          {codeBlock5}
      </SyntaxHighlighter>
      <p>
        There will be some other dependencies that also install. We should now
        see them and our requests folder in the <code>site-packages</code>. To
        try it out, open <code>python</code> and try running
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock9}
      </SyntaxHighlighter>
      <p>
        We can also run <code>deactivate</code> from the command line and
        then try importing it again in Python, which should give us an <code>ImportError</code>. 
        This is because the packages in our virtual environment are mutually
        exclusive from the packages in our regular old Python. Neat!
      </p>
      <h4>Saving and Sharing Dependencies</h4>
      <p>
        If you're working with repositories, it's good practice to add 
        your <code>.venv</code> folder to your <code>.gitignore</code>, since adding
        all those dependencies can bog down your repository. Instead, it's best
        practice to generate a "requirements" file and put that into your repository.
        These requrements files can be generated by running
      </p>
      <SyntaxHighlighter language="shell" style={docco}>
          {codeBlock8}
      </SyntaxHighlighter>
      <p>
        when your virtual environment is active. 
        This should create a new <code>requirements.txt</code> file with the following text.
      </p>
      <SyntaxHighlighter language="shell" style={docco}>
          {codeBlock6}
      </SyntaxHighlighter>
      <p>
        This is a list of all the packages and their version numbers that you've 
        installed onto your virtual environment. Note the versions you see might
        be different than these because they might have been updated since I wrote
        this blog. Now, if someone else were to set up a virtual environment, they 
        can install all these same dependencies by running
      </p>
      <SyntaxHighlighter language="shell" style={docco}>
          {codeBlock7}
      </SyntaxHighlighter>
      <p>
        And voila! They have all the same dependencies,
        and they'll be the same version as what you're using.
      </p>
      <h4>In Conclusion</h4>
      <p>
        Python virtual environments are a great way to keep your Python projects
        organized. It's a good practice to set up a virtual environment for each
        of your projects so they're self-contained and easily shared with others.
        I hope this post gave you an understanding of what virtual environments
        are, how you use them and how they can benefit you. Now get out there and
        have fun coding!
      </p>
    </div>
  )
}
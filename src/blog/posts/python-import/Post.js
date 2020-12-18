import '../Post.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Alert } from 'react-bootstrap';

const info = {
  name: "How Python Imports Packages",
  date: "Dec 12 2020",
  tags: ["python"]
};

const codeBlock1 = `
import matplotlib
`.trim();

const codeBlock2 = `
import sys
print(sys.path)
`.trim();

const codeBlock3 = `
import sys
sys.path.append(r'/path/to/module/directory')
import matplotlib
`.trim();

const codeBlock4 = `
python3 -m site --user-site
`.trim();

const codeBlock5 = `
import site
print(site.getusersitepackages())
`.trim();

const codeBlock6 = `
/path/to/module/directory
`.trim();

export default function Post() {
  return (
    <div>
      <h3>{info.name}</h3>
      <p className="dateText">{info.date}</p> 
      <p>
        Understanding the import system in Python can be confusing at times, especially
        when you're running into unexpected import errors. In this post, we'll take a 
        brief look into the python import system and provide the knowledge you need
        to fix that import error.
      </p>
      <h4>The Basics of Imports</h4>
      <p>
        So what does happen when you import a package? Let's say you're importing 
        some package called matplotlib.
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock1}
      </SyntaxHighlighter>
      <p>
        When you do this, Python will first look for a built-in module with that name.
        If that's not found, then it will search through a bunch of directories. As soon
        as it finds either
      </p>
      <ul>
        <li>a file named matplotlib.py</li>
        <li>a folder named matplotlib with a file named __init__.py inside</li>
      </ul>
      <p>
        then it assumes it found the module and will import it. So, what directories
        will it look in? It will look in
      </p>
      <ul>
        <li>
          the directory containing the script you're running, or the current directory 
          when no file is specified
        </li>
        <li>a list of directories commonly referred to as "PYTHONPATH"</li>
      </ul>
      <p>
        This PYTHONPATH is an environment variable that defines all the directories to look
        in. If you're getting an import error, chances are that the package you're importing
        isn't in one of these directories.
      </p>
      <p>
        To take a look, there's an easy way to check what directories are in your PYTHONPATH.
        When Python loads up, it will load all the PYTHONPATH directories into
        the <code>path</code> variable in the built-in <code>sys</code> module. To take a look,
        we can run
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock2}
      </SyntaxHighlighter>
      <p>
        If you don't see your directory in this list, then there are a couple ways
        to get it there.
      </p>
      <h3>Option 1: Directly Modify sys.path</h3>
      <p>
        The easiest way to get there is to directly modify sys.path.
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock3}
      </SyntaxHighlighter>
      <p>
        Python will now look inside this folder for either a matplotlib.py
        file or a matplotlib folder with an __init__.py file.
      </p>
      <Alert variant="info">
        Prefixing a string with "r" means escape characters, like the newline character "/n", will
        be included as-is and not converted to to the escape character. I prefer to do this with
        file paths because escape characters can often lead to an invalid path. You can also
        use <a href="https://docs.python.org/3/library/pathlib.html">pathlib</a> or
        use <a href="https://docs.python.org/3/library/os.path.html#os.path.join">os.path.join</a> to
        intelligently create paths.
      </Alert>
      <p>
        This method works, but be careful using it. The path on your computer might not be
        the same path on some else's computer. It also means injecting the path directly into the
        code, which in most cases should usually be handled by the environment.
      </p>
      <h3>Option 2: Add a path to PYTHONPATH</h3>
      <p>
        Another option is to add a path to the PYTHONPATH environment variable. This will change
        depending on which operating system you use. 
        This <a href="https://bic-berkeley.github.io/psych-214-fall-2016/using_pythonpath.html">post
        </a> is a good reference on how to do that for different operating systems. 
      </p>
      <h3>Option 3: Add a Path Configuration File</h3>
      <p>
        The last option is to add a path configuration file that holds all the directories you'd
        like to search. This file has the extension <code>.pth</code>. It doesn't matter what you
        call it, so you can call it mypackages.pth or danceparty.pth. All is fair game, though I 
        would recommend using something a little more depictive.
      </p>
      <p>
        This file needs to go in a specific directory, usually the site-packages directory (where
        Python stores all the packages you install using pip). A quick way to see this directory
        path from the command line is
      </p>
      <SyntaxHighlighter language="shell" style={docco}>
          {codeBlock4}
      </SyntaxHighlighter>
      <p>
        or from within Python
      </p>
      <SyntaxHighlighter language="python" style={docco}>
          {codeBlock5}
      </SyntaxHighlighter>
      <p>
        The contents of this file is a list of directories, one per line. So in our example case,
        it would just have the single line
      </p>
      <SyntaxHighlighter language="shell" style={docco}>
          {codeBlock6}
      </SyntaxHighlighter>
      <p>
        Add this file and you're good to go. You can have multiple .pth files, or just one with 
        all your paths. This option is a happy medium. It doesn't insert path modification code directly
        into your source code, and it doesn't require you to modify environment variables if you're not 
        comfortable with that.
      </p>
      <p>
        More information on this specific option can be found in
        this <a href="https://docs.python.org/3/library/site.html">python documentation</a>.
      </p>
      <h3>In Conclusion</h3>
      <p>
        That about covers where Python looks for packages. Hopefully this information gets
        you past those pesky import errors.
      </p>
      <p>
        For more information on modules, check out
        this <a href="https://docs.python.org/3/tutorial/modules.html">Python
        documentation</a> on modules and 
        this <a href="https://docs.python.org/3/reference/import.html">Python
        documentation</a> on the import function that covers all this information 
        and more. Happy coding!
      </p>
    </div>
  )
}
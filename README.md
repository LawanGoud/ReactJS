# Introduction to React JS

-   MERN Stack
    -   Introduction to React JS
-   React
    -   React.createElement
    -   ReactDOM.render
-   JSX
    -   Embedding Expressions
    -   Nesting elements

# React JS

-   Introduction to React & JSX
-   Components & Props
-   Lists & Keys
-   State & Class Components
-   LifeCycle methods
-   Routing using react-router
-   Authentication

## React JS

-   React JS is an open-source JavaScript library used to build user-interfaces.
-   React JS was developed by Facebook.

## Why React JS?

-   Performant websites
-   Less line of code
-   improves readability of code
-   Less time consuming
-   Open Source
-   Reusable Code

## Advantages of React JS

-   Easy to learn
-   Large Community
-   Developer Toolset

## Running JavaScript in HTML

-   `<script>` tag is used to include JavaScript in HTML

-   type attribute specifies the type of the script.

## Code

```
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript">
      const rootElement = document.getElementById("root");
      const element = document.createElement("h1");
      element.textContent = "Hello World";
      element.classList.add("greeting");
      rootElement.appendChild(element);
    </script>
  </body>
</html>

```

## CSS

```
.greeting {
  font-family: Roboto;
  font-size: 50px;
}

```

## Creating Element Using React JS

### React CDN

```
<script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
```

### React.createElement()

-   The React.createElement() method is used to create an element using React JS. It is similar to the document.createElement() method in regular JavaScript.

### syntax

-   React.createElement(type, props);
    -   type - Tag names like div, h1 and p, etc.
    -   props - Properties like className, onClick and id, etc.

### ReactDOM.render()

-   The ReactDOM.render() method is used to display the React element.
    -   reactElement - What to render
    -   container - Where to render

### Code

```
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      const rootElement = document.getElementById("root");
      const elementProps = { className: "greeting", children: "Hello World!" };
      const elementType = "h1";
      const element = React.createElement(elementType, elementProps);
      ReactDOM.render(element, rootElement);
    </script>
  </body>
</html>
```

## JSX

-   React JS introduced a new HTML like syntax named JSX to create elements.

### Babel

-   JSX is not JavaScript.We have to convert it to JavaScript using a code compiler.Babel is one such tool.
-   It is a JavaScript compiler that translate JSX into regular JavaScript.

## NOTE:

-   for JSX, the type attribute value of the HTML script element should be text/babel.
-   For providing class names in JSX, the attribute name should be className.

### Difference between HTML and JSX

-   HTML -> class ---- for
-   JSX -> className - htmlFor

### Embedding Variables and Expressions in JSX

-   We can embed the variables and expressions using the flower brackets {}.

### Embedding Variables in JSX:

```
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      const name = "Lawan";
      const className = "greeting";
      const element = <h1 className={className}>{name}</h1>;
      ReactDOM.render(element, document.getElementById("root"));
    </script>
  </body>
</html>
```

### Embedding Expressions in JSX:

```
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      const fullName = (user) => user.firstName + " " + user.lastName;
      const user = { firstName: "Rahul", lastName: "World" };
      const element = <h1 className="greeting">Hello, {fullName(user)}!</h1>;
      ReactDOM.render(element, document.getElementById("root"));
    </script>
  </body>
</html>
```

### Nesting JSX elements

-   The ReactDOM.render() method returns only one element in render. So, we need to wrap element in parenthesis When writing the nested elements.

```
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      const element = (
        <div>
          <h1 className="greeting">Hello LawanGoud</h1>
          <p>Good to see you</p>
        </div>
      );
      ReactDOM.render(element, document.getElementById("root"));
    </script>
  </body>
</html>
```

# Components & Props

-   Component
    -   Properties(Props)
    -   Component is Reusable
    -   Component is Composable
-   Third-party Packages
    -   create-react-app
    -   Pre-Configured tools

### Component

-   A Component is a JS function that returns a JSX element.

`const Welcome = () => <h1 className='message'> Hello, User </h1>`

-   Component name should always start with a Capital letter.

```
<!DOCTYPE html>
<html>
    <head>
        <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="./index.css" />
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel">
            const Welcome = () => <h1 className="message">Hello, User</h1>;
            ReactDOM.render(<Welcome />, document.getElementById("root"));
        </script>
    </body>
</html>
```

### What if a Component name starts with LowerCase?

-   React treats components starting with lowercase letters as HTML Elements

### Properties(Props)

-   React allows us to pass information to a Component using Props
-   We can pass props to any Component as we declare attributes for any HTML tag

`<Component propName1="propValue1" propName2="propValue2"/>`

```
        <script type="text/babel">
            const Welcome = () => <h1 className="message">Hello, User</h1>;
            ReactDOM.render(
                <Welcome name="Lawan" greeting="Hello" />,
                document.getElementById("root")
            );
        </script>
```

### Accessing Props

```
        <script type="text/babel">
            const Welcome = (props) => {
                console.log(props);
                return <h1 className="message">Hello, User</h1>;
            };
            ReactDOM.render(
                <Welcome name="Lawan" greeting="Hello" />,
                document.getElementById("root")
            );
        </script>
```

```
        <script type="text/babel">
            const Welcome = (props) => {
                const { name, greeting } = props;
                return (
                    <h1 className="message">
                        {greeting}, {name}
                    </h1>
                );
            };
            ReactDOM.render(
                <Welcome name="Lawan" greeting="Hello" />,
                document.getElementById("root")
            );
        </script>
```

### Reusable

-   A Component is a piece of reusable code that can be used in various parts of an application

-   Components accept props as parameters and can be accessed directly

```
<!DOCTYPE html>
<html>
    <head>
        <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="./index.css" />
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel">
            const Welcome = (props) => {
                const { name, greeting } = props;
                return (
                    <h1 className="message">
                        {greeting}, {name}
                    </h1>
                );
            };
            ReactDOM.render(
                <div>
                    <Welcome name="Lawan" greeting="Hello" />
                    <Welcome name="Prabhas" greeting="Hi" />
                </div>,
                document.getElementById("root")
            );
        </script>
    </body>
</html>
```

### Composable

-   Components are composable
-   We can include a component inside another component

```
<!DOCTYPE html>
<html>
    <head>
        <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="./index.css" />
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel">
            const Welcome = (props) => {
                const { name, greeting } = props;
                return (
                    <h1 className="message">
                        {greeting}, {name}
                    </h1>
                );
            };
            const Greetings = () => (
                <div>
                    <Welcome name="Lawan" greeting="Hello" />
                    <Welcome name="Prabhas" greeting="Hi" />
                </div>
            );
            ReactDOM.render(<Greetings />, document.getElementById("root"));
        </script>
    </body>
</html>

```

## Real World React Apps

-   Creating a real-world app involves lot of setup because a large number of components need to be organised.
-   Facebook has created a Third-Party Package create-react-app to generate a ready-made React application setup

`npm install -g create-react-app`

-   it installs create-react-app globally in our environment
    `Note` - It pre-installed in your environment

-   Run this command in terminal to create a React application
    `create-react-app myapp --use-npm`

## Create-react-app

-   public/folder: Where we'll keep assets like images,icons,videos,etc.
-   src/folder:Where we'll do the majority of our work.All of our React Components will placed here. The index.js is a starting point to the Application.

## ESLint Popup

-   When opening a file in myapp, you will get a popup for ESLint extenstion .Click on Allow to work everything as expected.

## Starting an Application

-   Run npm start command from myapp directory

## ES6 Modules

-   ES6 Modules should be named with .js extenstion.
    -   Default Exports - export default ComponentName
    -   Named Exports - export const ComponentName = () = {}

## Pre-Configured tools

-   create-react-app comes pre-configured with
    -   Live editing = Live editing allows React Components to be live reloaded
    -   ESLint = It is used to analyze source code to report programming errors,bugs, and syntax errors.
    -   Prettier = Prettier enforces a consistent style for indentation,spacing,semicolons,single quotes vs double quotes, etc.
    -   Babel = Babel is a JavaScript Compiler, complies JSX into Regular JavaScript
    -   Webpack = Webpack is used to stitch together a group of modules into a single file (or group of files) , This process is called Bundling.

# Lists & Keys

-   Keys
    -   Keys as Props
-   Users List Application

### Building UserProfile Component

### Steps

-   props (userDetails)
-   UserProfile

## Lets create a UserProfile Component

-   Let's create src/components folder to keep the components organised

-   create components/UserProfile folder to place the UserProfile component

```
const UserProfile = () => (
    <div>
        <img src="" />
    </div>
);

export default UserProfile;
```

### Let's render Users List

-   preparing List of Users data

### Keys

### Adding unique Id

-   Keys help React to identify which items have changed,added or removed
-   Each child in an array or iterator should have a unique key prop

## Userprofile Component

-   if the local module path is a folder,then by default index.js in that folder will be imported

# Class Component and state

-   Components
    -   Class Component
-   Events
    -   Handing Events in React
-   State
    -   setState()

## Components

-   There are two ways to write React Components
    -   Functional Components
    -   Class Components

## class Component

-   we can built React Components using JavaScript classes

## syntax

-   To define a React Class Component,we need to extend Component

```
import {Component} from 'react'
class MyComponent extends Component{

}
```

`Note` Component name should be in PascalCase.

### Extends

-   The extends keyword is used to inherit methods and properties from the Component

### Component - props,methods

### methods - render(),componentDidMount() etc...

### MyComponent = props + methods

### syntax

```
import {Component} from 'react'

class MyComponent extends Component{
    render(){
        return JSX
    }
}
```

-   render() is class component returns the JSX element

```
import {Component} from 'react'

class Welcome extends Component{
render(){
return <h1> Hello, User</h1>
}
}
export default Welcome
```

### Passing Props

```
import Welcome from './components/Welcome'

const App = () =>{
    return <Welcome name='Rahul'/>
}
export default App
```

### Functional Component

```
const Welcome = props =>{
    const {name} = props
    return <h1>Hello,user</h1>
}
```

### Class Component

```
class Welcome extends Component{
    render(){
        const {name} = this.props
        return <h1>Hello,{name}</h1>
    }
}
```

## Let's build a Counter App

-   steps
    -   Build a Static Version in React
    -   Add Event Listeners
    -   Update Count based on User Actions

### Handling Events in React

### Syntax

-   Adding lnline Events using JSX is very similar to adding Events in HTML

```
<button onClick = {this.onIncrement}>Increase</button>
```

`Note` We should not call the function when we add an event in JSX

### State

-   The state is a JS object in which we store the Component's data that changes over the time

-   Component - state ==> extends
-   Counter

### Component re-rendering

-   When the state object changes the component re-renders
-   State => render()

### updating State

### setState()

-   Updation of state can be done by using setState()

-   We can provide function/object as an argument to set the state

### Providing Function as Argument

-   updating of state can be done by using setState()
-   We can provide function/object as an argument to set the state

-   this.setState(prevState =>({}))

-   Function can be passed as an argument.
-   Previous state sent as a parameter to the callback function

### Where to use?

### Functional Components

-   Renders the UI based on props

### Class Components

-   Renders the UI based on props and state

-   Use class component when require state otherwise use functional component as a practice

# Conditional Rendering

-   React JS
    -   Conditional Rendering
-   Conditional Rendering
    -   Different ways to implement conditional Rendering
-   React Component
    -   Default Props

## Conditional Rendering

-   Conditional Rendering allows us to render different elements or components based on a condition

## Let's take an Example

### Not Preferable

-   Conditional Rendering can be achieved using inline styles or adding classes with css display property with none value
-   However,it is Not Preferable

### Default Props

-   default props is a property in React Component used to set default values for the props

-   This is similar to adding default parameters to the function

### Syntax

```
- component Definition

ComponentName.defaultProps = {
    propName1:'propValue1',
    propName2:'propValue2'
}

- Exporting Component
```

# Components

-   Components
    -   Functional Components
    -   Class Components
-   React Events
-   State
    -   Updating State
    -   State Updates are Merged
    -   Functional Components vs Class Components

## Components

-   There are two ways to write React Components
-   They are:
    -   Functional Components
    -   Class Components

1. What is the difference between Component and PureComponent? give an example where it might break my app.
    - 

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
3. Describe 3 ways to pass information from a component to its PARENT.
    - Use state management libraries such as Redux as they allow us to declare global states that can be updated by any component including child components
    in the component tree.
    - We can also achieve this by passing down functions that have the ability to update the state being also passed down from the Parent component
    e.g, in the code submission, we are updating the value in the input field by clicking on one of the highlighted search results we get from the API. This is handle by the
    ```handleAutoComplete``` which takes in a ```text: string``` as argument and sends the updated value up to its parent.
    ```jsx
           const handleAutoComplete = (text: string) => {
                setAutoCompleted(true);
                setFilter(text);
            };
    ``` 
    - 
4. Give 2 ways to prevent components from re-rendering.
    - Use Memoization with `useMemo()` and `UseCallBack()` Hooks - With memoization in place, components are restricted to only re-rendering when there is a change in props.
    - API Call optimization with `ReactQuery` - Normally we would use `useEffect` to load async data, however, `useEffect` re-fetched data on each re-render and in most cases
    its usually loading the same data. We can work around this by using the React Query library which ensure that before it makes a new network call, it checks its cached memory for cached response data and only makes a network call if there is new data on the network which wasn't previously cached.
    - We can also ensure that whenever we use `useEffect` in our code, we also assign it its appropriate dependencies so as to avoid any unnecessary re-renders.
5. What is a fragment and why do we need it? Give an example where it might break my app.
    - A fragment is a component that lets you group a list of HTML elements without adding extra nodes to the DOM. It is (arguably so), mostly used in place of `<div></div>` or `<></>` elements, although they are ultimately translated as div elements in the browser when the app is run. Unlike regular react components, the <Fragment /> does not take in HTML props like `className` so that may result in an error.
6. Give 3 examples of the HOC pattern.
    - Relay's `createFragmentContainer`
    - Redux's `connect` 
    - React Router's `withRouter`
7. what's the difference in handling exceptions in promises, callbacks and async...await. 
    - In Promises, exceptions are handle via the `catch` function which returns the exception:
    ```js
        const promise1 = new Promise((resolve, reject) => {
            throw 'Uh-oh!';
        });

        promise1.catch((error) => {
        console.error(error);
        });
    ```
    - In callbacks, exceptions are handled by the anonymous function that either returns data or an exception, like so:
    ```js
        myCallBack(url, (data, error) => {
            if(error) {
                console.error(error);
            }
        })
    ```
    - In async-await, errors are best handled by a try catch statement:
    ```js
        try {
            await db.connect();
        } catch(error) {
            console.error(error) // handle db connection error here
        }
    ```
8. How many arguments does setState take and why is it async.
    - setState only accepts one argument, which is the value to which you woul like to update a state to. It is async because it may be dealing with an operation that 
    runs over a network, thereby increasing the chances of it running for a long time, and that might affect component rendering.
9.  List the steps needed to migrate a Class to Function Component
    ```jsx
    /// Lets converte this class component to a functional component
    class MyComponent extends Component {
        state = {
            name: 'Thulani'
        }

        render() {
            return (
                <Fragment>
                    <h3>Hello, {this.state.name}</h3>
                </Fragment>
            )
        }
    }

    /// 1. Converte the class to a function:
    const MyComponent = () => {}

    /// 2. Replace state = {} with react-hooks
    import {useState} from 'react;
    const MyComponent = () => {
        const [name, setName] = useState<string>('Thulani');
    }

    /// 3. Replace this.state.name to just 'name' and remove 'render' to only remain with 'return'
    import {useState} from 'react;
    const MyComponent = () => {
        const [name, setName] = useState<string>('Thulani');

        return (
            <Fragment>
                <h3>Hello, {this.state.name}</h3>
            </Fragment>
        )
    }
    export default MyComponent;
    ```
    This completes our conversion of a class component to a functional component. If we had had component lifecycle methods in the original class Component, we would had to replace those with the useEffect hook respectively as it acts as an alternative to component lifecycle methods. The beauty with useEffect is that you can manipulate when it runs by introducting dependencies to it.
10. List a few ways styles can be used with components.
    - Using in-line css:
    ```jsx
        <div style={{backgroundColor: 'purple'}}></div>
    ```
    - Importing css files into components and using `className` to reference the css objects.
        ```jsx
            import '../css/main.css'
            <div className='main-container'></div>
        ```
    - Using external packages such as StyledComponents.
11. How to render an HTML string coming from the server.
    ```js ReactDOMServer.renderToString()```
    You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads.
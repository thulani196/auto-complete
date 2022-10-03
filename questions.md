1. What is the difference between Component and PureComponent? give an example where it might break my app.
    - 

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
3. Describe 3 ways to pass information from a component to its PARENT.
    - Use state management libraries such as Redux as they allow us to declare global states that can be updated by any component including child components
    in the component tree.
    - We can also achieve this by passing down functions that have the ability to update the state being also passed down from the Parent component
    e.g, in the code submission, we are updating the value in the input field by clicking on one of the highlighted search results we get from the API. This is handle by the
    ```
           const handleAutoComplete = (text: string) => {
                setAutoCompleted(true);
                setFilter(text); // comes from the child component
            };
    ``` 
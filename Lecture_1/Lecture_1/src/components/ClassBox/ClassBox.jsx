import React from "react";

class ClassBox extends React.Component {
  render() {
    return (
      <div className="w-1/2 bg-slate-600 px-5 py-4 mt-5 mr-2 text-white ml-5 rounded-xl hover:bg-blue-900 transition-all">
        Updating the screen Often, you’ll want your component to “remember” some
        information and display it. For example, maybe you want to count the
        number of times a button is clicked. To do this, add state to your
        component. First, import useState from React: The first time the button
        is displayed, count will be 0 because you passed 0 to useState.
        <br /><br />
        When you want to change state, call setCount and pass the new value to it.
        Clicking this button will increment the counter: Functions starting with
        use are called Hooks. useState is a built-in Hook provided by React.
        <br /><br />
        You can find other built-in Hooks in the API reference. You can also write
        your own Hooks by combining the existing ones. Hooks are more
        restrictive than other functions. You can only call Hooks at the top of
        your components or other Hooks. If you want to use useState in a
        condition or a loop, extract a new component and put it there.
      </div>
    );
  }
}

export default ClassBox;

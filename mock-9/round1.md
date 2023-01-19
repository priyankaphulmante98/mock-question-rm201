*************************MOCK-9***************************

1] What is the difference between .call() .apply() and .bind()? explain with an example

Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);
person.fullName.call(person2);

Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.
The call() method takes arguments separately.
The apply() method takes arguments as an array.
The apply() method is very handy if you want to use an array instead of an argument list.
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);

Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.
With the bind() method, an object can borrow a method from another object.
The example below creates 2 objects (person and member).
The member object borrows the fullname method from the person object:


const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

Link ⇒ https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/

2] Explain Event bubbling and Event Capturing in JavaScript with suitable examples

Event bubbling and event capturing are the two interesting concepts of JavaScript. Before diving deep into these fascinating concepts, let us first know about what an event listener is? An event listener is basically a function that waits for an event to occur. That event can be anything like a mouse click event, submitting a form, pressing keys of a keyboard, etc.



3] What is function currying with example?

Currying is when you break down a function that takes multiple arguments into a series of functions that each take only one argument.

 Here's an example in JavaScript: 
function add (a, b,c) {
 return a + b+c; 
}
 add(3, 4,6); // returns 13. 
This is a function that takes two arguments, a and b, and c and returns their sum.

const add = a => b => b ? add(a + b) : a; console.log(add(1)(2)(3)(4)());


4] What is the difference between real DOM and virtual DOM?

It is a structured representation of HTML in the webpage or application. Is known as real dom 

Virtual DOM is just like a blueprint of a real dom, can do changes in the blueprint but those changes will not directly apply to the real dom.

Accordingly, React's advantage over other frameworks is that it creates Virtual DOM as a copy of the Real DOM, and whenever the state change in a React component happens, it re-renders the Virtual DOM first, compares the old version to the new one, and eventually only the required minimum is changed in the Real DOM



5] Why did you choose React over other Libraries and Frameworks?
Speed
React basically allows developers to utilize individual parts of their application on both the client-side and the server-side, which ultimately boosts the speed of the development process.
In simple terms, different developers can write individual parts and all changes made won’t cause the logic of the application.
Flexibility
Compared to other frontend frameworks, the React code is easier to maintain and is flexible due to its modular structure. This flexibility, in turn, saves a huge amount of time and cost to businesses.
Performance
React JS was designed to provide high performance in mind. The core of the framework offers a virtual DOM program and server-side rendering, which makes complex apps run extremely fast.
Read More: Top tips to optimize React performance
Usability
Deploying React is fairly easy to accomplish if you have some basic knowledge of JavaScript.
In fact, an expert JavaScript developer can easily learn all ins and outs of the React framework in a matter of a day or two.
Reusable Components
One of the main benefits of using React JS is its potential to reuse components. It saves time for developers as they don’t have to write various codes for the same features. Furthermore, if any changes are made in any particular part, it will not affect other parts of the application.
Mobile app development
If you thought React is for web development only, you could not be more wrong! Facebook has already upgraded the framework for developing mobile native applications for both Android & iOS platforms.
So, now that you know the key benefits of the React framework, let’s move forward and also check out the top reasons to Choose React JS for your next project.


















6] What is prop drilling and explain it with an example (parent to child)
Prop drilling is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.







7] What is the difference between function and class components?



8] Explain the lifecycle method of React Components.

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.

Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
Updating: Updating is the stage when the state of a component is updated and the application is repainted.
Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.


9] Explain the Flow of Redux.?

Redux follows the unidirectional data flow. It means that your application data will follow in one-way binding data flow. As the application grows & becomes complex, it is hard to reproduce issues and add new features if you have no control over the state of your application.




10] What are hooks? Explain a few hooks you have used.

What is React Hooks? React Hooks are the built-in functions that permit developers for using the state and lifecycle methods within React components. These are newly added features made available in React 16.8 version. Each lifecycle of a component is having 3 phases which include mount, unmount, and update.


Link ⇒ https://dev.to/mursalfk/basic-hooks-in-react-4ai3


10]  Explain useMemo, useRef, useEffect, and useCallback hooks in react.

Link ⇒  https://blog.logrocket.com/usestate-vs-useref/


10]  Make a small application using react where on a button click it should count from 0   to 10 and on clicking it again it should count from 10 to 0.


I want to increment/decrement counter based on button click. Scenario: There is an initial value on the button- say: 5 When a user clicks on the button, it increments to +1 - o/p: 6 however when the user clicks again on the button it, it'll reduce to 5 again. this case I dont have 2 buttons- inc and dec to increase/decrease the count.

import { useState } from "react";


export default function Counter() {
 const [counter, setCounter] = useState(0);
 return (
   <div>
     <h1 data-test-id="header-counter">Counter {counter}</h1>
     <button disabled={counter===10}
      onClick={() => setCounter(counter + 1)}
       data-testid="add-btn"
     >
       ADD
     </button>
<button disabled={counter===0}
    
       onClick={() => setCounter(counter - 1)}
       data-testid="reduce-btn"
     >
       REDUCE
     </button>
   </div>
 );
}
















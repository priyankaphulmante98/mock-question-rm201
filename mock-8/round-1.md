1] what is hoisting shown with an example?

hoisting is the phenomenon in javascript by which access this var and function before declaring it    
                                                                Or 
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

b()
console.log(a)
var a=10;              //undefined
var b= function(){
    console.log("hi");   //type error b is not function
};
function b(){
    console.log("hi");  //hi
};
console.log(a);   //10



2]  what are the promises shown with an example?

A promise is an object and promises is a good way to handle asynchronous operation. 
It is used to find out if the asynchronous operation is used successfully completed or not.
It will be in one of the 
3 possible states: fulfilled, rejected, or pending.

Promises start with a pending state means the initial state, is neither fulfilled nor rejected. 
if the operation is successful the process ends in a fulfilled state.
if an error occurs, the process ends in a rejected state 

const promise = new Promise( (resolve, rejected) => {
    setTimeout(() => {
      resolve("promise resolved");   //promise resolved
    },5000);
  },
  (rejected) => {
  console.log("promise rejected")
}
);
promise.then((value) =>
 console.log(value));




# task: what is the output?

function sleep(){
}
    sleep(3000)
    .then(res =>{
        console.log(`print after 3 second`);
    })
    .catch(err => {
        console.log(err);
    })

    //TypeError: Cannot read properties of undefined (reading 'then')


3] what are closures? show an example.

closures is that function is bundled together with the lexical environment is known as closures.

function outer(){

var name="priya"     //priya

function inner(){

console.log(name);

 }
 inner()
  }
outer()






3] What is the difference between a block element and an inline element? Give few examples of block and inline tags which we have in HTML.





2] What are pseudo-elements and pseudo-classes in CSS? Give some examples.




     

Link ⇒ https://blog.esteetey.dev/primer-css-pseudo-elements-and-pseudo-classes

3] What is difference between Local storage, session storage and cookies?

Local Storage
Session Storage
Cookies
It allows 10MB of data to be stored.
It allows 5MB of data to be stored.
The storage capacity is limited to 4KB of data.
The stored data is not deleted when the browser is closed.
The data is stored only for the session and will be deleted when the browser is closed.
The data can be set to expire at a certain time.
Local storage is useful for storing data that the user will need to access later, such as offline data.
Session storage is a great way to improve the performance of your web applications.
Cookies are a good choice for storing data that should not be persisted for a long time, such as session IDs.
This is especially useful for storing data that you want to persist even if the user closes the browser, such as preferences or settings.
Session storage is useful for storing data that is sensitive, such as login credentials.
Cookies are often used to store data that is not sensitive, such as user preferences
Local Storage is a new feature introduced in HTML5
Session Storage is a new feature introduced in HTML5
Cookies are the oldest (HTML4) and most wellknown mechanism.
The data is not sent with the request from the client to the server.
The data is not sent with the request from the client to the server
The data is sent with the request from the client to the server
The data is stored on the browser and system.
The data is stored on the browser only.
The data is stored on the browser only.

Link ⇒ https://www.tutorialspoint.com/difference-between-local-storage-session-storage-and-cookies-in-javascript#:~:text=a%20certain%20time.-,Local%20storage%20is%20useful%20for%20storing%20data%20that%20the%20user,time%2C%20such%20as%20session%20IDs.

4] What is Hoisting in Javascript?

Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. 

Or

hoisting is phenomenon in javascript by which access this var and function before declaring it

Or 

Hoisting is the default behavior in the js when the js pgm starts executing all the variable and functions declarations are moved at the top. And the variables are initially  assigned with a special keyword undefined

Ex⇒

b()
console.log(a)
var a=10;              //undefined
var b= function(){
    console.log("hi");   //type error b is not function
};
function b(){
    console.log("hi");  //hi
};
console.log(a);   //10












5] What are different higher order functions in JS?
 What is the difference between .map() and .forEach() ?

Higher-order functions are regular functions that take one or more functions as arguments and/or return functions as a value from it. 
Or
Hof is the function that executes another function 
Ex map(), filter(), reduce()
 
Eg:
function x() {
    console.log("Hi");
};
function y(x) {
    x();
};
y(x); // Hi
// y is a higher order function
// x is a callback function
 

7] Explain execution context diagram of following code snippets, use white board to draw execution context diagram



Everything in JS happens inside the execution context. Imagine a sealed-off container inside which JS runs. It is an abstract concept that hold info about the env. within the current code is being executed. 
In the container the first component is memory component and the 2nd one is code component
Memory component has all the variables and functions in key value pairs. It is also called Variable environment.
Code component is the place where code is executed one line at a time. It is also called the Thread of Execution.
JS is a synchronous, single-threaded language
Synchronous:- In a specific synchronous order.
Single-threaded:- One command at a time.
Link⇒
https://github.com/priyankaphulmante98/namaste-javascript-notes/blob/master/notes/lecture-2.md 


8] What are promises? What are the different states of a promise? Support your answer with an example where you need to create your own promise.
A promise is an object and promises is a good way to handle asynchronous operation. 
It is used to find out if the asynchronous operation is used successfully completed or not.
It will be in one of the 3 possible states: fulfilled, rejected, or pending
      A promises start with a pending state means an initial state, neither fulfilled nor      rejected.. if the operation is successful the process ends in a fulfilled state.if an error occurs, the process ends in a rejected state 

           const promise = new Promise( (resolve, rejected) => {
    setTimeout(() => {
      resolve("promise resolved");      //promise resolved
    },5000);
  },
  (rejected) => {
  console.log("promise rejected")
}
);
promise.then((value) =>
 console.log(value));

9] What is ‘this’ keyword in JavaScript? explain with an example
“This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function.
this keyword always refers to the parent object
Ex:   console.log(this)   //winddow/global object
let form={
Name:”priya”,
email:”p@gmail.com”,
Print:function (){
console.log(this)   // it prints form object
}

10] What is an Immediately Invoked Function in JavaScript? explain with an example

It is a JavaScript function that runs as soon as it defined. An IIFE (Immediately Invoked Function Expression) can be used for avoiding the variable hoisting from within the blocks.
 
 
Why we use immediately invoked function in JavaScript?
IIFEs prevent pollution of the global JS scope. In a traditional function, if you create a variable within the function, it is accessible in the global object. If you define a variable in an IIFE, it is accessible only directly within the function
 
 
11]  Explain OOPs concept and explain the Four Principles of OOP.
 
   //interview four pillars ====>
 
    //  1] Encapsulations==>
    //  encapsulation means wrapping uo data and 
    //  member function (method) toghther into a 
    //  single unit
 ex: class, capsule
 
    //   2] Abstraction ====>
 
    //   Abstraction is thr process of showing only essential/ necessary featrures
    //   of an entity/object to the  outside world and hide the other irreleevant
    //   information.
Ex⇒ remote ,
        // 3] Inheritance: =====>
 
        // inhertiance allows a class (subclass) to acquire the properties and 
        // behaviour of another class (super-class). it helps to reuse , customize
        // and enhance the existing code. So it helps to write a code accurately and 
        // reduce the development time.
 
        // 4] Polymorphism: =====>
 
        //  so polymorphism means " many forms ". A subclass can define its own unique 
        //  behaviour and still share the same functionalities or behaviour of its 
        //  parent/ base class 
 






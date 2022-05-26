import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="blogs bg-base-200 p-3 ">
        <div className=" my-5">
          <h1 className='text-3xl font-bold text-red-600'> 1. How will you improve the performance of a React Application?</h1>
          <p className='text-2xl'>Optimizing application performance is important for developers who are mindful of keeping a user’s experience positive to remain them on an app and engaged.

in line with research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

In React applications, we are guaranteed a extremely fast UI by default. However, as an application grows, developers may encounter some performance issues.

during this guide, we are visiting discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:</p>
           <ol>
               <li>1. Keeping component state local where necessary</li>
               <li>2. Memoizing React components to prevent unnecessary re-renders</li>      
               <li>3.Code-splitting in React using dynamic import</li>
               <li>4.Windowing or list virtualization in React</li>
               <li>5.Lazy loading images in React</li>
               </ol>
           
           </div>
           <div className="py-5">
               <h1 className='text-3xl font-bold text-red-600'>2. What are the different ways to manage a state in a React application?</h1>
               <p className='text-2xl'>Are you facing difficulties in making loading spinners or a pop-up appears at the correct time? It may be thanks to an unmanaged state in React. A state may be a JavaScript object. It stores a component’s dynamic data and determines the component’s behavior. In other words, it's the interface between any data of changes (backend or local) and therefore the representation of this data with UI elements within the frontend.

The state helps keep the information of various components in sync since each state update will re-render all relevant components. It also can act as a medium to speak between various components. Managing state is one in all the toughest parts of any application, which is why there are numerous state management libraries/tools available, including Redux, MobX, Flux, RxJS, and more.
                <li>1 . Communication State</li> 
                <p className='text-lg'>Communication state forms the backbone of your React Native app without you even knowing about it. Remember once you had requested a call back to an HTTP request? That’s once you introduced the communication system in your app.</p>
                <li>2. Data State</li>
                <p className='text-lg'>Data state covers information that your React application stores temporarily for various business functions. Supposedly, you're building a project management app. the info stored within the info state will include the following things – project names, contacts, details about the clients, etc..</p> 
                <li>3. Control State</li> 
                <p className='text-lg'>Contrary to the state mentioned above during a very React app, the control state doesn't represent the application’s environment. Instead, it refers to the state which the user has input into the app. for example, form inputs, selected items, etc. Control state is known to be more diverse and versatile when it involves storing information.</p>
                <li>4. Session State</li>
                <p className='text-lg'>So far, we've discussed the following states:

1. Data/ Communication State- Predictable shaped states which are required application-wide

2. Control State- Unpredictable shaped states which are not required throughout

Now let’s discuss a state which is required to be available throughout the applying but features a lesser well-defined shape.</p> 
                 <li>5. Location State</li> 
                 <p className='text-lg'>Location state is that the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! one all told the foremost interesting facts about Location state is that you simply simply can give directions to a user to parts of the applying that do not have unique URLs associated with them. Also, the HTML5 History API allows you to store states separately from the actual URL.</p>
                
              </p>
           </div>
           <div className="py-5">
               <h1 className='text-3xl font-bold text-red-600'>3.How does prototypical inheritance work?</h1>
               <p className='text-2xl'>JavaScript could be a prototype-based, Object Oriented artificial language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods may be shared, extended, and copied. Sharing amid objects makes for straightforward inheritance of structure (data fields), behavior (functions / methods), and state (data values). JavaScript is that the most typical of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript may be a powerful tool that may save hours of coding. Today, we wish to urge you conversant in prototypal inheritance in JavaScript to urge you up thus far with the ES6 capabilities.</p>
              </div>
           <div className="py-5">
               <h1 className='text-3xl font-bold text-primary'>4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <ul>
                    <li>1. Take the value of the search box.</li>
                    <li>2. find in the array of products</li>
                    <li>3. condition product name == search value</li>
                    <li>4. get the value of find data </li>
                </ul>
                <h1>Example : </h1>
                <img src="https://i.ibb.co/Mg4Zkp8/a.png" alt="" />
            </div>

           <div className="py-5">
               <h1 className='text-3xl font-bold text-red-600'> 5.What is a unit test? Why should write unit tests?</h1>
               <h2 className='text-2xl font-bold text-red-600'>Unit test:</h2>
               <p className='text-2xl '>Unit testing involves the testing of each unit or an individual component of the software application. It is the first level of functional testing. The aim behind unit testing is to validate unit components with its performance.

                 A unit is a single testable part of a software system and tested during the development phase of the application software.
                 
                 The purpose of unit testing is to test the correctness of isolated code. A unit component is an individual function or code of the application. White box testing approach used for unit testing and usually done by the developers.
                 
                 Whenever the application is ready and given to the Test engineer, he/she will start checking every component of the module or module of the application independently or one by one, and this process is known as Unit testing or components testing.</p>
                 <h2 className='text-2xl font-bold text-red-600'>Why write unit tests:</h2>
               <p className='text-2xl '>In a testing level hierarchy, unit testing is the first level of testing done before integration and other remaining levels of the testing. It uses modules for the testing process which reduces the dependency of waiting for Unit testing frameworks, stubs, drivers and mock objects are used for assistance in unit testing.
               Generally, the software goes under four level of testing: Unit Testing, Integration Testing, System Testing, and Acceptance Testing but sometimes due to time consumption software testers does minimal unit testing but skipping of unit testing may lead to higher defects during Integration Testing, System Testing, and Acceptance Testing or even during Beta Testing which takes place after the completion of software application.
               </p>
              </div>



      </div>
    );
};

export default Blogs;
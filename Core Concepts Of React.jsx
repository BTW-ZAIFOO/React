//======Core Concepts of React=======//

//=-=-=-Components-=-=-=//

//-----Definition---//

//-----Components are the foundational building blocks of a React application, designed to be reusable and modular.---//

//=-=-=-Types-=-=-=//

1. //----Functional Components---//
//----JavaScript functions that accept props and return JSX.---//
2. //----Class Components:----//
//----ES6 classes with a render method to return JSX (used less often in modern React due to functional components and hooks).---//

//=-=-=-JSX (JavaScript XML)-=-=-=//

//---Definition:---//

//---A syntax extension for JavaScript that looks similar to HTML.---//

//----Purpose:---//

//----Allows developers to describe UI structure in a more readable and declarative manner.---//

//=-=-=-Key Features-=-=-=//

1. //----Embeds HTML-like code into JavaScript files.---//
2. //----Enables combining UI markup with JavaScript logic.---//
3. //-----Transpiled to JavaScript using tools like Babel.---//

//=-=-=-Virtual DOM-=-=-=//

//----Definition:---//

//---A lightweight, in-memory representation of the actual DOM.---//

//---Purpose:---//

//---Optimizes performance by minimizing direct manipulation of the real DOM.---//

//=-=-=-How It Works-=-=-=//

1. //---Changes are first applied to the Virtual DOM.---//
2. //---React compares the updated Virtual DOM with the previous one (diffing algorithm).---//
3. //---Only the changed elements are updated in the real DOM.---//

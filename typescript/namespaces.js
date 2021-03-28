/**
 * namespace keyword is used to create namespaces.
 - To use namespaces in typescript, they must be exported
 - Namespaces help you organise code into logical units and prevent possible 'collisions' with third party code.
 - You need to export properties (like variables, constants) and methods (functions) of the namespace so that they are available
  - ///<reference path="module1.ts"/> -- used to set import refferences
 */
var myNameSpace;
(function (myNameSpace) {
    function displayData() {
        console.log("Hi, my name is Michael Murithi");
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
console.log(myNameSpace.displayData());

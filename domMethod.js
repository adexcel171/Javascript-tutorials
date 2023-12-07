JavaScript provides a variety of DOM (Document Object Model) manipulation methods that allow you to interact with HTML and XML documents. Here are 20 commonly used DOM manipulation methods in JavaScript:

getElementById(id):

Returns a reference to the element with the specified ID.
javascript
Copy code
var element = document.getElementById('myElement');
getElementsByClassName(className):

Returns a collection of elements with the specified class name.
javascript
Copy code
var elements = document.getElementsByClassName('myClass');
getElementsByTagName(tagName):

Returns a collection of elements with the specified tag name.
javascript
Copy code
var elements = document.getElementsByTagName('p');
querySelector(selector):

Returns the first element that matches the specified CSS selector.
javascript
Copy code
var element = document.querySelector('.myClass');
querySelectorAll(selector):

Returns a NodeList of all elements that match the specified CSS selector.
javascript
Copy code
var elements = document.querySelectorAll('.myClass');
createElement(tagName):

Creates a new HTML element with the specified tag name.
javascript
Copy code
var newElement = document.createElement('div');
appendChild(node):

Appends a node as the last child of a parent node.
javascript
Copy code
parentElement.appendChild(newElement);
removeChild(node):

Removes a child node from its parent.
javascript
Copy code
parentElement.removeChild(childElement);
setAttribute(name, value):

Sets the value of an attribute on the specified element.
javascript
Copy code
element.setAttribute('class', 'newClass');
getAttribute(name):

Returns the value of the specified attribute on the element.
javascript
Copy code
var value = element.getAttribute('class');
classList.add(className):

Adds a class to the element's list of classes.
javascript
Copy code
element.classList.add('newClass');
classList.remove(className):

Removes a class from the element's list of classes.
javascript
Copy code
element.classList.remove('oldClass');
classList.toggle(className):

Toggles the presence of a class; adds the class if it doesn't exist, and removes it if it does.
javascript
Copy code
element.classList.toggle('active');
innerHTML:

Gets or sets the HTML content within an element.
javascript
Copy code
var content = element.innerHTML;
element.innerHTML = '<p>New content</p>';
innerText and textContent:

Gets or sets the text content of an element.
javascript
Copy code
var text = element.innerText;
element.textContent = 'New text content';
style.property:

Gets or sets the value of a style property on an element.
javascript
Copy code
element.style.color = 'red';
addEventListener(event, callback):

Attaches an event listener to the element.
javascript
Copy code
element.addEventListener('click', function() {
  console.log('Element clicked');
});
removeEventListener(event, callback):

Removes an event listener from the element.
javascript
Copy code
element.removeEventListener('click', clickHandler);
scrollTop and scrollLeft:

Gets or sets the number of pixels that an element's content is scrolled vertically or horizontally.
javascript
Copy code
var scrollTopValue = element.scrollTop;
element.scrollTop = 100;
window.alert(message):

Displays an alert dialog with the specified message.
javascript
Copy code
window.alert('Hello, world!');
These are just a few examples of the many methods available for DOM manipulation in JavaScript.
 Understanding and using these methods will empower you to create dynamic and interactive web applications.
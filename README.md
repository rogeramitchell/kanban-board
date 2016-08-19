# kanban-board

Working on how to create a set of cards and columns in an attractive layout that allows users to view data in a kanban board / cardwall format. Users are able to drag cards with position between columns.

## Short Term Goals

- Create a nice layout and experience as a static page
- Read data from a Salesforce object to populate the wall
- Push updates back to the underlying object

## Longer Term Goals

- Abstract the code to allow users to configure the page based on their Salesforce object use case
	- Fields that appear on each card
	- Column groupings
	- Sort order of cards

### References

From a Mozilla Foundation article about using the drag and drop API.
```js
  var dragged;

  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = .5;
      event.target.style.background = "black";
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
      event.target.style.background = "";
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "dropzone" ) {
          //event.target.style.background = "purple";
          event.target.classList.add("thisThing");
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.classList.contains("thisThing")) {
          //event.target.style.background = "";
          event.target.classList.remove("thisThing");
      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.classList.contains("dropzone")) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          //dragged.parentNode.classList.remove("thisThing");
          event.target.appendChild( dragged );
      }
    
  }, false);
```
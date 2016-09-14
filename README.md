# kanban-board

Working on how to create a set of cards and columns in an attractive layout that allows users to view data in a kanban board / cardwall format. Users are able to drag cards with position between columns.

## Current Version Demo
![Current Demo GIF](assets/v2_demo.gif)

## Short Term Goals

- Create a nice layout and experience as a static page
- Read data from a Salesforce object to populate the wall
- Push updates back to the underlying object

## Longer Term Goals

- Abstract the code to allow users to configure the page based on their Salesforce object use case
	- Fields that appear on each card
	- Column groupings
	- Sort order of cards

## Known Bugs

1. Dragstart event not consistently bound to `article` (card), needs review
1. 

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
          event.target.appendChild( dragged );
      if ( event.target.classList.contains("dropzone")) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          //dragged.parentNode.classList.remove("thisThing");
      }
    
  }, false);
```

## Components

**Card**
```html
<article class="slds-card slds-card--narrow" draggable="true">
	<header class="slds-card__header slds-grid">
		<div class="slds-media slds-media--center slds-has-flexi-truncate">
			<div class="slds-media__body slds-truncate">
				<h2>
					<a href="javascript:void(0);" class="slds-text-link--reset">
					<span class="slds-text-heading--small">Card Header 1</span>
					</a>
				</h2>
			</div>
		</div>
		<div class="slds-no-flex">
			<button class="slds-button slds-button--icon-border-filled slds-button--icon-x-small" aria-haspopup="true">
				&#x25BC;
				<span class="slds-assistive-text">More Options</span>
			</button>
		</div>
	</header>
	<div class="slds-card__body slds-text-align--center">Card Body (custom goes in here)</div>
	<div class="slds-card__footer">Card Footer</div>
</article>
```

**Column**
```html
<div class="column">
	<div class="column-header">
		<h2 class="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate">Status 1</h2>
	</div>
</div>
```

## Functioning Webpack Config
```js
var webpack = require("webpack");

module.exports = {
	entry: ["./js/main.js", "./js/app.js"],
	output: {
		filename: "./build/bundle.js"
	},

	resolve: {
		extensions: ["", ".js"]
	},

	module: {
		loaders: [
		  	{ 
		  		test: /\.js$/,
		  		exclude: "/node_modules/",
		  		loader: "babel", 
		  		query: { 
		  			presets: ["es2015", "react"]
		  		}
		  	}
		]
	}
};
```

## Functioning Package for Browser-Sync + Webpack
```json
{
  "name": "kanban-board",
  "version": "1.0.0",
  "description": "working on a project to create a kanban board similar to Trello, JIRA, Assembla; the ultimate goal is to have this pull data from Salesforce into a kanban board based on buckets from underlying data, where cards represent records in the database",
  "main": "index.html",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "browser-sync start --server --files index.html css/*.css ",
    "webpack": ""
  },
  "author": "Roger Mitchell (@RogerMitchell)",
  "license": "ISC",
  "dependencies": {
    "@salesforce-ux/design-system": "^2.0.3"
  },
  "devDependencies": {
    "babel-loader": "^6.2.5",
    "babel-preset-es2015": "^6.14.0",
    "babel-preset-react": "^6.11.1",
    "babelify": "^7.3.0",
    "browser-sync": "^2.15.0",
    "react": "^15.3.1",
    "react-dom": "^15.3.1",
    "webpack": "^1.13.2"
  }
}
```
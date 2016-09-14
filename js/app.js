import React from "react";
import ReactDOM from "react-dom";

var Column = React.createClass({
	render: function() {
		return (
			<div className="column">
				<div className="column-header">
					<h2 className="slds-page-header__title slds-m-right--small slds-align-middle slds-truncate">Status 1</h2>
				</div>
				<Card/>
				<Card/>
				<Card/>
			</div>
		)
	}
});

var Card = React.createClass({
	render: function() {
		return (
			<article className="slds-card slds-card--narrow" draggable="true">
				<header className="slds-card__header slds-grid">
					<div className="slds-media slds-media--center slds-has-flexi-truncate">
						<div className="slds-media__body slds-truncate">
							<h2>
								<a href="javascript:void(0);" className="slds-text-link--reset">
								<span className="slds-text-heading--small">Card Header 1</span>
								</a>
							</h2>
						</div>
					</div>
					<div className="slds-no-flex">
						<button className="slds-button slds-button--icon-border-filled slds-button--icon-x-small" aria-haspopup="true">
							&#x25BC;
							<span className="slds-assistive-text">More Options</span>
						</button>
					</div>
				</header>
				<div className="slds-card__body slds-text-align--center">Card Body (custom goes in here)</div>
				<div className="slds-card__footer">Card Footer</div>
			</article>
		)
	}
});

ReactDOM.render(
	<Column/>,
	document.getElementById('container')
);
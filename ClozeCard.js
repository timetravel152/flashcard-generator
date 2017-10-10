// Requires BasicCard constructor exported from BasicCard.js.
var BasicCard = require("./BasicCard.js");

// Constructor function for creating ClozeCard objects.
var ClozeCard = function(text, cloze) {

	// This is a scope-safe constructor.
	// First checks if object is a new instance, i.e., includes new operator.
	if (this instanceof ClozeCard) {
		this.fullText = text;
		this.cloze = cloze;

		// Creates partial text for Cloze flashcard.
		this.partial = function() {
			if (this.fullText.includes(this.cloze)) {
				return this.fullText.replace(this.cloze, '...');
			} else {
				// Broken cloze message returned when text doesn't containt cloze.
				var brokenClozeMessage = "Oops! The full text: '" + this.fullText + "' doesn't contain the cloze: '" + this.cloze + "'.";
				return brokenClozeMessage;
			}
		};
	// If new operator missing, creates new instance of object correctly.
	} else {
		return new ClozeCard(text, cloze);
	}
};

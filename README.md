# mzStickies

A response to an interview challenge to create a small Single Page App for creating Sticky Notes

## Demo

http://mzstickies.herokuapp.com

## Requirements

* Load a starting page with a button that indicates that it will create a New note.

* When user clicks or taps (touch event) the button a text entry area opens that allows them to type up to 240 characters.

* Text in the typing area (but not yet “saved”) should survive a hard page refresh (Command/Control-r).

* When done, user should be able to click, tap (touch event) a “save” button.

* The save button should save the text in some kind of local storage and display it in a grid of sticky notes.

* Refresh of page should show notes in local storage.

* Notes should be sorted by most recent on top.

## Excuses

I added some features and flair not in the spec, just for fun and my need for thoroughness and to exercise some skills.

I did not refactor as much of the Angular code as I could have. This was a purposeful decision, since refactoring into services and directives would have added complexity for little benefit; we don't need the reusability or efficiency gains from these components for such basic requirements. Before building any further, though, logic in the controller should move to services/directives/etc.

I did not make incremental commits because this was not a complex app and I moved quickly, but I should have.

I did not write tests, but I should have.
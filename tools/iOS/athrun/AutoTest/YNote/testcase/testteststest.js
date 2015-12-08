
var target = UIATarget.localTarget();
var app = target.frontMostApp();
var win = app.mainWindow();
var tableViews = target.frontMostApp().mainWindow().tableViews()["Empty list"]
tableViews.cells().firstWithName("Buttons, Various uses of UIButton").tap();
assertEquals(13, tableViews.cells().length);

var navigationBar = target.frontMostApp().navigationBar();
navigationBar.withName("Buttons").buttons().firstWithName("Back").tap();

function assertEquals(expected, received, message) {
  if (received != expected) {
    if (! message) message = "Expected " + expected + " but received " + received;
    throw message;
  }
}
var re = JSON.stringify(UIATarget.rect())

UIALogger.logMessage(re);
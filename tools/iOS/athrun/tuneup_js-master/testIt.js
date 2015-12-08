#import "tuneup.js"
var target = UIATarget.localTarget();

var app = target.frontMostApp();
var table = target.frontMostApp().mainWindow().tableViews()["Empty list"];
table.logElementJSON("ALL");
var num = table.cellNamed("Controls, Various uses of UIControl");
UIALogger.logMessage("  systemVersion: "+ JSON.stringify(num.rect()));
//target.frontMostApp().navigationBar().leftButton().tap();


var target = UIATarget.localTarget();



target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Buttons, Various uses of UIButton"].tap();
target.frontMostApp().navigationBar().leftButton().tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["TextView, Use of UITextField"].tap();
target.frontMostApp().navigationBar().leftButton().tap();
//var aa = target.withName("Buttons, Various uses of UIButton");
//aa.tap();
target.logElementTree();
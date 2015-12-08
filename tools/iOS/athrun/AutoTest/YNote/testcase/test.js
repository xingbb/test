
var target = UIATarget.localTarget();

target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Buttons, Various uses of UIButton"].tap();
target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Background Image"].buttons()["Gray"].tap();
target.frontMostApp().navigationBar().leftButton().tap();


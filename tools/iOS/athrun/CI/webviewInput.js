#import "../LibJS/imports.js"
//webview输入英文或者字符内容,注意需要首先Tap对应的webview输入点
function typeWebViewString(String,Obj){
    
    if (String != ""){
		
        var stringLength = String.length;
        var string1 = String.substr(1,stringLength);
		
        Athrun.typeString(String[0]);
        if (String != null) {
            Obj.staticTexts()[String[0]].doTap();
        }
        if (string1 != null) {
            Athrun.typeString(string1);
        }
    }
}

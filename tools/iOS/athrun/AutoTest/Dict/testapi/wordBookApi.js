//添加单词数组到单词本中,并验证添加成功
//参数languge:  语言 ：  中英  中日 中韩  中法
//参数 querys  存放单词的数组
//参数 count 单词本中现在有的单词个数
//返回值：添加完成后单词本中单词的个数
function addWordToBook(languge,querys,count){
		var length = querys.length;
	
		for (var num=0;num<length;num++){
				print("query="+querys[num]);
				Searchword(languge,querys[num]);
				delay(1);
				//添加单词到单词本
				
				var bcount = target.frontMostApp().windows()[0].tableViews()[1].visibleCells()[0].buttons().length;
				getAddToWordBookButton(bcount-1).doTap();
				count++;
				//验证单词本个数
				Default_homePage_fromDictSearch()
				delay(2);
				getWordBookButtonInHomePage().doTap();
				delay(1);
				Athrun.assertEquals(count, getWordsInBook().length);	
				count = getWordsInBook().length;
				Default_homePage_fromWordBook()
		}
		return count;
}

//单词本登陆操作  已进入单词本页面
function wordBookOnline(name,pass){
		getWordSynButton().doTap();
		delay(1);
		
		getTextFieldOfUserName().doTap();
		delay(1);
		
		if(getTextFieldOfUserName().buttons().length!=0){
			getTextFieldOfUserName().buttons()[0].doTap();
			delay(1)
		}
		getTextFieldOfUserName().setValue(name);
		getTextFieldOfUserName().doTap();
		delay(1);
		
		getTextFieldOfUserPass().doTap();
		delay(1);
		getTextFieldOfUserPass().setValue(pass);
		target.frontMostApp().windows()[0].scrollViews()[0].buttons()["登录"].doTap();
		delay(2);
	
}


//删除单词本
		
function Clear_WordBook(){
		
		getWordBookButtonInHomePage().doTap();
		delay(1);	
		
		getWordEditButton().doTap();
		delay(1);
	
	
		var cells = target.frontMostApp().windows()[0].tableViews()[0].cells();
		
		for(var i = 0; i < cells.length; i++ ){
				cells[i].doTap();
				delay(1);
		}
		if(cells.length >0){
				target.frontMostApp().navigationBar().buttons()["dict delete icon normal"].doTap();
				target.frontMostApp().navigationBar().buttons()["translate finish normal"].doTap();
		}
	
		//返回主界面
		Default_homePage_fromWordBook();		
		
}

 
//查词后恢复到首页初始状态
function Default_homePage_fromDictSearch(){
	
		target.frontMostApp().windows()[0].buttons()[0].doTap();
		delay(1);
		target.frontMostApp().mainWindow().tableViews()[0].visibleCells()["中英"].doTap();
		getCancelButtonInSearchPage().doTap();
		delay(1);
}

//查询单词
function Searchword(language,word){	
	
		getSearchButtonInHomePage().doTap();
		delay(1);
		target.frontMostApp().mainWindow().buttons()["dict input ce normal"].doTap();
		target.frontMostApp().mainWindow().tableViews()[0].visibleCells()[language].doTap();
		target.frontMostApp().mainWindow().textFields()[0].doTap();
		target.frontMostApp().mainWindow().textFields()[0].setValue(word+"\n");
		target.frontMostApp().keyboard().typeString("\n");
		
}


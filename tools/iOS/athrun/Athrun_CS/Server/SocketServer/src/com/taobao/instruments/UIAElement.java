/**
 * 
 */
package com.taobao.instruments;

/**
 * @author ziyu.hch
 * 
 */
public class UIAElement {

	public String guid = null;

	public UIAElement(String guid) {
		this.guid = guid;
	}

	/**
	 * get the element's parent element
	 * 
	 * @return parent元素
	 */
	public UIAElement parent() {
		String guid = MySocket.getGuid(this.guid + ".parent()");
		return new UIAElement(guid);
	}

	/**
	 * 取得当前元素下的所有子元素
	 * 
	 * @return
	 */
	public UIAElement[] elements() {

		String[] guids = MySocket.getGuidArray(this.guid + ".elements()");
		return elementArray(guids);
	}

	public UIAElement[] ancestry() {

		String[] guids = MySocket.getGuidArray(this.guid + ".ancestry()");
		return elementArray(guids);
	}

	public UIAActivityIndicator[] activityIndicators() {

		String[] guids = MySocket.getGuidArray(this.guid
				+ ".activityIndicators()");
		return activityIndicatorArray(guids);
	}

	/**
	 * 取得当前元素下所有button类型的子元素
	 * 
	 * @return
	 */
	public UIAElement[] buttons() {

		String[] guids = MySocket.getGuidArray(this.guid + ".buttons()");
		return elementArray(guids);
	}

	// -images
	public UIALink[] links() {

		String[] guids = MySocket.getGuidArray(this.guid + ".links()");
		return linkArray(guids);
	}

	public UIANavigationBar navigationBar() {
		String guid = MySocket.getGuid(this.guid + ".navigationBar()");
		return new UIANavigationBar(guid);
	}

	public UIANavigationBar[] navigationBars() {
		String[] guids = MySocket.getGuidArray(this.guid + ".navigationBars()");
		return navigationBarArray(guids);
	}

	// pageIndicators

	public UIAPicker[] pickers() {

		String[] guids = MySocket.getGuidArray(this.guid + ".pickers()");
		return pickerArray(guids);
	}

	// popover
	// progressIndicators

	public UIAScrollView[] scrollViews() {
		String[] guids = MySocket.getGuidArray(this.guid + ".scrollViews()");
		return scrollViewArray(guids);
	}

	public UIASearchBar[] searchBars() {
		String[] guids = MySocket.getGuidArray(this.guid + ".searchBars()");
		return searchBarArray(guids);
	}

	public UIASecureTextField[] secureTextFields() {
		String[] guids = MySocket.getGuidArray(this.guid
				+ ".UIASecureTextField()");
		return secureTextFieldArray(guids);
	}

	// segmentedControls
	// sliders

	public UIAStaticText[] staticTexts() {

		String[] guids = MySocket.getGuidArray(this.guid + ".staticTexts()");
		return staticTextArray(guids);
	}

	public UIASwitch[] switches() {

		String[] guids = MySocket.getGuidArray(this.guid + ".switches()");
		return switchArray(guids);
	}

	public UIATabBar tabBar() {
		String guid = MySocket.getGuid(this.guid + ".tabBar()");
		return new UIATabBar(guid);
	}

	public UIATabBar[] tabBars() {
		String[] guids = MySocket.getGuidArray(this.guid + ".tabBars()");
		return tabBarArray(guids);
	}

	public UIATableView[] tableViews() {
		String[] guids = MySocket.getGuidArray(this.guid + ".tableViews()");
		return tableViewArray(guids);
	}

	public UIATextField[] textFields() {
		String[] guids = MySocket.getGuidArray(this.guid + ".textFields()");
		return textFieldArray(guids);
	}

	public UIATextView[] textViews() {
		String[] guids = MySocket.getGuidArray(this.guid + ".textViews()");
		return textViewArray(guids);
	}

	public UIAToolbar toolbar() {
		String guid = MySocket.getGuid(this.guid + ".toolbar()");
		return new UIAToolbar(guid);
	}

	public UIAToolbar[] toolbars() {
		String[] guids = MySocket.getGuidArray(this.guid + ".toolbars()");
		return toolbarArray(guids);
	}

	public UIAWebView[] webViews() {
		String[] guids = MySocket.getGuidArray(this.guid + ".webViews()");
		return webViewArray(guids);
	}

	/*
	 * private <T> T[] elementArray2(String[] guids) { T[] elements = new
	 * T[guids.length];
	 * 
	 * for (int i = 0; i < guids.length; i++) { T button = new T(guids[i]);
	 * elements[i] = button; } return elements; }
	 */

	// -------------Gestures and Actions------------
	/**
	 * tap
	 */
	public void tap() {
		MySocket.getVoid(this.guid + ".tap()");
	}

	public void touchAndHold(int seconds) {
		MySocket.getVoid(this.guid + ".touchAndHold(" + seconds + ")");
	}

	public void scrollToVisible() {
		MySocket.getVoid(this.guid + ".scrollToVisible()");
	}

	/*
	 * -----Determining Element State-----
	 * 
	 * Use these methods to determine whether an element is still valid.
	 * 
	 * isValid checkIsValid waitForInvalid hasKeyboardFocus isEnabled isVisible
	 */

	public Boolean isValid() {
		return MySocket.getBoolen(this.guid + ".isValid()");
	}

	public Boolean checkIsValid() {
		return MySocket.getBoolen(this.guid + ".checkIsValid()");
	}

	public Boolean waitForInvalid() {
		return MySocket.getBoolen(this.guid + ".waitForInvalid()");
	}

	public Boolean hasKeyboardFocus() {
		return MySocket.getBoolen(this.guid + ".hasKeyboardFocus()");
	}

	public Boolean isEnabled() {
		return MySocket.getBoolen(this.guid + ".isEnabled()");
	}

	public Boolean isVisible() {
		return MySocket.getBoolen(this.guid + ".isVisible()");
	}

	// ------Identifying Elements------

	public String label() {

		return MySocket.getText(this.guid + ".label()");
	}

	public String name() {

		return MySocket.getText(this.guid + ".name()");
	}

	public String value() {

		return MySocket.getText(this.guid + ".value()");
	}

	/**
	 * Returns a UIAElement if its name attribute matches a specified string.
	 * 
	 * @param name
	 * @return a UIAElement
	 */
	public UIAElement withName(String name) {
		String guid = MySocket.getGuid(this.guid + ".withName('" + name + "')");
		return new UIAElement(guid);
	}

	// -----Logging Element Information-----

	public void logElement() {
		MySocket.getVoid(this.guid + ".logElement()");
	}

	public void logElementTree() {
		MySocket.getVoid(this.guid + ".logElementTree()");
	}

	// private methods
	private UIAElement[] elementArray(String[] guids) {

		UIAElement[] elements = new UIAElement[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIAElement element = new UIAElement(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIAStaticText[] staticTextArray(String[] guids) {

		UIAStaticText[] elements = new UIAStaticText[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIAStaticText element = new UIAStaticText(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIASwitch[] switchArray(String[] guids) {

		UIASwitch[] elements = new UIASwitch[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIASwitch element = new UIASwitch(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIAPicker[] pickerArray(String[] guids) {

		UIAPicker[] elements = new UIAPicker[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIAPicker element = new UIAPicker(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIANavigationBar[] navigationBarArray(String[] guids) {

		UIANavigationBar[] elements = new UIANavigationBar[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIANavigationBar element = new UIANavigationBar(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIAScrollView[] scrollViewArray(String[] guids) {

		UIAScrollView[] elements = new UIAScrollView[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIAScrollView element = new UIAScrollView(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIASearchBar[] searchBarArray(String[] guids) {

		UIASearchBar[] elements = new UIASearchBar[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIASearchBar element = new UIASearchBar(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIASecureTextField[] secureTextFieldArray(String[] guids) {

		UIASecureTextField[] elements = new UIASecureTextField[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIASecureTextField element = new UIASecureTextField(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIATabBar[] tabBarArray(String[] guids) {

		UIATabBar[] elements = new UIATabBar[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIATabBar element = new UIATabBar(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIATableView[] tableViewArray(String[] guids) {

		UIATableView[] elements = new UIATableView[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIATableView element = new UIATableView(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIATextField[] textFieldArray(String[] guids) {
		UIATextField[] elements = new UIATextField[guids.length];

		for (int i = 0; i < guids.length; i++) {
			UIATextField element = new UIATextField(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIATextView[] textViewArray(String[] guids) {

		UIATextView[] elements = new UIATextView[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIATextView element = new UIATextView(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIAToolbar[] toolbarArray(String[] guids) {

		UIAToolbar[] elements = new UIAToolbar[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIAToolbar element = new UIAToolbar(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIAWebView[] webViewArray(String[] guids) {

		UIAWebView[] elements = new UIAWebView[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIAWebView element = new UIAWebView(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIAActivityIndicator[] activityIndicatorArray(String[] guids) {

		UIAActivityIndicator[] elements = new UIAActivityIndicator[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIAActivityIndicator element = new UIAActivityIndicator(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

	private UIALink[] linkArray(String[] guids) {

		UIALink[] elements = new UIALink[guids.length];
		for (int i = 0; i < guids.length; i++) {
			UIALink element = new UIALink(guids[i]);
			elements[i] = element;
		}
		return elements;
	}

}

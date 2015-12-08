/**
 * 
 */
package com.taobao.instruments;

/**
 * @author ziyu.hch
 * 
 */
public class UIAApplication {

	public String guid = null;

	public UIAApplication(String guid) {
		// TODO Auto-generated constructor stub
		this.guid = guid;
	}

	public UIAWindow[] windows() {

		String[] guids = MySocket.getGuidArray(this.guid + ".windows()");
		return elementArray(guids);
	}

	/** 
	 *  
	 */
	public UIAWindow mainWindow() {
		String guid = MySocket.getGuid(this.guid + ".mainWindow()");
		return new UIAWindow(guid);
	}

	public UIAActionSheet actionSheet() {
		String guid = MySocket.getGuid(this.guid + ".actionSheet()");
		return new UIAActionSheet(guid);
	}

	public UIANavigationBar navigationBar() {
		String guid = MySocket.getGuid(this.guid + ".navigationBar()");
		return new UIANavigationBar(guid);
	}

	public UIAStatusBar statusBar() {
		String guid = MySocket.getGuid(this.guid + ".statusBar()");
		return new UIAStatusBar(guid);
	}

	/**
	 * tabBar
	 */
	public UIATabBar tabBar() {
		String guid = MySocket.getGuid(this.guid + ".tabBar()");
		return new UIATabBar(guid);
	}

	public UIAToolbar toolbar() {
		String guid = MySocket.getGuid(this.guid + ".toolbar()");
		return new UIAToolbar(guid);
	}

	private UIAWindow[] elementArray(String[] guids) {
		UIAWindow[] elements = new UIAWindow[guids.length];

		for (int i = 0; i < guids.length; i++) {
			UIAWindow button = new UIAWindow(guids[i]);
			elements[i] = button;
		}
		return elements;
	}
}

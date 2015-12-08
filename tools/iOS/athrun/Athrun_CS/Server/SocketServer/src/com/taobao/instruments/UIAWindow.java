/**
 * 
 */
package com.taobao.instruments;

/**
 * @author ziyu.hch
 * 
 */
public class UIAWindow extends UIAElement {

	/**
	 * 
	 */
	public UIAWindow(String guid) {
		// TODO Auto-generated constructor stub
		super(guid);
	}

	// public Rect contentArea()

	/**
	 * navigationBar
	 * 
	 * @return navigationBar instance
	 */
	public UIANavigationBar navigationBar() {
		String guid = MySocket.getGuid(this.guid + ".navigationBar()");
		return new UIANavigationBar(guid);
	}

	public UIANavigationBar[] navigationBars() {
		String[] guids = MySocket.getGuidArray(this.guid + ".navigationBars()");
		return navigationBarArray(guids);
	}

	public UIATabBar tabBar() {
		String guid = MySocket.getGuid(this.guid + ".tabBar()");
		return new UIATabBar(guid);
	}

	public UIATabBar[] tabBars() {
		String[] guids = MySocket.getGuidArray(this.guid + ".tabBars()");
		return tabBarArray(guids);
	}

	public UIAToolbar toolbar() {
		String guid = MySocket.getGuid(this.guid + ".toolbar()");
		return new UIAToolbar(guid);
	}

	public UIAToolbar[] toolbars() {
		String[] guids = MySocket.getGuidArray(this.guid + ".toolbars()");
		return toolbarArray(guids);
	}

	private UIAToolbar[] toolbarArray(String[] guids) {
		UIAToolbar[] elements = new UIAToolbar[guids.length];

		for (int i = 0; i < guids.length; i++) {
			UIAToolbar element = new UIAToolbar(guids[i]);
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

	private UIANavigationBar[] navigationBarArray(String[] guids) {
		UIANavigationBar[] elements = new UIANavigationBar[guids.length];

		for (int i = 0; i < guids.length; i++) {
			UIANavigationBar element = new UIANavigationBar(guids[i]);
			elements[i] = element;
		}
		return elements;
	}
}

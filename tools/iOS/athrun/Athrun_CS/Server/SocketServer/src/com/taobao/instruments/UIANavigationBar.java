/**
 * 
 */
package com.taobao.instruments;

/**
 * @author ziyu.hch
 * 
 */
public class UIANavigationBar extends UIAElement {

	/**
	 * @param guid
	 */
	public UIANavigationBar(String guid) {
		super(guid);
		// TODO Auto-generated constructor stub
	}

	public UIAButton leftButton() {
		String guid = MySocket.getGuid(this.guid + ".leftButton()");
		return new UIAButton(guid);
	}

	public UIAButton rightButton() {
		String guid = MySocket.getGuid(this.guid + ".leftButton()");
		return new UIAButton(guid);
	}

}

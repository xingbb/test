/**
 * 
 */
package com.taobao.instruments;

/**
 * @author ziyu.hch
 * 
 */
public class UIAScrollView extends UIAElement {

	/**
	 * @param guid
	 */
	public UIAScrollView(String guid) {
		super(guid);
		// TODO Auto-generated constructor stub
	}

	public void scrollUp() {
		MySocket.getVoid(this.guid + ".scrollUp()");
	}

	public void scrollDown() {
		MySocket.getVoid(this.guid + ".scrollDown()");
	}

	public void scrollLeft() {
		MySocket.getVoid(this.guid + ".scrollLeft()");
	}

	public void scrollRight() {
		MySocket.getVoid(this.guid + ".scrollRight()");
	}

	public UIAElement scrollToElementWithName(String name) {

		String guid = MySocket.getGuid(this.guid + ".scrollToElementWithName('"
				+ name + "')");
		return new UIAElement(guid);
	}
}

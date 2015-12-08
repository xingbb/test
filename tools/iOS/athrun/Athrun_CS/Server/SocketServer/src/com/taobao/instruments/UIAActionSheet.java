/**
 * 
 */
package com.taobao.instruments;

/**
 * @author ziyu.hch
 * 
 */
public class UIAActionSheet extends UIAElement {

	/**
	 * @param guid
	 */
	public UIAActionSheet(String guid) {
		super(guid);
		// TODO Auto-generated constructor stub
	}

	public UIAButton cancelButton() {
		String guid = MySocket.getGuid(this.guid + ".cancelButton()");
		return new UIAButton(guid);
	}

}

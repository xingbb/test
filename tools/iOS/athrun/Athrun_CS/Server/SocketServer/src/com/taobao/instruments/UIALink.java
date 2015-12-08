/**
 * 
 */
package com.taobao.instruments;

/**
 * @author ziyu.hch
 * 
 */
public class UIALink extends UIAElement {

	/**
	 * @param guid
	 */
	public UIALink(String guid) {
		super(guid);
		// TODO Auto-generated constructor stub
	}

	public String url() {
		return MySocket.getText(this.guid + ".url()");
	}
}

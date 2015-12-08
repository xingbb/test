/**
 * 
 */
package com.taobao.instruments;

/**
 * @author ziyu.hch
 * 
 */
public class UIATextView extends UIAElement {

	/**
	 * @param guid
	 */
	public UIATextView(String guid) {
		super(guid);
		// TODO Auto-generated constructor stub
	}

	public void setValue(String value) {
		MySocket.getVoid(this.guid + ".setValue('" + value + "')");
	}
}

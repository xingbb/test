/**
 * 
 */
package com.taobao.instruments;

/**
 * @author ziyu.hch
 * 
 */
public class UIATextField extends UIAElement {

	/**
	 * @param guid
	 */
	public UIATextField(String guid) {
		super(guid);
		// TODO Auto-generated constructor stub
	}

	public void setValue(String value) {
		MySocket.getVoid(this.guid + ".setValue('" + value + "')");

	}
}

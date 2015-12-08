/**
 * 
 */
package com.taobao.instruments;

/**
 * @author ziyu.hch
 * 
 */
public class UIAPickerWheel extends UIAPicker {

	/**
	 * @param guid
	 */
	public UIAPickerWheel(String guid) {
		super(guid);
		// TODO Auto-generated constructor stub
	}

	public void selectValue(String value) {
		MySocket.getVoid(this.guid + ".selectValue('" + value + "')");

	}
}

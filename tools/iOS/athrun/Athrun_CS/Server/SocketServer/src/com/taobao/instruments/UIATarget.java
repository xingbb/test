package com.taobao.instruments;


public class UIATarget {

	public String guid = null;

	public UIATarget() {
		String guid = MySocket.getGuid("UIATarget");
		this.guid = guid;
	}

	public UIATarget(String guid) {
		this.guid = guid;
	}

	/**
	 * localTarget
	 */
	public static UIATarget localTarget() {
		String guid = MySocket.getGuid("UIATarget.localTarget()");
		return new UIATarget(guid);
	}

	/**
	 * 
	 */
	public UIAApplication frontMostApp() {
		String guid = MySocket.getGuid(this.guid + ".frontMostApp()");
		return new UIAApplication(guid);
	}

	public String getGuid() {
		return guid;
	}

	public void setGuid(String guid) {
		this.guid = guid;
	}

}

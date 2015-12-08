package com.taobao.athrun;

import com.taobao.instruments.UIAApplication;
import com.taobao.instruments.UIATarget;

public class AthrunCSTest extends IOSTestCase {
	public void testTest() throws Exception {

		UIATarget target = UIATarget.localTarget();
		UIAApplication app = target.frontMostApp();
		app.tabBar().buttons()[1].tap();
		String name = app.tabBar().buttons()[0].name();
		assertEquals("首页", name);
		assertTrue(app.tabBar().buttons()[1].isEnabled());
	}
}

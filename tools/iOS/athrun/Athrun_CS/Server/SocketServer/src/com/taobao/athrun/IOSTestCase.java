package com.taobao.athrun;

import com.taobao.instruments.MySocket;

import junit.framework.TestCase;

public class IOSTestCase extends TestCase {

	@Override
	protected void setUp() throws Exception {
		// TODO Auto-generated method stub
		super.setUp();

	}

	@Override
	protected void tearDown() throws Exception {
		// TODO Auto-generated method stub
		super.tearDown();
		MySocket.sendExit();

	}

}

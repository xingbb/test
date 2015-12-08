package com.taobao.instruments;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Date;

public class MySocket {

	public static ServerSocket server = null;

	public static String getGuid(String script) {

		return send(ReturnedType.guidType + "##" + script);

	}

	public static void sendExit() {

		exit(ReturnedType.exitType.toString());

	}

	private static void exit(String exitMark) {
		// TODO Auto-generated method stub
		if (server == null) {
			creatSocket();
		}
		String request = null;
		try {
			Socket socket = null;
			try {
				socket = server.accept();
			} catch (Exception e) {
				System.out.println("Error." + e);
			}
			BufferedReader is = new BufferedReader(new InputStreamReader(
					socket.getInputStream()));

			PrintWriter os = new PrintWriter(socket.getOutputStream());
			request = is.readLine();
			System.out.println(new Date() + "\tClient request : " + request);
			System.out.println(new Date() + "\tServer reply   : " + exitMark);
			os.print(exitMark);
			os.flush();

			// 刷新输出流，使Client马上收到该字符串

			os.close();
			is.close();
			socket.close();
			server.close();
		} catch (Exception e) {

			System.out.println("Error:" + e);
		}

	}

	public static String[] getGuidArray(String script) {
		String guids = send(ReturnedType.arrayType + "##" + script);

		// 如果返回的guids为空，则代表数组没有取得任何元素，返回一个空数组
		if (guids.isEmpty()) {
			return new String[0];
		}
		return guids.split("#");
	}

	public static String getText(String script) {
		return send(ReturnedType.stringType + "##" + script);
	}

	public static Boolean getBoolen(String script) {
		String returnStr = send(ReturnedType.booleanType + "##" + script);
		if (returnStr.equals("1")) {
			return true;
		} else {

			return false;
		}
	}

	public static void getVoid(String script) {
		send(ReturnedType.voidType + "##" + script);
	}

	private static void creatSocket() {
		try {
			System.out.println("The server listen to port: 5566");
			server = new ServerSocket(5566);
			// 创建一个ServerSocket在端口5566监听客户请求

		} catch (Exception e) {
			System.out.println("can not listen to:" + e);
		}
	}

	private static String send(String script) {

		if (server == null) {
			creatSocket();
		}
		// System.out.println("script:\t" + script);
		String guid = null;
		String request = null;
		try {
			Socket socket = null;
			try {
				socket = server.accept();
			} catch (Exception e) {
				System.out.println("Error." + e);
			}
			BufferedReader is = new BufferedReader(new InputStreamReader(
					socket.getInputStream()));

			PrintWriter os = new PrintWriter(socket.getOutputStream());
			request = is.readLine();
			System.out.println(new Date() + "\tClient request : " + request);
			System.out.println(new Date() + "\tServer reply   : " + script);
			System.out.println("-------------------------------------------");
			os.print(script);
			os.flush();

			// 刷新输出流，使Client马上收到该字符串

			os.close();
			is.close();
			socket.close();

			// 第二次建立socket，获取 上一步运行的guid

			try {
				socket = server.accept();
			} catch (Exception e) {
				System.out.println("Error." + e);
			}
			is = new BufferedReader(new InputStreamReader(
					socket.getInputStream()));

			os = new PrintWriter(socket.getOutputStream());
			guid = is.readLine();
			System.out.println(new Date() + "\tClient request : " + guid);
			System.out.println(new Date() + "\tServer reply   : null");
			os.print("null");
			os.flush();

			os.close();
			is.close();
			socket.close();

			// server.close();

		} catch (Exception e) {

			System.out.println("Error:" + e);
		}

		return guid;
	}
}

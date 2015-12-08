#!/usr/bin/python
# -*- coding:utf-8 -*-

# 生成帮助文件，如：python createhelp.py webserver-online.xml > help 可以从webserver-online中提取testSuite,testCase,testStep和description信息到help文件中

from xml.dom import  minidom
from xml.dom.minidom import parse
import xml.dom.minidom
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

def filter(filelist):
    result = []
    doc = minidom.parse(filelist)
    root = doc.documentElement
    testSuites = root.getElementsByTagName("con:testSuite")
    for testSuite in testSuites:
        result.append("\ntestSuite: " + testSuite.getAttribute("name") + " .")
        testCases = testSuite.getElementsByTagName("con:testCase")
        if testCases:
            for testCase in testCases:
                result.append("\n    testCase: " +  testCase.getAttribute("name") + " .")
                descriptionDom = testCase.getElementsByTagName("con:description")
                if descriptionDom:
                    description = descriptionDom[0].childNodes[0].data
                    result.append("    description: " + description + " .")
                testSteps = testCase.getElementsByTagName("con:testStep")
                if testSteps:
                    for testStep in testSteps:
                        result.append("           testStep: " + testStep.getAttribute("name") + " .")
    return result

if __name__ == "__main__":
    source = sys.argv[1]
    result = filter(source)
    for line in result:
        print line


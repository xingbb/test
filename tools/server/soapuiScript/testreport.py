#!/usr/bin/python
#encoding=utf-8

# 对生成的xml测试报告进行修改，把测试用例的信息和case失败的错误信息加进去，便于从web页面查看
# 如: python testreport.py searchserver-monitor_milestone.xml log/ soapui.log

import os
import sys
import re
import commands
import createhelp
import gethelp
import gettestdata
import getlog
from xml.etree import ElementTree
errorfiles=[]
reload(sys)
sys.setdefaultencoding('utf-8')

# 将每个测试用例集的xml测试报告进行优化
def createreport(testfile,path,testsuite,logList):
        # 记录所有用例详细信息的临时文件,由soapui在teardown时生成
        datapath = os.path.join('testdata')
        if os.path.exists(datapath):
            report = []
            fop = open(datapath,'r')
            datafile = fop.readlines()
            fop.close()
        else:
            datafile = None
        reportfile = os.path.join(path,"TEST-" + testsuite + ".xml")
        root = ElementTree.fromstring(open(reportfile,'r').read())
        testcaseList = root.getiterator("testcase")
        for index in range(len(testcaseList)):
            testcase = testcaseList[index]
            failure = testcase.getiterator("failure")
            # 对失败的用例进行处理
            if len(failure) > 0:
                testcaseName = testcase.attrib["name"]
                print testcaseName
                try:
                        helpinfo = gethelpinfo(testfile,datafile,testsuite,testcaseName)
                        errorinfo = geterrorfile(path,testsuite,testcaseName)
                        loginfo = getloginfo(logList,testcaseName)
                        info = loginfo + helpinfo + "\n\n######################## 步骤失败的详细信息 ######################## \n\n" + errorinfo
                        print info
                        if (info):
                            failure[0].text = "<![CDATA[" + info + "]]>"
                except Exception as err:
                    print err
        tree = ElementTree.ElementTree(root)
        tree.write(reportfile,'utf8')

# 获取用例的log信息
def getloginfo(logfile,testcase):
    loginfo = getlog.get_log(logfile,testcase)
    log = "\n\n######################## 测试用例执行日志 ######################## \n\n"
    for line in loginfo:
        log = log + line + '\n'
    return log

# 获取用例的帮助信息
def gethelpinfo(filelist,datalist,testsuite,testcase):
        helpsource = createhelp.filter(filelist)
        helpinfo = gethelp.get_help(helpsource,testsuite,testcase)
        help = "\n######################## 测试用例说明 ######################## \n"
        for line in helpinfo:
            help = help + line + '\n'
        if datalist != None:
            datainfo = gettestdata.get_data(datalist)
            for line in datainfo:
                help = help + line + '\n'
        return help 

# 获取详细的错误信息
def geterrorfile(path,testsuite,testcase):
        global errorfiles
        testsuite = testsuite.replace(' ','_').replace('-','').replace("&amp;","&").replace(":","")
        testcase = testcase.replace(' ','_').replace('-','').replace("&amp;","&").replace(":","")
        file = ""
        error = ""
        for line in errorfiles:
            if (line.find(testsuite) != -1 and line.find(testcase) != -1):
                file = os.path.join(path,line.strip())        
        if (file != ""):
            errorfile = []
            fop = open(file,'r')
            errorfile = fop.readlines()
            fop.close()
            for line in errorfile:
                error = error + line
        return error
        
if __name__ == "__main__":        
#        global errorfiles
        testfile = sys.argv[1]
        path = sys.argv[2]
        logPath = sys.argv[3]

        # 收集有失败测试用例的testSuite列表
        arraylist = os.listdir(path)
        testsuites = []
        for line in arraylist:
            if (line.find(".xml") != -1):
                testsuites.append(line.split("-")[1].split(".")[0])
            elif (line.find(".txt") != -1):
                errorfiles.append(line)
        testsuites = list(set(testsuites))

        # 读取log文件
        logList = []
        fop = open(logPath,'r')
        logList = fop.readlines()
        fop.close()

        # 在这些testSuite的xml文件中，为失败的用例添加描述信息和详细错误信息
        for line in testsuites:
            line = line.strip()
            createreport(testfile,path,line,logList)

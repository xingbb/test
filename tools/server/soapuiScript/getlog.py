#!/usr/bin/python
#encoding=utf-8

# 从帮助文件中获取某个testCase的详细帮助信息，如：python getlog.py soapui.log "查询异常订单(实时)" 从soapui.log文件中获取测试用例"查询异常订单(实时)"的详细帮助信息

#import getopt
import os
import sys
import re

reload(sys)
sys.setdefaultencoding('utf-8')

def get_log(filelist,testcase):
    caseflag=0
    result = []
    for line in filelist:
        if (line.find("Running SoapUI testcase [" + testcase + "]") != -1):
            caseflag=1
            result.append(line)
        elif (caseflag == 1 and line.find("testcase") == -1):
            result.append(line.strip('\n'))
        elif (caseflag == 1 and line.find("Finished running SoapUI testcase [" + testcase + "]") != -1):
            result.append(line)
            break
        else:
            continue
    if(caseflag == 0):
        result.append("testCase not found")
    return result

if __name__ == "__main__":
    filename = sys.argv[1]
    testcase = sys.argv[2]
    filelist = []
    fop = open(filename,'r')
    filelist = fop.readlines()
    fop.close()
    result = get_log(filelist, testcase)
    for line in result:
        print line
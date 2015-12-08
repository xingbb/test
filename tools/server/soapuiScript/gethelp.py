#!/usr/bin/python
#encoding=utf-8

# 从帮助文件中获取某个testCase的详细帮助信息，如：python gethelp.py help notebook "create notebook" 从help文件中获取测试用例集notebook的测试用例"create notebook"的详细帮助信息

#import getopt
import os
import sys
import re

def get_help(filelist,testsuite,testcase):
    suiteflag=0
    caseflag=0
    result = []
    for line in filelist:
        if (line.find("testSuite: " + testsuite + " .") != -1):
            suiteflag=1
            result.append(line)
        elif (suiteflag == 1 and caseflag == 0 and (line.find("testCase: " + testcase + " .") != -1)):
            caseflag=1
            result.append(line)
        elif (suiteflag == 1 and caseflag == 1 and line.find("testCase: ") == -1 and line.find("testSuite: ") == -1):
            result.append(line.strip('\n'))
        elif (suiteflag == 1 and caseflag == 1 and (line.find("testCase: ") != -1 or line.find("testSuite: ") != -1)):
            break
        else: 
            continue
    if(suiteflag == 0):
        result.append("testSuite not found")
    elif(caseflag == 0):
        result.append("testCase not found")
    return result

if __name__ == "__main__":
    filename = sys.argv[1]
    testsuite = sys.argv[2]
    testcase = sys.argv[3]
    filelist = []
    fop = open(filename,'r')
    filelist = fop.readlines()
    fop.close()
    result = get_help(filelist, testsuite, testcase)
    for line in result:
        print line

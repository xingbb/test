#!/usr/bin/python
#encoding=utf-8

# 从测试数据文件中获取所有临时测试数据

import os
import sys
import re

def get_data(filelist):
    result = []
    result.append("测试数据: ")
    for line in filelist:
        if(line.find("project") == -1 and line.find("testSuite") == -1 and line.find("testCase") == -1):
            result.append(line.strip("\n"))
    return result

if __name__ == "__main__":
    filename = sys.argv[1]
    filelist = []
    fop = open(filename,'r')
    filelist = fop.readlines()
    fop.close()
    result = get_data(filelist)
    for line in result:
        print line

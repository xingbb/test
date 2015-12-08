#!/bin/sh
#kill iOS模拟器上app进程和删除app的shell脚本
#执行命令： sh DataCleanManager.sh 应用程序名字 kill进程or移除app
#注意中文的app需要把bash的编码格式调整成可显示中文进程
#Created by xingbb
if [[ $# < 2 ]] ; then
    echo "usage sh DataCleanManager.sh appName AppProgress/AppData/ps/data"
    exit
fi
appName=$1".app"
cmd=$2
#get AppProgress
AppProgress=`ps -A |grep $appName | grep -v -e "grep\|Athrun" | awk '{print $1}'`
echo "$AppProgress"
#get AppPath
getAppID=`ps -A |grep $appName | grep -v -e "grep\|Athrun"|awk '{print $6}' | sed s/"$appName".*//g`
#echo "$getAppID"
path1=`ps -A |grep $appName | grep -v -e "grep\|Athrun"|awk '{print $4}'`
path2=`ps -A |grep $appName | grep -v -e "grep\|Athrun"|awk '{print $5}'`
appPath=${path1}" "${path2}" "${getAppID}
#get simulator progress
simProgress=`ps -A |grep "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications/iPhone Simulator.app/Contents/MacOS/iPhone Simulator"| grep -v grep | awk '{print $1}'`
echo "$simProgress"
if [[ $cmd == "AppProgress" || $cmd == "ps" ]]; then
    #kill AppPs
    kill -9 $AppProgress
    sleep 2
elif [[ $cmd == "AppData" || $cmd == "data" ]]; then
    #kill AppPs
    kill -9 $AppProgress
    sleep 2
    #kill simulator progress
    kill -9 $simProgress
    sleep 2
    #remove AppData
    rm -rf "$appPath"
    sleep 2
else
    echo "bad command"
    exit
fi
exit

#sed -e '1,10d' -e 's/yellow/black/g'

#"/Users/seal/Documents/iOS 开发篇/iOS test/tableView/cells/build/Debug-iphoneos/cells.app"

#"/Users/seal/Library/Application Support/iPhone Simulator/6.1/Applications/aaa"


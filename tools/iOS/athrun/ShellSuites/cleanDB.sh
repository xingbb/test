#!/bin/sh
#iOS模拟器上删除app DB信息的脚本
#执行命令： sh cleanDB.sh 应用程序名字 app内的db文件路径（非完整路径）
#注意中文的app需要把bash的编码格式调整成可显示中文进程
#Created by xingbb
if [[ $# < 2 ]] ; then
    echo "usage sh cleanDB.sh appName db路径（app下的db文件路径即可）"
    exit
fi
appName=$1".app"
path=$2
#get AppPath
getAppID=`ps -A |grep $appName | grep -v -e "grep\|Athrun"|awk '{print $6}' | sed s/"$appName".*//g`
#echo "$getAppID"
path1=`ps -A |grep $appName | grep -v -e "grep\|Athrun"|awk '{print $4}'`
path2=`ps -A |grep $appName | grep -v -e "grep\|Athrun"|awk '{print $5}'`
appPath=${path1}" "${path2}" "${getAppID}${path}
rm -rf "$appPath"
exit
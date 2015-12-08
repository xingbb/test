#!/bin/bash
#echo "Test"; 
#实现通过主机名，端口读取header信息 
#if(($#<2));then 
#echo "usage:$0 host port"; 
#exit 1; 
#fi 
#如果参数缺失，退出程序，返回状态1 
exec 6<>/dev/tcp/10.13.40.23/5566
#exec 6<>/dev/tcp/$1/$2 2>/dev/null; 
#打开host的port 可读写的socket连接，与文件描述符6连接 
if(($?!=0));then 
echo "open host error!"; 
exit 1; 
fi 
#如果打开失败，$?返回不为0，终止程序 
echo $1>&6; 
#将信息发送给socket连接 
cat<&6; 
#从socket读取返回信息，显示为标准输出 
exec 6<&-; 
exec 6>&-; 
#关闭socket的输入，输出 
exit 0; 

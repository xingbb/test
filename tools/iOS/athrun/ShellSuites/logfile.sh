#!/bin/sh
if [[ $# < 2 ]] ; then 
    echo "usage sh logfile.sh read/write/r/w file [content]"
    exit 1
fi

cmd=$1		#read or write,default is write
cmd=${cmd:=write}
file=$2		#file to be read or write
content=""	#the content to write to file
if [[ $# > 2 ]]; then
    content=$3
fi 


#if [ -f $file ]; then
#    echo "warning: file exist"
#fi

if [[ $cmd == "read" || $cmd == "r" ]]; then
    #echo "begin to read file"
    result=`tail -n 1 $file`
    echo $result
elif [[ $cmd == "write" || $cmd == "w" ]]; then
    #echo "begin to write file"
    if [[ "" != "$content" ]];then
        echo "$content" >> $file
    fi
else
    echo "bad command."
    exit 1
fi
exit 0


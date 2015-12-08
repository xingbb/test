#!/bin/bash

echo "The app path is : $1"
echo "The script path is : $2"
touch sort.temp
function init_dir(){   

    for file in ` ls $1 ` ;do
        if (test -d $1"/"$file );then
            init_dir $1"/"$file
        else        
            echo $1"/"$file >> sort.temp
        fi
    done
}
`rm -rf /AutoTestLog/*`
isLogPathExist=`ls / | grep AutoTestLog |wc -l | awk '{s+=$1} END {print s}'`
if [[ $isLogPathExist == 0 ]];then
    `mkdir /AutoTestLog`
fi

if test -f $2;then
    echo "The script $2 is  running!!"
    oneCmd="instruments -t /Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate $1 -e UIASCRIPT $2 -e UIARESULTSPATH /AutoTestLog/"
    $oneCmd
    echo "$2 run end!"

else
    #call  the init_dir function.
    init_dir $2

    for file in `sort -g sort.temp`;do
        
        echo "The script $file is  running!"
        cmd="instruments -t /Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate $1 -e UIASCRIPT $file -e UIARESULTSPATH /AutoTestLog/"

        $cmd
        echo "$file run end!"
    done
fi

rm sort.temp
delCmd="rm -rf ./*.trace"
$delCmd

echo "all script run end!"

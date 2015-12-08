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
index=1
while [[ $index < 8 ]]
do
echo "run autocase $index"
index=`expr $index + 1`

if test -f $2;then
echo "The script $2 is  running!!"
oneCmd="instruments -t /Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate $1 -e UIASCRIPT $2 -e UIARESULTSPATH /Athrun/log/"
$oneCmd
echo "$2 run end!"

else
#call  the init_dir function.
init_dir $2

for file in `sort -g sort.temp`;do

echo "The script $file is  running!"
cmd="instruments -t /Applications/Xcode.app/Contents/Applications/Instruments.app/Contents/PlugIns/AutomationInstrument.bundle/Contents/Resources/Automation.tracetemplate $1 -e UIASCRIPT $file -e UIARESULTSPATH /Athrun/log/"

$cmd
echo "$file run end!"
done
fi
#kill AppPs
AppId=`ps -A |grep ynote| grep -v -e "grep\|Athrun" | awk '{print $1}'`
echo "$AppId"
kill -9 $AppId
sleep 2
#kill simulator
simId=`ps -A |grep "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications/iPhone Simulator.app/Contents/MacOS/iPhone Simulator"| grep -v grep | awk '{print $1}'`
kill -9 $simId
sleep 2
echo "kill simulator!"
#rm App
rm -rf /Users/mac/Library/Application\ Support/iPhone\ Simulator/6.0/Applications/*
echo "rm APP!"
sleep 5
done

rm sort.temp
delCmd="rm -rf /Athrun/*.trace"
$delCmd

echo "all script run end!"
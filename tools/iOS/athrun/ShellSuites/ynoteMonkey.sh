#!/bin/sh

cd $1
sed -e 's:有道云笔记:ynote_monkey:' -i "" YNote.xcodeproj/project.pbxproj
xcodebuild clean
rm -rf build
xcodebuild -target 有道笔记 -configuration Debug -sdk iphonesimulator6.1 ARCH=i386
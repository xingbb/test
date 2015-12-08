#!/usr/bin/python2.4 -u
#encoding=utf-8

#import getopt
import os
import re
import sys
import commands

class UpdateEnum:
	Equal  = 0
	Match  = 1
	Substr = 2
	InsertBefore = 3
	InsertAfter	 = 4
	Comment = 5
	SubstrAfterLine = 6
	CommentAfterLine = 7

def exit(): 
	print "FAILED! Please go to log for detail"
	sys.exit()      

'''
   检查匹配string的line在文件中是否唯一
'''	
def if_the_line_is_unique(file, string, match_rule):
	f=open(file,"r+")
	num=0
	if match_rule in (UpdateEnum.Equal, UpdateEnum.InsertBefore, UpdateEnum.InsertAfter, UpdateEnum.Comment):
		for line in f.readlines():
			if line.strip() == string:
				num += 1
	elif match_rule == UpdateEnum.Substr:
		for line in f.readlines():
			if line.find(string) >= 0:	
				num += 1
	elif match_rule == UpdateEnum.Match:
		for line in f.readlines():
			if re.match(string, line.strip()) or string == line.strip():
				num += 1
	else:
		exit()
	if num==1:
		return True
	elif num==0:
		return False
	else:
		return False

'''
   在文件中找到匹配string的行，返回其所在行号
'''
def get_line_no(file, string, match_rule):
	if if_the_line_is_unique(file, string, match_rule)==False:
		exit()	
	f=open(file,"r+")
	lineno = 1
	if match_rule in (UpdateEnum.Equal, UpdateEnum.InsertBefore, UpdateEnum.InsertAfter, UpdateEnum.Comment):
		for line in f.readlines():
			if line.strip() == string:
				return lineno
			else:
				lineno += 1
	elif match_rule == UpdateEnum.Substr:
		for line in f.readlines():
			if line.find(string) >= 0:
				return lineno
			else:
				lineno += 1
	elif match_rule == UpdateEnum.Match:
		for line in f.readlines():
			if re.match(string, line.strip()) or string == line.strip():
				return lineno
			else:
				lineno += 1
	f.close()
	return False	

'''
    在文件中找到匹配string的所有行
'''
def get_line_nos(file, string, match_rule):
    f = open(file, "r+")
    lineno_list = []
    lineno = 1
    if match_rule in (UpdateEnum.Equal, UpdateEnum.InsertBefore, UpdateEnum.InsertAfter, UpdateEnum.Comment):
        for line in f.readlines():
            if line.strip() == string:
                lineno_list.append(lineno)
            lineno += 1
    elif match_rule == UpdateEnum.Substr:
        for line in f.readlines():
            if line.find(string) >= 0:
                lineno_list.append(lineno)
            lineno += 1
    elif match_rule == UpdateEnum.Match:
        for line in f.readlines():
            if re.match(string, line.strip()) or string == line.strip():
                lineno_list.append(lineno)
            lineno += 1
    f.close()
    return lineno_list



'''
	将文件中的指定行替换为指定字符串newline	
'''
def update_line_for_lineno(file, line_num, new_line):
	lines = open(file,"r").readlines()
	line_num = int(line_num)
	if line_num > len(lines) or line_num < 1:
		exit()	
	lines[line_num - 1] = new_line + "\n"
	open(file, "w").writelines(lines)

'''
	对文件中指定行进行替换
	match_string 需要匹配的行
	new_line 替换成的字符串
	update_rule 替换规则 值为UpdateEnum类型
'''
def update_file(file, match_string, new_line, update_rule):
	if not os.path.isfile(file):
		exit()
	lineno = get_line_no(file, match_string, update_rule)
	lines = open(file,"r").readlines()
	tmpline = lines[lineno-1]
	if update_rule in (UpdateEnum.Equal, UpdateEnum.Match):
		tmpline = new_line
	elif update_rule == UpdateEnum.Substr:
		tmpline = lines[lineno-1].replace(match_string, new_line)
	elif update_rule == UpdateEnum.InsertBefore:
		tmpline = new_line+"\n"+lines[lineno-1].replace("\n", "")
	elif update_rule == UpdateEnum.InsertAfter:
		tmpline = lines[lineno-1]+new_line
	elif update_rule == UpdateEnum.Comment:
		if file.endswith(".java"):
			tmpline = "//" + lines[lineno-1].replace("\n", "")
		elif ".xml" in os.path.split(file)[1]:
			tmpline = "<!--	" + lines[lineno-1].replace("\n", "") + "	-->"
		elif os.path.split(file)[1].startswith("servers.properties") or file.endswith(".py"):
			tmpline = "#" + lines[lineno-1].replace("\n", "")
	update_line_for_lineno(file, lineno, tmpline)

	return True

'''
	replace the line equal old_line with new_line
'''
def update_line_for_equal(file, old_line, new_line):
	update_file(file, old_line, new_line, UpdateEnum.Equal)

'''
	insert new_line after line which machth the string match_string
'''
def insert_after_line(file, match_string, new_line):	
	update_file(file, match_string, new_line, UpdateEnum.InsertAfter)

'''
	insert new_line before line which machth the string match_string
'''
def insert_before_line(file, match_string, new_line):		
	update_file(file, match_string, new_line, UpdateEnum.InsertBefore)	
	
'''
	comment out the line match_string
'''
def add_comment_for_line(file, line):			
	update_file(file, line, ""	, UpdateEnum.Comment)

'''
	replace match_string with new_line
'''
def update_line_for_contain_substr(file, match_string, new_line):
	update_file(file, match_string, new_line, UpdateEnum.Substr)

'''
	replace the line which like match_string with new_line
'''
def update_line_for_match(file, match_string, new_line):
	update_file(file, match_string, new_line, UpdateEnum.Match)

'''
    指定行偏移量替换
'''
def update_line_for_match_offset(file, match_string, new_line, offset):
    lineno = get_line_no(file, match_string, UpdateEnum.Match)
    lineno = lineno+int(offset)
    update_line_for_lineno(file, lineno, new_line)

'''
    指定所有匹配行中替换第n个匹配行
'''
def update_line_for_matchs_num(file, match_string, new_line, num):
    linenos = get_line_nos(file, match_string, UpdateEnum.Match)
    if num=="all" or num=="ALL":
        for lineno in linenos:
            update_line_for_lineno(file, lineno, new_line)
    else:
        num = int(num)
        update_line_for_lineno(file, linenos[num-1], new_line)
   
def update_line_for_match_allLine(file, match_string, new_line):
    update_line_for_matchs_num(file, match_string, new_line, "all")

def update_line_for_match_allString(file, old_string, new_string):
    if not os.path.isfile(file):
        exit()
    lines = open(file,"r").readlines()
    for i in range(len(lines)):
        lines[i] = lines[i].replace(old_string, new_string)
    open(file, "w").writelines(lines)
 
if ( __name__ == "__main__"):
    type = sys.argv[1]
    file = sys.argv[2]
    matchline = sys.argv[3]
    newline = sys.argv[4]
    if(type == "match"):
        update_line_for_match_allLine(file, matchline, newline)
    elif(type == "offset"):
        offset = sys.argv[5]
        update_line_for_match_offset(file,matchline,newline,offset)
    else:
        print "invalid input"    

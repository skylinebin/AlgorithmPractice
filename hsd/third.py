# coding: utf8

'''
Created on 2016��9��7��

@author: hust
'''

def main():
    yourstr = raw_input()
    mylist = []
    mylist = list(yourstr)
    length = len(yourstr)
    laststr = []
    nums =0
    statem =0
    for qre in mylist:
        if qre =='*':
            nums+=1
            if statem==0:
                laststr.append(qre)
            else:
                continue   
            
        else:
            laststr.append(qre)
            
        statem+=1

            
    if mylist[length-1]=='*':
        laststr.append('*')
    ms =''
    for agf in laststr:
        ms=ms+agf
    print ms


if __name__=='__main__':
    main()

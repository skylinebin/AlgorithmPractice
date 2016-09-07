
# coding: utf8

'''
大家知道，Microsoft的Excel的列编号是字符编号：
a, b, c, ... z, aa, ab, ac ... az, ba...zz, aaa, aab, aac..等，
而其对应的数字编号是1, 2, 3...26, 27, 28, 29 ....
请实现转换算法，输入字符编号，输出数字编号。


Created on 2016年9月7日

@author: hust
'''


#     
#                 
# 
def ProcessStr(mystr):
    
    def StrtoNum(ones):
        if ones < 'a' or ones >'z':
            return ''
        else:
            return int(ord(ones)-96)
 
    mystr =mystr.lower()
    lengthS = len(mystr)
    tempr = 0
    lastcome=0
    hostm =[]
    hostm = list(mystr)
    while(tempr<lengthS):
        ads = StrtoNum(str(hostm[tempr]))   
        lastcome+=(ads+tempr*25)
        tempr+=1          
    return lastcome
                      

def main():
    mystr = raw_input()
    print ProcessStr(mystr)


if __name__=="__main__":
    main()

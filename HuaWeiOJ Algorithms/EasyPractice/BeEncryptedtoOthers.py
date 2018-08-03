'''
有一种技巧可以对数据进行加密，它使用一个单词作为它的密匙。
下面是它的工作原理：
首先，选择一个单词作为密匙，如TRAILBLAZERS。
如果单词中包含有重复的字母，只保留第1个，其余几个丢弃。
现在，修改过的那个单词死于字母表的下面，如下所示：
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
T R A I L B Z E S C D F G H J K M N O P Q U V W X Y
上面其他用字母表中剩余的字母填充完整。
在对信息进行加密时，信息中的每个字母被固定于顶上那行，
并用下面那行的对应字母一一取代原文的字母(字母字符的大小写状态应该保留)。
因此，使用这个密匙，Attack AT DAWN(黎明时攻击)就会被加密为Tpptad TP ITVH。
请实现下述接口，通过指定的密匙和明文得到密文。
详细描述：
接口说明
原型：
voidencrypt(char * key,char * data,char * encrypt);
输入参数：
    char * key：密匙
    char * data：明文
输出参数：
    char * encrypt：密文
返回值：
        void
'''

#源码如下：
# -*- coding: utf-8 -*-

keep = {'A','B','C','D','E','F','G',
        'H','I','J','K','L','M','N',
        'O','P','Q','R','S','T','U',
        'V','W','X','Y','Z'}


def bekeyed(key,getdata):
    key2 = key.upper()
    key3 = key2
    print key3
    getdata2 =getdata.upper()

    letters ={}
    i =0
    for l in key3:
        kl = letters.values()
        if l in kl:
            continue
        else:
            letters[chr(ord('A')+i)] = l
        i+=1
    print letters
    others = []
    losletter=[]
    for qwe in keep:
        losletter.append(qwe)
    #去除已有的字典的值里面含有的字
    for ls in losletter:
        if ls in (letters[w] for w in letters):
            continue
        else:
            others.append(ls)
    print others
    sequenced =sorted(others)
    print sequenced
    j=0
    for ls in sorted(keep):
        kl = sorted(letters.keys())
        if ls in kl:
            continue
        else:
            letters[ls] =sequenced[j]
            j+=1
    print letters
    begot=[]
    bestring=""
    for data in getdata2:
        begot.append(letters[data])
        bestring+=letters[data]
    print begot
    print bestring
    return bestring

def main():
    key = raw_input()
    getdata = raw_input()
    # key2 = key.upper()
    # key3 = key2.split()
    # print key3
    encrypt = bekeyed(key,getdata)
    print encrypt

if __name__=='__main__':
    main()

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
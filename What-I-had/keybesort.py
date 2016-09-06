# -*- coding: utf-8 -*-

keep = {'A','B','C','D','E','F','G',
        'H','I','J','K','L','M','N',
        'O','P','Q','R','S','T','U',
        'V','W','X','Y','Z'}

def bekeyed(key,getdata):
    key3 = key.upper()
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
    others = []
    losletter=[]
    for qwe in keep:
        losletter.append(qwe)
    for ls in losletter:
        if ls in (letters[w] for w in letters):
            continue
        else:
            others.append(ls)
    sequenced =sorted(others)
    j=0
    for ls in sorted(keep):
        kl = sorted(letters.keys())
        if ls in kl:
            continue
        else:
            letters[ls] =sequenced[j]
            j+=1
    begot=[]
    bestring=""
    for data in getdata2:
        begot.append(letters[data])
        bestring+=letters[data]
    return bestring.lower()

def main():
    key = raw_input()
    getdata = raw_input()
    encrypt = bekeyed(key,getdata)
    print encrypt

if __name__=='__main__':
    main()
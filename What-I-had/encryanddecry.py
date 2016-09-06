def encry(strone):
    beencry = []
    for w in strone:
        if w>='a'and w <='z':
            if w =='z':
                w ='A'
            else:
                w = chr(ord(w.upper())+1)
        elif w>='A'and w <='Z':
            if w =='Z':
                w ='a'
            else:
                w = chr(ord(w.lower())+1)
        elif w>='0'and w <='9':
            if w == '9':
                w ='0'
            else:
                w = str(int(w)+1)
        beencry.append(w)
    return beencry

def deencry(strtwo):
    bedecry = []
    for qs in strtwo:
        if qs>='a'and qs<='z':
            if qs =='a':
                qs ='Z'
            else:
                qs =chr(ord(qs.upper())-1)
        elif qs>='A' and qs<='Z':
            if qs =='A':
                qs ='z'
            else:
                qs =chr(ord(qs.lower())-1)
        elif qs>='0'and qs<='9':
            if qs =='0':
                qs ='9'
            else:
                qs = str(int(qs)-1)
        bedecry.append(qs)
    return bedecry

def main():
    strone = raw_input()
    strtwo = raw_input()
    sone =''
    stwo =''
    for wqs in encry(strone):
        sone = sone+wqs
    #sone=sone+'\0'
    for wps in deencry(strtwo):
        stwo = stwo+wps
    #stwo = stwo+'\0'
    print sone
    print stwo

if __name__ == '__main__':
    main()
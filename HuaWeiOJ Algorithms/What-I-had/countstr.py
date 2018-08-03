def countstrnum(gets):
    list =[0,0,0,0]
    for w in gets:
        if (w>='a' and w<='z')|(w>='A'and w<='Z'):
            list[0]+=1
        elif w ==' ':
            list[1]+=1
        elif w>='0' and w<='9':
            list[2]+=1
        else:
            list[3]+=1

    return list




def main():
    getstr = raw_input()
    listr = countstrnum(getstr)
    for qs in listr:
        print qs

if __name__ =='__main__':
    main()
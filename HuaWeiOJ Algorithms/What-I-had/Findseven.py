def processnum(benum):
    countnum = 0
    qms = 0
    if benum < 7:
        return countnum
    else:
        while qms <= benum:
            if (qms%7 == 0):
                countnum+=1
            elif(qms%10 == 7):
                countnum+=1
            elif ((qms/10)%10==7):
                countnum+=1
            elif ((qms/100)%10==7):
                countnum+=1
            elif ((qms/1000)%10==7):
                countnum+=1
            qms+=1
        return countnum-1

def main():
    getnum = int(raw_input())
    print processnum(getnum)

if __name__ == '__main__':
    main()
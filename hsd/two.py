def main():
    captery = raw_input()
    liststr = captery.split(' ')
    allnum = str(liststr[1])
    allnum = int(allnum)
    print allnum
    
    statem = 0
    carnum = 0
    while(statem==0):
        strms=raw_input()
        if strms =="end":
            break
        elif strms =="in":
            if(carnum<allnum-1):
                print 'allow'
                carnum+=1
            else:
                carnum+=1
                print 'reject'
        elif strms =="out":
            if carnum > 0:
                carnum=carnum-1
            else:
                carnum=0
                

if __name__=="__main__":
    main()

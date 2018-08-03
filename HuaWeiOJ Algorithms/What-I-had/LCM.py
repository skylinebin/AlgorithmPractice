def getlcm(numone,numtwo):
    befirst =0
    if numone > numtwo:
        befirst =numone
    else:
        befirst = numtwo
    while(True):
        if (befirst % numone)==0 and (befirst % numtwo)==0:
            itis = befirst
            break
        else:
            befirst+=1
    return  itis

def main():
    numone = int(raw_input())
    numtwo = int(raw_input())
    print getlcm(numone,numtwo)

if __name__ == '__main__':
    main()
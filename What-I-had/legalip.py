
def main():
    getip=raw_input()
    iplist=getip.split('.')
    ipint =[0,0,0,0]
    i=0
    m=0
    while i< 4:
        ipint[i] = int(iplist[i])
        i+=1
    for qs in ipint:
        if qs>=0 and qs<=255:
            m+=1
    if m == 4:
        print 'YES'
    else:
        print 'NO'

if __name__ =='__main__':
    main()
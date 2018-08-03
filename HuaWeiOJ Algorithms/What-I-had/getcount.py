

def main():
    strpst = raw_input()
    qspt = strpst.split(' ')
    strone = qspt[0]
    if qspt[-1] != qspt[0]:
        strtwo = qspt[1]
    else:
        strtwo = ''
    strone=strone.lower()
    strtwo=strtwo.lower()
    mone = len(strone)
    mtwo = 0
    echo = []
    while(mtwo < mone):
        aqw = mone - mtwo
        while(aqw>=0):
            echo.append(strone[mtwo:aqw+mtwo])
            aqw-=1
        mtwo+=1

    pmb = 0
    for w in echo:
        pma =0
        if w in strtwo:
            pma = len(w)
            pmc = echo.index(w)
        if pma > pmb :
            pmb = pma
            pmd = pmc
    if pmb>0:
        print len(echo[pmd])
    else:
        print 0

if __name__ == '__main__':
    main()

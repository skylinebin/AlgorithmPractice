
def make_wo_dict(s):
    words = list(s)
    d = {}
    for w in words :
        if w in d :
            d[w]+= 1
        else :
            d[w] = 1
    return d

def becomenum(m,qsmt):
   # m = int(qsmt[0])+1
    i=0
    qse ={}
    qmses = []
    countw = 0
    while i < m :
        qse[i]=qsmt[i]
        dgt2 = make_wo_dict(qse[i])
        dgt3 = getevercount(dgt2)
        for w in qse[i]:
            countw = countw + dgt3[w]
        qmses.append(countw)
        i+=1
        countw = 0
    return  qmses

def getevercount(done):
    lst = [(done[w],w) for w in done]
    lst.sort()
    lst.reverse()
    whut = len(done.keys())
    dtwo ={}
    i = 1
    p = 26
    for count,word in lst[:whut]:
        dtwo[word]=p
        i+=1
        p-=1
    return dtwo


def getnum(s):
    s = s.lower()
    qsm = s.split( )
    i = 1
    qsr = ""
    m = int(qsm[0])+1
    while i < m :
        qsr = qsr + qsm[i]
        i+=1
    return make_wo_dict(qsr)


def main():
    str = raw_input()
    counstr = int(str)
    istr = 0
    onely = []
    while istr < counstr :
        onely.append(raw_input())
        istr += 1
    qsms = onely
    listf = becomenum(counstr,onely)
    for w in listf:
        print w


if __name__ == '__main__':
    main()

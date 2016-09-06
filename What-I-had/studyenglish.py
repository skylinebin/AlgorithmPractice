ntoedicone ={0:'zero',1:'one',2:'two',3:'three',4:'four',
              5:'five',6:'six',7:'seven',8:'eight',
              9:'nine',10:'ten',11:'eleven',12:'twelve',
              13:'thirteen',14:'fourteen',15:'fifteen',
              16:'sixteen',17:'seventeen',18:'eighteen',
              19:'nineteen'}

ntoedictwo = {2:'twenty',3:'thirty',4:'forty',5:'fifty',
                 6:'sixty',7:'seventy',8:'eighty',9:'ninety'}

ntoeunit = {0:'',1:' hundred',2:' thousand',3:' million',4:' billion',5:'and'}

def processnum(intnum):
    if intnum <20:
        if intnum >0:
            return  ntoedicone[intnum]
        else:
            return ''
    elif intnum<100 :
            return  ntoedictwo[intnum / 10] +' '+ processnum(intnum % 10)
    elif intnum<1000:
        return ntoedicone[intnum/100]+ntoeunit[1]+' '+addandtranslate(intnum%100)
    elif intnum<1000000:
        return processnum(intnum/1000)+ntoeunit[2]+' '+addandtranslate(intnum%1000)
    elif intnum<1000000000:
        return processnum(intnum/1000000)+ntoeunit[3]+' '+addandtranslate(intnum%1000000)
    elif intnum<10000000000:
        return processnum(intnum/1000000000)+ntoeunit[4]+' '+addandtranslate(intnum%1000000000)
    else:
        return u'\u201c'+'error'+u'\u201d'



def addandtranslate(othernum):
    if othernum <20:
        if othernum>9:
            return 'and '+ntoedicone[othernum]
        elif othernum>0:
            return 'and '+ ntoedicone[othernum]
        else:
            return ''
    elif othernum <100:
        return 'and '+ntoedictwo[othernum / 10] +' '+ ntoedicone[othernum % 10]
    elif othernum <1000:
        return ntoedicone[othernum/100]+ntoeunit[1] + ' '+addandtranslate(othernum%100)
    elif othernum <1000000:
        return processnum(othernum/1000)+ntoeunit[2] +' '+ processnum(othernum % 1000)


def translatenum(getnum):
    for qs in getnum:
        if qs < '0' or qs > '9':
            return u'\u201c'+'error'+u'\u201d'
    intnum = int(getnum)
    return processnum(intnum)


def main():
    getnum = raw_input()
    print translatenum(getnum)


if __name__ == '__main__':
    main()
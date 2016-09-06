import sys

def putoutsa(intnum):
    sort =0
    row = 0
    while sort <intnum:
        while row <intnum:
            sall = sort + row
            if sall == intnum-1:
                if sall < intnum:
                    asd = sall*(sall+1)/2 +1+(sall-sort)
                    print asd

            else:
                if sall <intnum:
                   # if (sall%2) == 0:
                    asd = sall*(sall+1)/2 +1+(sall-sort)
                    print asd,
            row+=1
        row=0
        sort+=1

def main():
    getnum = int(raw_input())
    putoutsa(getnum)

if __name__ =='__main__':
    main()
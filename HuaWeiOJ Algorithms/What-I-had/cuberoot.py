import math
def main():
    getstr = raw_input()
    getnum = float(getstr)
    qs =('%.1f' % math.pow(getnum,1.0/3))
    print qs

if __name__ =='__main__':
    main()
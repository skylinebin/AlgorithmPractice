
def main():
    all = int(raw_input())
    i=0
    qm=0
    while i<all:
        qm+= int(raw_input())
        i+=1
    qm = float(qm)
    qms = ('%.3f' % (qm/all))
    print qms

if __name__ =='__main__':
    main()
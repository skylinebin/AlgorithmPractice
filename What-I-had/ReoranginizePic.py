def main():
    inputstr = raw_input()
    tobelist = []
    bms = ''
    for qsp in inputstr:
        tobelist.append(qsp)
    tobelist.sort()
    for qma in tobelist:
        bms = bms + qma
    print bms

if __name__ == '__main__':
    main()
def chgngebin(subnet):
    subto = []
    qwe = subnet.split('.')
    for qas in qwe:
        subto.append(bin(int(qas)))
    print subto
    return 1


def main():
    subnet = raw_input()
    # ipadone = raw_input()
    # ipadtwo = raw_input()
    print judge(subnet,ipadone,ipadtwo)



if __name__ == '__main__':
    main()
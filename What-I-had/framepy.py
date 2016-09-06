def countnum(s):
    q = s.split(' ')[-1]
    return len(q)

def main():
    s = raw_input()
    print countnum(s)

if __name__ == '__main__':
   main()
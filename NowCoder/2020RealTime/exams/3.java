public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();

    int cnt;
    double sum = 0;
    for (int i = 0; i < n; i++) {
        cnt = 4;
        int tem = sc.nextInt();
        sum = 2;
        while (tem > 0) {
            if (sum >= tem) { break; }
            cnt++;
            if (cnt % 4 == 1) {
                sum = sum + 0.5 + cnt / 4 - 1;
            } else if (cnt % 4 == 2 || cnt % 4 == 3) {
                sum = sum + 1.5 + cnt / 4 - 1;
            } else {
                sum = sum + 2.5 + cnt / 4 - 2;
            }

        }
        System.out.println(cnt);


    }

}
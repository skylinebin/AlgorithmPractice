import java.util.Scanner;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        while (in.hasNextInt()) {
            int numT = in.nextInt();
            int count = 0;
            int numN=6;
            while(count<numT){
                int[] arr = new int[numN];
                for(int i=0;i<numN;i++){
                    arr[i]=in.nextInt();
                }
                System.out.println(leftWater(arr));
                count++;
            }
        }
    }
    public static int leftWater(int[] arr){
        int m = arr[0];
        int t = arr[1];
        int m1 = arr[2];
        int t1 = arr[3];
        int m2 = arr[4];
        int t2 = arr[5];
        int cur = 0;
        boolean sta1=false;
        boolean sta2=false;
        if(t<t1&&t<t2){
            return m;
        }else{
            for(int i=0;i<t;i++){
                if(i%t1==0){
                    sta1=!sta1;
                }
                if(i%t2==0){
                    sta2=!sta2;
                }
                if(sta1&&sta2){
                    cur+=m1-m2;
                }else if(sta1&&!sta2){
                    cur+=m1;
                }else if(!sta1&&sta2){
                    cur-=m2;
                }
                if(cur<0){
                    cur=0;
                }else if(cur>m){
                    cur=m;
                }
            }
        }
        return cur;
    }
    
}
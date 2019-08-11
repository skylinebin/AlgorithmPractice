import java.util.Scanner;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        while (in.hasNextLong()) {
            long numN = in.nextLong();
            long count = 0;
            long[] arr = new long[numN];
            while(count<numN){
                arr[count]=in.nextLong();
                count++;
            }
            count=0;
            long numQ = in.nextLong();
            long[] arrQ = new long[numQ];
            while(count<numQ){
                arrQ[count]=in.nextLong();
                count++;
            }
            long[] result = findQueue(arr, arrQ);
            for(int i=0;i<result.length;i++){
                System.out.println(result[i]);
            }
            
        }
    }
    public static long[] findQueue(long[] arr1,long[] arr2){
        int k =0;
        int lenQ = arr2.length;
        long[] output = new long[lenQ];
        for(int j=0;j<arr2.length;j++){
            long temp = findPart(arr2[j],arr1);
            output[j] = temp;
        }
        return output;
    }
    
    public static long findPart(long num,long[] arr){
        long sum =0;
        int len = arr.length;
        int index=0;
        while(index<len){
            if(index!=0 && arr[index-1]<num && arr[index]>num){
                sum++;
            }else if(index==0&&arr[index]>num){
                sum=1;
            }
            index++;
        }
        return sum;
    }
}
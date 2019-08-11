import java.util.Scanner;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        while (in.hasNextInt()) {
            int numT = in.nextInt();
            int count = 0;
            int numN;
            
            while(count<numT){
                numN = in.nextInt();
                int[] arr = new int[numN];
                for(int i=0;i<numN;i++){
                    arr[i]=in.nextInt();
                }
                System.out.println(findClass(arr));
                count++;
            }
        }
    }
    public static int findClass(int[] arr){
        ArrayList<Integer> store = new ArrayList<Integer>();
        int k =0;
        for(int j=0;j<arr.length;j++){
            int temp = countNumOne(arr[j]);
            if(store.contains(temp)){
                continue;
            }else{
                store.add(k++,temp);
            }
        }
        return k;
    }
    
    public static int countNumOne(int num){
        int sum =0;
        while(num!=0){
            sum+=1;
            num = num & (num-1);
        }
        return sum;
    }
}
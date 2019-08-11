import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        while (in.hasNextInt()) {
            int numT = in.nextInt();
            int count = 0;
            while(count<numT){
                String str = in.nextLine();
                if(str.length()!=0){
                    System.out.println(findLongestN(str));
                    count++;
                }
            }
        }
    }
    public static int findLongestN(String str){
        int len = str.length();
        int maxN = 0;
        String[] arr = str.split("");
        List<Integer> indexList = new ArrayList<Integer>();
        for(int j=0;j<len;j++){
            String temp;
            temp= arr[j];
            if(!temp.equals("N")){
                indexList.add(j);
            }
        }
        int listLen = indexList.size();
        if(listLen<=2){
            return str.length();
        }
        for(int i=0;i<listLen;i++){
            for(int k=i+1;k<listLen;k++){
                String[] copyArr = (String[])arr.clone();
                copyArr[indexList.get(i)]="N";
                copyArr[indexList.get(k)]="N";
                int tempMax = findMaxNumN(copyArr);
                if(tempMax > maxN){
                    maxN=tempMax;
                }
            }
        }
        return maxN;
    }
    public static int findMaxNumN(String[] strL){
        int max=0;
        int count=0;
        int lenL = strL.length;
        for(int j=0;j<lenL;j++){
            String ts = strL[j];
            if(!ts.equals("N")){
                if(count > max){
                    max=count;
                }
                count=0;
            }else{
                count++;
            }
        }
        if(count>max){
            max=count;
        }
        return max;
    }
}
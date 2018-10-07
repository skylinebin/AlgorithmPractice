package basic_algorithm;

public class Inversion {

//	使用Java 解决逆序对问题
	public static String printInversion(int[] arr) {
		if (arr == null || arr.length < 2) {
			return "";
		}
		return mergeSort(arr, 0, arr.length - 1);		
	}
	
//	返回的 ln 到 rn 之间的所有逆序对
	public static String mergeSort(int[] arr, int ln, int rn) {
		if (ln == rn) {
			return "";
		}
		int midn = ln + ((rn - ln) >> 1);
//		整体的小和 = 左侧部分产生的小和 + 右侧部分产生的小和 + merge过程中产生的小和
		return mergeSort(arr, ln, midn)
				+ mergeSort(arr, midn + 1, rn)
				+ mergeInversion(arr, ln, midn, rn);
	}
	
	public static String mergeInversion(int[] arr, int ln, int midn, int rn) {
		int[] help = new int[rn - ln +1];
		int i =0;
		int pone =ln;
		int ptwo = midn +1;
		String res = "";
		while (pone <= midn && ptwo <= rn) {
			res += arr[pone] > arr[ptwo] ? Integer.toString(arr[pone]) + "_" + Integer.toString(arr[ptwo])+"#" : "";
			help[i++] = arr[pone] > arr[ptwo] ? arr[pone++] : arr[ptwo++];	
		}

		while (pone <= midn) {
//			若 pone 没有越界，潜台词是 ptwo 必定越界了
			help[i++] = arr[pone++];			
		}
		
		while (ptwo <= rn) {
			help[i++] = arr[ptwo++];			
		}
		
//		将 help数组里的 copy 回 arr
		for (int j = 0; j < help.length; j++) {
			arr[ln +j] = help[j];
		}
		
		return res;		
	}
	
//	for test
//  使用对数器进行测试
	public static int[] generateRandomArray(int size, int value) {
//		使用系统自带的随机数生成器生成备选数集合
//		Math.random() -> double [0,1)
//		(int) ((size + 1) * Math.random()) -> [0,size] 整数集合
//		size =6, size + 1 =7;
//		Math.random() -> [0,1) * 7 -> [0,7) double
//		double -> int [0,6] -> int
		
		
//		生成长度随机的数组
		int[] arr = new int[(int) ((size + 1) * Math.random())];
//		数组内的每个数也是随机的
		for (int i = 0; i < arr.length; i++) {
			arr[i] = (int) ((value + 1) * Math.random()) - (int) (value * Math.random());
		}
		return arr;
		
	}
	
//	for test
//	打印数组的方法
	public static void printArray(int[] arr) {
		if(arr == null || arr.length ==0) {
			System.out.println("");
		}else {
			for (int i = 0; i < arr.length; i++) {
				System.out.print(arr[i] + " ");
			}
			System.out.println();
		}
	}
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int size = 10;
		int value = 100;		
		int[] arrone = generateRandomArray(size, value);
		printArray(arrone);
		System.out.println(printInversion(arrone));
		
	}

}

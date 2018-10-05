package basic_algorithm;

import java.util.Arrays;

public class MergeSort {

//	使用 java 实现归并排序
	public static void mergeSort(int[] arr) {
		if (arr == null || arr.length < 2) {
			return;
		}
//		递归过程，是排序的实质
		sortProgress(arr, 0, arr.length - 1);
		
	}
	
	public static void sortProgress(int[] arr, int Ln, int Rn) {
//		实现 在 Ln 和 Rn 之间排好序 (0, N-1)
		
//		若范围上只有一个数，已经排好了
		if (Ln == Rn) {
			return;
		}
		int midn = Ln + ((Rn - Ln) >> 1); // Ln 和 Rn 中点的位置
//		same as (Ln + Rn) / 2
//		在 Ln 和 middle 中间排好序
		sortProgress(arr, Ln, midn); // T(N/2)
//		在 middle + 1 和 Rn 间排好序
		sortProgress(arr, midn + 1, Rn); // T(N/2)
//		进行 merge 操作
		merge(arr, Ln, midn, Rn); // O(N)
//		T(N) = 2*T(N/2) + O(N)
		
	}
	
//	实现 已排好序的Ln ~ midn 与 已排好序的 midn+1 ~ Rn 整体的排序 
	public static void merge(int[] arr, int Ln, int midn, int Rn) {
//		辅助数组，有多少就生成多大的
		int[] help = new int[Rn - Ln +1];
		int i = 0;
		
		int pone = Ln;
		int ptwo = midn +1;
//		保证两侧都没有 比完
		while (pone <= midn && ptwo <= Rn) {
//			实现 谁小填谁 的功能
			help[i++] = arr[pone] < arr[ptwo] ? arr[pone++] : arr[ptwo++];			
		}
		
//		两个必定 有一个会越界,两个只会执行一个
//		copy 那些没有越界 对应的 值，放在后面
		while (pone <= midn) {
//			若 pone 没有越界，潜台词是 ptwo 必定越界了
			help[i++] = arr[pone++];			
		}
		
		while (ptwo <= Rn) {
			help[i++] = arr[ptwo++];			
		}
		
//		将 help数组里的 copy 回 arr
		for (int j = 0; j < help.length; j++) {
			arr[Ln +j] = help[j];
		}
		
	}
	
	public static void comparator(int[] arr) {
		System.out.println("this is comparator");
		
	}
	
	
//	for test (绝对正确的算法)
//	一般使用系统自带的排序算法，或者容易实现无错误的算法
	public static void rightMethod(int[] arr) {
		Arrays.sort(arr);		
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
//	生成拷贝数组的方法
	public static int[] copyArray(int[] arr) {
		if (arr == null) {
			return null;
		}
		int[] res = new int[arr.length];
		for (int i = 0; i < arr.length; i++) {
			res[i] = arr[i];
		}
		return res;
	}

//	for test
//	判断两个数组是否相同
	public static boolean isEqual(int[] arrone, int[] arrtwo) {
		if((arrone == null && arrtwo != null) || (arrone != null && arrtwo == null)) {
			return false;
		}
		if(arrone == null && arrtwo == null) {
			return true;
		}
		if(arrone.length != arrtwo.length) {
			return false;
		}
		for (int i = 0; i < arrone.length; i++) {
			if (arrone[i] != arrtwo[i]) {
				return false;
			}
		}
		return true;
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
		}
	}
	

//	大样本测试 方法
	public static void main(String[] args) {
		int testTime = 500000;
		int size = 10;
		int value = 100;
		boolean succeed = true;
		for (int i = 0; i < testTime; i++) {
			int[] arrone = generateRandomArray(size, value);
			int[] arrtwo = copyArray(arrone);
			int[] arrthree = copyArray(arrone);
			mergeSort(arrone);
			rightMethod(arrtwo);
			if(!isEqual(arrone, arrtwo)) {
				succeed = false;
				printArray(arrthree);
				break;
			}
		}
		
		System.out.println(succeed ? "well done!" : "wrong algorithms!");
		
		int[] arr = generateRandomArray(size, value);
		printArray(arr);
		
	}	
	
}

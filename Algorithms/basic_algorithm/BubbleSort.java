package basic_algorithm;

import java.util.Arrays;

public class BubbleSort {

//	使用 java 实现 冒泡排序
	public static void bubbleSort(int[] arr) {
		if(arr == null || arr.length < 2) {
			return;
		}  
		for (int end = arr.length - 1; end >0; end--) {
//			每一轮排一个数
			for (int i=0; i< end; i++) {
				if (arr[i] > arr[i + 1]) {
					swap(arr, i, i+1);
				}
			} 
		} 
		
	}
	
	public static void swap(int[] arr, int i, int j) {
		int tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
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
	
	
	
	
	
	
	
	
	
	

}

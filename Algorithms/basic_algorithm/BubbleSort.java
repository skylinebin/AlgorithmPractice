package basic_algorithm;

import java.util.Arrays;

public class BubbleSort {

//	实现冒泡排序
	public static void bubbleSort(int[] arr) {
		if(arr == null || arr.length < 2) {
			return;
		}
		for (int end = arr.length - 1; end >0; end--) {
//			固定范围 每一次放好最大的数
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

}

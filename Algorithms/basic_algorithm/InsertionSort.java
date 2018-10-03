package basic_algorithm;

public class InsertionSort {
//	使用 java 实现的插入排序
	public static void insertionSort(int[] arr) {
		if (arr == null || arr.length < 2) {
			return;
		}
		for (int i = 1; i < arr.length; i++) {
//			指定第 i 个数的初始值
			for (int j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
//				从 i 个数开始往前进行排序
//				j >= 0 防止越界 arr[j] > arr[j + 1] 保证左边的最小
				swap(arr, j, j+1);
			}
		}
	}
	
	public static void swap(int[] arr, int i, int j) {
//		交换两个数的另一种写法
//		arr[i] = arr[i] ^ arr[j];
//		arr[j] = arr[i] ^ arr[j];
//		arr[i] = arr[i] ^ arr[j];
		int tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}

}

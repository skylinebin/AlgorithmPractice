package basic_algorithm;

public class InsertionSort {
	public static void insertionSort(int[] arr) {
		if (arr == null || arr.length < 2) {
			return;
		}
		for (int i = 1; i < arr.length; i++) {
//			当前  i 位置的数
			for (int j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
//				若  i-1 比 i 位置数大，则交换，j--继续往前看
//				j >= 0 不越界，arr[j] > arr[j + 1] 判断两个数是否左边最小
				swap(arr, j, j+1);
			}
		}
	}
	
	public static void swap(int[] arr, int i, int j) {
//		另一种交换两个数的方法
//		arr[i] = arr[i] ^ arr[j];
//		arr[j] = arr[i] ^ arr[j];
//		arr[i] = arr[i] ^ arr[j];
		int tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}

}

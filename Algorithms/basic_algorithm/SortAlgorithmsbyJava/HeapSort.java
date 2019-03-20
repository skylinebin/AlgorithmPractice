package basic_algorithm;

public class HeapSort {

	// 用 Java 实现堆排序
	public static void heapSort(int[] arr) {
		if (arr == null || arr.length < 2) {
			return;
		}
		for (int i = 0; i < arr.length; i++) {
			heapInsert(arr, i); // 在 0~i 直接形成大根堆
		}
		// for循环 后整个数组形成大根堆结构		
		int heapSize = arr.length;
		swap(arr, 0, --heapSize);
		while (heapSize > 0) {
			heapify(arr, 0, heapSize);
			swap(arr, 0, --heapSize);			
		}
		
	}
	
	// 实现大根堆的结构，与父节点进行对比和交换	
	public static void heapInsert(int[] arr, int index) {
		while (arr[index] > arr[(index - 1)/2]) {
			swap(arr, index, (index - 1) / 2);
			index = (index - 1) / 2;			
		}
	}
	
	// index 位置被更换后如何重新变成大根堆	
	public static void heapify(int[] arr, int index, int heapSize) {
		int left = index * 2 + 1;
		while (left < heapSize) {
			// 取到左右孩子中的最大的那一个			
			int largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left+1 : left;  // 右孩子不越界，并且右孩子比左孩子大才能取到左孩子
			largest = arr[largest] > arr[index] ? largest : index;
			if (largest == index) {
				break;
			}
			swap(arr, index, largest);
			index = largest;
			left = index * 2 + 1;
		}
		
	}
	
	public static void swap(int[] arr, int i, int j) {
		// 交换两个数
		int tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
}

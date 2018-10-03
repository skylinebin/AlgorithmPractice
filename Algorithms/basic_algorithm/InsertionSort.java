package basic_algorithm;

public class InsertionSort {
	public static void insertionSort(int[] arr) {
		if (arr == null || arr.length < 2) {
			return;
		}
		for (int i = 1; i < arr.length; i++) {
//			��ǰ  i λ�õ���
			for (int j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
//				��  i-1 �� i λ�������򽻻���j--������ǰ��
//				j >= 0 ��Խ�磬arr[j] > arr[j + 1] �ж��������Ƿ������С
				swap(arr, j, j+1);
			}
		}
	}
	
	public static void swap(int[] arr, int i, int j) {
//		��һ�ֽ����������ķ���
//		arr[i] = arr[i] ^ arr[j];
//		arr[j] = arr[i] ^ arr[j];
//		arr[i] = arr[i] ^ arr[j];
		int tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}

}

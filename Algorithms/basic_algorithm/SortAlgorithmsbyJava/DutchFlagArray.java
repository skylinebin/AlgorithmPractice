package basic_algorithm;

public class DutchFlagArray {
	// 使用java 实现 荷兰国旗的数组分类问题（升级版，可选从L到R）	
	public static int[] partition(int[] arr, int L, int R, int num) {
		int less = L - 1;
		int more = R + 1;
		int index = L;
		while (index < more) {
			if (arr[index] < num) {
				swap(arr, ++less, index++);
			} else if (arr[index] > num){
				swap(arr, --more, index);
			} else {
				index++;
			}			
		}
		return new int[] {less + 1, more - 1};
		// 返回的是 等于区域的 左右边界下标 数组
	}
	
	public static void swap(int[] arr, int i, int j) {
		// 交换两个数
		int tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
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
			System.out.println("");
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
			partition(arrtwo, 0, arrtwo.length-1, 0);
			partition(arrthree, 0, arrthree.length-1, 0);
//			mergeSort(arrone);
//			rightMethod(arrtwo);
			if(!isEqual(arrtwo, arrthree)) {
				succeed = false;
				printArray(arrone);
				printArray(arrtwo);
				printArray(arrthree);
				break;
			}
		}
		
		System.out.println(succeed ? "well done!" : "wrong algorithms!");
		
		int[] arr = generateRandomArray(size, value);
		printArray(arr);
		
	}	
}

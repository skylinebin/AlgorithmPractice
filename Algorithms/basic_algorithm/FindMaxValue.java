package basic_algorithm;

public class FindMaxValue {

//	使用递归求数组最大值
	public static int getMaxValue(int[] arr, int Ln, int Rn) {
		if (Ln == Rn) {
			return arr[Ln];
		}
		int midn= (Ln + Rn)/2;
		int maxLeft = getMaxValue(arr, Ln, midn);
		int maxRight = getMaxValue(arr, midn+1, Rn);
		return Math.max(maxLeft, maxRight);
		
	}
	
	public static void main(String[] args) {
		int[] arr = {4, 3, 2, 1};
//		调用递归实现找最大值 
		System.out.println(getMaxValue(arr, 0, arr.length - 1));
	}

}

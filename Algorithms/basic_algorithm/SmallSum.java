package basic_algorithm;

public class SmallSum {

//	使用 java 实现 小和问题
	public static int smallSum(int[] arr) {
		if (arr == null || arr.length < 2) {
			return 0;
		}
		return mergeSort(arr, 0, arr.length - 1);
	}
	
//	返回的 ln 到 rn 之间的所有小和
	public static int mergeSort(int[] arr, int ln, int rn) {
		if (ln == rn) {
			return 0;
		}
		int midn = ln + ((rn - ln) >> 1);
//		整体的小和 = 左侧部分产生的小和 + 右侧部分产生的小和 + merge过程中产生的小和
		return mergeSort(arr, ln, midn)
				+ mergeSort(arr, midn + 1, rn)
				+ merge(arr, ln, midn, rn);
	}
	
	public static int merge(int[] arr, int ln, int mn, int rn) {
		int[] help = new int[rn - ln +1];
		int i =0;
		int pone =ln;
		int ptwo = mn +1;
		int res = 0;
		while (pone <= mn && ptwo <= rn) {
			res += arr[pone] < arr[ptwo] ? (rn - ptwo +1) * arr[pone] : 0;
			help[i++] = arr[pone] < arr[ptwo] ? arr[pone++] : arr[ptwo++];	
		}

		while (pone <= mn) {
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
}

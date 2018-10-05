package basic_algorithm;

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
		
		
	}
}

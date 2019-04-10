// package basic_algorithm;

public class MaxGap {

    // 使用桶排序的思想，求一个数组排序后相邻两数之差的最大值
    public static int maxGap(int[] nums) {
        if(nums == null || nums.length < 2){
            return 0;
        }
        int len = nums.length;
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < len; i++){
            min = Math.min(min, nums[i]);
            max = Math.max(max, nums[i]);
        }
        if (min == max){
            return 0;
        }
        boolean[] hasNum = new boolean[len + 1];
        int[] maxs = new int[len + 1];
        int[] mins = new int[len + 1];
        int bid = 0;
        for (int j = 0; j < len; j++) {
            bid = bucket(nums[j], len, min, max); // 确定当前数它属于几号桶
            mins[bid] = hasNum[bid] ? Math.min(mins[bid], nums[j]) : nums[j];
            maxs[bid] = hasNum[bid] ? Math.max(maxs[bid], nums[j]) : nums[j];
            hasNum[bid] = true;
        }
        int res = 0;
        int lastMax = maxs[0];
        int count = 1;
        for (;count <= len; count++) {
            if (hasNum[count]) {
                // 找全局最大差值
                res = Math.max(res, mins[count] - lastMax);
                lastMax = maxs[count];
            }
        }
        return res;
    }

    public static int bucket(long num, long len, long min, long max) {
        return (int) ((num - min) * len / (max - min));
    }
}
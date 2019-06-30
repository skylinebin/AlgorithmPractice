/*
 * @Author: SkylineBin 
 * @Date: 2019-06-30 22:11:41 
 * @Last Modified by: SkylineBin
 * @Last Modified time: 2019-06-30 22:18:21
 */


/*****
 * 
 * 变形跳板问题
 * 
 * 
 */


function jumpGameX(startP,nums){
    if(!nums || !nums.length) return -1;
    if(startP === 1){
        let start = 0, end = 0, jump = 0;
        while(end < nums.length -1) {
            jump++;
            let farthest = end;
            for(let i = start; i <= end; i++) {
                if(nums[i] + i > farthest) {
                    farthest = nums[i] + i;
                }
            }
            start = end + 1;
            end = farthest; 
        }
        return jump;
    }
    return 0;
}
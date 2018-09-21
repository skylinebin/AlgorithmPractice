/**
*输入一个递增排序的数组和一个数字S，在数组中查找两个数，
*使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
*
*/

// failed first

function FindNumbersWithSum(array, sum)
{
    // write code here
    var arrlength = array.length;
    var numones =[];
    var numtwos=[];
    var nummulti=[];
    if(arrlength === 0 || array == null){
        return '';
    }else{
        for(var i=0;i< arrlength-1;i++){
            for(var j=i+1;j<arrlength;j++){
                if(array[i] + array[j] == sum){
                    if(array[i] < array[j]){
                        numones.push(array[i]);
                        numtwos.push(array[j]);
                    }else{
                        numones.push(array[j]);
                        numtwos.push(array[i]);
                    }
                    nummulti.push(array[i] * array[j]);
                }
            }
        }
        if(nummulti.length <= 0){
            return '';
        }else{

        var leastone =0;
        var leastnum = nummulti[0];
        for(var k=0;k<nummulti.length;k++){
            if(leastnum >nummulti[k]){
                leastnum = nummulti[k];
                leastone = k;
            }
        }
        return numones[leastone],numtwos[leastone];
    ｝
    }

}

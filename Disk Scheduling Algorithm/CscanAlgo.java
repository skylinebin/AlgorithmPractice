package System;

public class CscanAlgo {
    public static void main(String[] args){

        int[] fixedataA = {29,84,8,89,1,94};
        int fixedcurrent = 42;
        System.out.println("当前磁道位置:"+fixedcurrent);
        for(int i=0;i<fixedataA.length;i++){
            System.out.println("磁道访问请求"+i+": "+fixedataA[i]);
        }
        System.out.println();
        System.out.println("-------------------------");
        cscansort(fixedataA,fixedcurrent);

    }

    //@author SkylineBin
    public static void cscansort(int[] dataA, int current){
        //dataA是按请求顺序排列的磁道访问请求，current是当前磁道磁头位置
        System.out.println("开始循环电梯扫描(SCAN)算法:");
        int processlen = dataA.length;
        int sortIndex =0;
        int direction =0;//用于表示磁盘扫描的方向 0表示一直从大到小的方向扫描
        int tempd = 0;
        //先对访问请求排序，从小到大
        for(int ti=0;ti<processlen;ti++){
            for(int tj=ti;tj<processlen;tj++){
                if(dataA[ti]>dataA[tj]){
                    tempd = dataA[ti];
                    dataA[ti] = dataA[tj];
                    dataA[tj] = tempd;
                }
            }
        }
        //判断当前磁头所在位置
        for(int ti=0;ti<processlen;ti++){
            if(dataA[ti]>current){
                sortIndex = ti;
                break;
            }else if(ti == processlen-1){
                sortIndex = processlen;
            }
            //否则当前磁头位置最小
        }
        int allcount=0;
        int step=0;
        int countnum=0;
        //若磁道位置不在开头也不在结尾
        if(sortIndex!=0 && sortIndex!=processlen){
            if(direction == 0){
                //先小后大 从大到小
                for(int ts=sortIndex-1;ts>=0;ts--){
                    step = Math.abs(dataA[ts] - current);
                    System.out.println(countnum+1+":  "+ current+"---->"+dataA[ts]+"  移动"+step+"次");
                    allcount+= step;
                    current = dataA[ts];
                    countnum++;
                }
                for(int ts =processlen-1;ts>=sortIndex;ts--){
                    step = Math.abs(dataA[ts] - current);
                    System.out.println(countnum+1+":  "+ current+"---->"+dataA[ts]+"  移动"+step+"次");
                    allcount+= step;
                    current = dataA[ts];
                    countnum++;
                }
            }else{
                //先大后小
                for(int ts =sortIndex;ts<processlen;ts++){
                    step = Math.abs(dataA[ts] - current);
                    System.out.println(countnum+1+":  "+ current+"---->"+dataA[ts]+"  移动"+step+"次");
                    allcount+= step;
                    current = dataA[ts];
                    countnum++;
                }

                for(int ts=0;ts<sortIndex;ts++){
                    step = Math.abs(dataA[ts] - current);
                    System.out.println(countnum+1+":  "+ current+"---->"+dataA[ts]+"  移动"+step+"次");
                    allcount+= step;
                    current = dataA[ts];
                    countnum++;
                }
            }
        }else if(sortIndex==0 ||sortIndex==processlen){
            //若磁头在位置开头或者在位置结尾
            if(direction == 0){
                for(int ts=processlen-1;ts>=0;ts--){
                    step = Math.abs(dataA[ts] - current);
                    System.out.println(countnum+1+":  "+ current+"---->"+dataA[ts]+"  移动"+step+"次");
                    allcount+= step;
                    current = dataA[ts];
                    countnum++;
                }
            }else{
                for(int ts =0;ts<processlen;ts++){
                    step = Math.abs(dataA[ts] - current);
                    System.out.println(countnum+1+":  "+ current+"---->"+dataA[ts]+"  移动"+step+"次");
                    allcount+= step;
                    current = dataA[ts];
                    countnum++;
                }
            }
        }
        System.out.println();
        System.out.println("磁道磁头总移动:"+allcount+"次");
        System.out.println("-------------------------");
    }
}

package System;

import java.util.Random;

public class SstfAlgo {
    public static void main(String[] args){
//        int maxran = 100;
//        int minran =1;
//        int totalnum = 6;
//        int tempdata =0;
//        int[] dataArray = new int[totalnum];
//        Random trandom = new Random();
//        int currentdata = trandom.nextInt(maxran)%(maxran-minran+1) + minran;
////        生成初始磁道位置
//        System.out.println("当前磁道位置:"+currentdata);
//        for(int i=0;i<totalnum;i++){
//            tempdata = trandom.nextInt(maxran)%(maxran-minran+1) + minran;
//            //模拟生成磁道请求
//            System.out.println("磁道访问请求"+i+": "+tempdata);
//            dataArray[i] = tempdata;
//        }
//        fcfssort(dataArray,currentdata);

//        int[] fixedataA = {65,68,49,28,100,170,160,48,194};
//        int fixedcurrent = 110;
        int[] fixedataA = {29,84,1,89,51,94};
        int fixedcurrent = 42;
        System.out.println("当前磁道位置:"+fixedcurrent);
        for(int i=0;i<fixedataA.length;i++){
            System.out.println("磁道访问请求"+i+": "+fixedataA[i]);
        }
        System.out.println();
        System.out.println("-------------------------");
        sstfsort(fixedataA,fixedcurrent);
    }

    //@author SkylineBin
    public static void sstfsort(int[] dataA, int current){
        //dataA是按请求顺序排列的磁道访问请求，current是当前磁道磁头位置
        System.out.println("开始最短寻道时间优先(SSTF)算法:");
        int processlen = dataA.length;
        int[] accessList = new int[processlen];
        int allcount=0;
        int step=0;
//        int tempmove= 200;
        int tempmove= 1000;//用于把第一个值赋值
        int ChosedIndex =0;    //用于缓存当前移动位置
        for(int i=0;i<processlen;i++){
            for(int j=0;j<processlen;j++){
                if(dataA[j]!=-1){
                    if(Math.abs(tempmove-current)> Math.abs(dataA[j]-current)){
                        tempmove = dataA[j];
                        ChosedIndex = j;
                    }
                }
            }
            accessList[i] = tempmove;
            step = Math.abs(tempmove - current);
            System.out.println(i+1+":  "+ current+"---->"+tempmove+"  移动"+step+"次");
            allcount+= step;
            dataA[ChosedIndex] = -1;
            current = tempmove;
            tempmove = 1000;
        }
        System.out.println();
        System.out.println("磁道磁头总移动:"+allcount+"次");
        System.out.println("-------------------------");
    }

}

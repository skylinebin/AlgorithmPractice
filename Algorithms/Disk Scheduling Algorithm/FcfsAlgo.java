package System;

import java.util.Random;

public class FcfsAlgo {
    public static void main(String[] args){
//        int maxran = 100;
//        int minran =1;
//        int totalnum = 6;
//        int tempdata =0;
//        int[] dataArray = new int[6];
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
        int[] fixedataA = {29,84,1,89,51,94};
        int fixedcurrent = 42;
        System.out.println("当前磁道位置:"+fixedcurrent);
        for(int i=0;i<fixedataA.length;i++){
            System.out.println("磁道访问请求"+i+": "+fixedataA[i]);
        }
        System.out.println();
        System.out.println("-------------------------");
        fcfssort(fixedataA,fixedcurrent);

    }

    //@author SkylineBin
    public static void fcfssort(int[] dataA, int current){
//        dataA是按请求顺序排列的磁道访问请求，current是当前磁道磁头位置
        System.out.println("开始先来先服务(FCFS)算法:");
        int processlen = dataA.length;
        int allcount=0;
        int step;
        step = Math.abs(current - dataA[0]);
        System.out.println("1:  "+ current+"---->"+dataA[0]+"  移动"+step+"次");
        allcount = allcount+step;
        for(int i=0;i<processlen-1;i++){
            step = Math.abs(dataA[i] - dataA[i+1]);
            System.out.println(i+2+":  "+ dataA[i]+"---->"+dataA[i+1]+"  移动"+step+"次");
            allcount+= step;
        }
        System.out.println();
        System.out.println("磁道磁头总移动:"+allcount+"次");
        System.out.println("-------------------------");
    }
}

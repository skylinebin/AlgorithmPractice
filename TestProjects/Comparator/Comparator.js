/****
 * 
 * 使用比较器
 * 
 */

function Student(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
}

// 自定义的比较器

function compare(obj1, obj2){
    // 返回负数 认为第一个参数放在前面
    // 返回正数 认为第二个参数放在前面
    // 返回零，认为两者相等

    // 按照grade从小到大排列
    // if (obj1.grade < obj2.grade) {
    //     return -1;
    // } else if (obj2.grade < obj1.grade) {
    //     return 1;
    // } else {
    //     return 0;
    // }

    return obj1.grade - obj2.grade;
    // 如果 obj1 的 grade 更小, 减完后就是负的
    // 如果 obj2 的 grade 更小，减完后就是正的
}

// 按照 name 字段降序排列的比较器
function compare_name (obj1, obj2){
    return obj1.name > obj2.name;
    // ! 对于字符串 要比较大小
}

// 按照 age 字段降序排列的比较器
function compare_age (obj1, obj2){
    return obj1.age - obj2.age;
}


// 自定义的打印方法
function printStudent(oldarr){
    for (let i = 0; i < oldarr.length; i++) {
        var temp = oldarr[i];
        var thisstr = "";
        for (var one in temp) {
            thisstr = thisstr + one + " : " + temp[one] + " ";
        }
        console.log(thisstr);
        
    }
}

var student1 = new Student("A", 3, 23);
var student2 = new Student("B", 2, 21);
var student3 = new Student("C", 1, 22);

var students = [student1, student2, student3];
console.log("--------------init array--------------");
printStudent(students);

console.log("-------------按 grade 属性排序---------------");

// 传递比较器进入系统的方法
students.sort(compare);
printStudent(students);

console.log("-------------按 age 属性排序---------------");

// 传递比较器进入系统的方法
students.sort(compare_age);
printStudent(students);

console.log("-------------按 name 属性排序---------------");

// 传递比较器进入系统的方法
students.sort(compare_name);
printStudent(students);

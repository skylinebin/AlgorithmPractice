function processData(data){
    // let tempData = {
    //     "name":"Han Meimei",
    //     "gender":"男"
    // }
    // let afterPro = data;
    // let regexpName = /<% name %>/gi;
    // let regexpGender = /<% gender %>/gi;
    // afterPro = afterPro.replace(regexpName,tempData.name);
    // afterPro = afterPro.replace(regexpGender,tempData.gender);
    // return afterPro;
    let tempData = {
        "name":"Han Meimei",
        "gender":"男"
    }
    let regexpName = new RegExp("<% name %>");
    let regexpGender = new RegExp("<% gender %>");
    data = data.replace(regexpName,tempData.name);
    data = data.replace(regexpGender,tempData.gender);
    return data;
}


let data = "<% name %>，欢迎来到这里，祝你早日找到<% gender %>盆友！";
console.log(processData(data));
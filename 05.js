 //箭头函数 - 重点（小程序、uniapp、脚手架中大量使用）
 var sum = function (a, b) {
    return a + b;
};

//箭头函数-改进1
var sum = (a, b) => {
    return a + b;
}
//箭头函数-改进2
var sum = (a, b) => a + b;

//规律：(重要、重要、重要)
// 1.去掉function
// 2.在括号后面加箭头
// 3.如果逻辑代码中仅有return可以直接省去（如果有逻辑体，则不能省去）
//4.参数只有一个，可以把括号省去

var arr = [1, 2, 3, 4, 5, 6];

// var newarr = arr.map(function (obj) {
//     return obj * 2;
// });

//改变
var newarr = arr.map(obj => obj * 2);
console.log(newarr);
 //arr每个元素*2
 let arr = [1, 2, 3, 4, 5, 6, 7];
 //传统的方式
 let newarr = [];
 for (let i = 0; i < arr.length; i++) {
     newarr.push(arr[i] * 2);
 }
 console.log(newarr);


 //map --自带循环，并且会把处理的值回填对应位置
 var newarr2 = arr.map(ele => ele * 2);
 console.log(newarr2);
 // 还原
 // var newarr2 =arr.map(function(ele){
 //     return ele*2;
 // })
 // console.log(newarr2);

 //map --处理对象数据
 var users = [{ age: 10, name: "小张" }, { age: 12, name: "小邓" }, { age: 15, name: "小王" }];
 var newusers = users.map(function (ele) {
     ele.age = ele.age + 1;
     return ele;
 });
 console.log(newusers);
 //简写方式
 var newusers2 = users.map(ele => {
     ele.age = ele.age + 1;
     //临时加一个数据
     ele.check = true;
     return ele;
 });
 console.log(newusers2);
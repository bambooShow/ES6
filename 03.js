 //字符串涉及动态部分
 var person = {
    name: "邓红成",
    address: "重庆",
    link: "www.baidu.com"
};
let address = "传统的————我是" + person.name + "，正在" + person.address + "学习，学习的东西来自" + person.link + "平台。"
console.log(address);

//es6的模板字符串语法
let address2 = `ES6————我是${person.name}，正在${person.address}学习，学习的东西来自${person.link}平台。`
console.log(address2);

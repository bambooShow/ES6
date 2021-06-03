 //对象传播操作符
 var person = {
    name: "邓红成",
    address: "重庆",
    link: "www.baidu.com",
    phone: 15696297885,
    go() {
        console.log("干饭");
    }
}
//解构
var { name, address, ...person2 } = person;
console.log(name);
console.log(address);
console.log(person2);

  //let 和const解决
        //1.var的变量穿透的问题
        //2.常量修改问题
        for (let i = 0; i < 5; i++) {
            console.log(i);
        }

        //这里就造成了变量穿透问题 var i会穿透 let则会报错
        // console.log(i);


        const PI = Math.PI;//定义为var时 可修改
        // PI = 100;

        console.log(PI);
        //在实际开发和生产中，如果是小程序，uniapp或者一些脚手架中的，可以大胆的去使用let和const
        //但是如果你是web开发。建议使用var,在一些低版本的浏览器还是不支持let和const

  //java----后台
        // 数据格式：var userPage = { pages: 10, users: [{}, {}], pageNo: 1, pageSize: 100, total: 100 }
        //异步请求
        // $.post("user/search", function (res)){
        // res = {pages:10,users:[{},{}], pageNo:1, pageSize:100, total:100};
        var userPage = { pages: 10, users: [{}, {}], pageNo: 1, pageSize: 100, total: 100 };
        var { users, ...userPage2 } = userPage;

import mock from "mockjs"

let data = mock.mock({
    "data|10":[
        {
            "id|+1":0,
            "username":"@cname",
            "tel":/^1(3|8|7|9|5)\d{9}$/,
            "imgUrl":"@image('100x100', '#c33', '#FFF', 'alley')",
            "address":"@county(true)",
            "time":'@date("yyyy-MM-dd hh:mm:ss")',
            "goodsInfo":"@cparagraph",
            "list|5":[
                {
                    "imgUrl":"@image('100x100', '#c33', '#FFF', 'alley')"
                }
            ],
            "info":{
                "username":"@cname"
            }
        }
    ]
})



/*
    mock.mock({})===mock数据

    mock.mock(url,method,()=>{}):模拟接口


*/

//   /user/list    /\/user\/list/

// mock.mock(/\/users\/list/,"get",(options)=>{
//     console.log(options)

//     return data;
// })



mock.mock(/\/users\/list/,"post",(options)=>{
    console.log(options)

    return data;
})
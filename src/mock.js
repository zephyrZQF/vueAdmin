const  Mock = require('mockjs')

const Random = Mock.Random

let Result = {
    code: 200,
    msg: '操作成功',
    data: null
}

Mock.mock('/captcha','get',()=>{
    Result.data = {
        token: Random.string(32),
        captchaImg: Random.dataImage('80x40','p7n5w')
    }
    return Result
})

Mock.mock('/login','post',()=>{

    Result.code = 200
    // Result.msg = "验证码错误"
    return Result
})

Mock.mock('/sys/userInfo','get',() => {
    Result.data = {
        id:'1',
        username:'test',
        avatar:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201412%2F15%2F20141215151225_kQSkZ.thumb.700_0.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622895121&t=b19c0a71beba8b8000216d5174946e5c'
    }
    return Result
})

Mock.mock('/logout','post',()=>{

    Result.code = 200
    // Result.msg = "验证码错误"
    return Result
})
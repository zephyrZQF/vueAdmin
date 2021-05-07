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

Mock.mock('/sys/menu/nav','get',()=>{

    let nav = [
        {
            name: 'SysManga',
            title: '系统管理',
            icon: 'el-icon-s-operation',
            component: '',
            path: '',
            children: [
                {
                    name: 'SysUser',
                    title: '用户管理',
                    icon: 'el-icon-s-custom',
                    path: '/sys/users',
                    component: 'sys/User',
                    children: []
                }
            ]
        },
        {
            name: 'SysTools',
            title: '系统工具',
            icon: 'el-icon-s-tools',
            path: '',
            component: '',
            children: [
                {
                    name: 'SysDict',
                    title: '数字字典',
                    icon: 'el-icon-s-order',
                    component: '',
                    path: '/sys/dicts',
                    children: []
                },
            ]
        }
    ]
    let authoritys = []

    Result.data = {
        nav: nav,
        authoritys: authoritys
    }
    return Result
})
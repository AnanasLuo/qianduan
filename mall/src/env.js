let baseURL;
//设置环境变量
switch(process.env.NODE_ENV){
    case 'development':
        baseURL = 'http://dev-mall-pre.sprinbboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.sprinbboot.cn/api';
        break;
    case 'production':
        baseURL = 'http://mall-pre.sprinbboot.cn/api';
        break;   
    default:
        baseURL = 'http://mall-pre.sprinbboot.cn/api';
        break;

}
module.exports = {
    //开发环境
    devServer : {
        proxy : {
            //根据接口ip后名称
            '/api' : {
                target : 'http://39.97.33.178',//目标
                changeOrigin : true //是否改变地址，是
            }
        }
    }
}
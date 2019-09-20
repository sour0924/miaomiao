export default {
    path : '/movie',
    component : () => import('@/views/Movie'),
    //二级路由
    children : [
        {
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        //正在热映-影片详情路由配置
        {
            path : 'detail/1/:movieId',
            components : {
                //解决滑动时列表空白的情况
                default : () => import('@/components/NowPlaying'),
                //这里detail与路由对应
                detail : () => import('@/views/Movie/detail')
            },
            props : {
                detail : true
            }
            
        },
        //即将上映-影片详情路由配置
        {
            path : 'detail/2/:movieId',
            components : {
                //解决滑动时列表空白的情况
                default : () => import('@/components/ComingSoon'),
                //这里detail与路由对应
                detail : () => import('@/views/Movie/detail')
            },
            props : {
                detail : true
            }
            
        },
        //默认首页，展示热映
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
        
    ]
}
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
        //默认首页，展示热映
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}
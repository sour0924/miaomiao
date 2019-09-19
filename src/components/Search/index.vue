<!-- 二级组件-搜索 -->
<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" v-model="message"><!--双向数据绑定，获取输入值-->
            </div>					
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <!-- <li>
                    <div class="img"><img src="/images/movie_1.jpg"></div>
                    <div class="info">
                        <p><span>无名之辈</span><span>8.5</span></p>
                        <p>A Cool Fish</p>
                        <p>剧情,喜剧,犯罪</p>
                        <p>2018-11-16</p>
                    </div>
                </li> -->
                <li v-for="item in moviesList" :key="item.id">
                    <div class="img"><img :src="item.img | setWH('128.180')"></div>
                    <div class="info">
                        <p><span>{{item.nm}}</span><span>{{item.sc}}</span></p>
                        <p>{{item.enm}}</p>
                        <p>{{item.cat}}</p>
                        <p>{{item.rt}}</p>
                    </div>
                </li> 
            </ul>
        </div>
	</div>
</template>

<script>

export default {
    name : 'Search',
    data(){
        return {
            //初始值
            message : '',
            moviesList : []
        }
    },
    methods : {
        cancelRequest() {
          if (typeof this.source === 'function') {
             this.source('终止请求!')
            }
        }
    },
    //mounted(){} 搜索不使用mounted，因为数据是搜索展示
    //使用watch监听输入框值 ,但是监听输入中，并不是输入结束搜索，需要函数防抖策略，避免结束前触发
    watch : {
        message(newVal){
            
            this.cancelRequest();

            //注意 this 指向
            let that = this;

            //console.log(newVal);测试是否获取输入的值
            this.axios.get('/api/searchList?cityId=10&kw='+newVal,{
                cancelToken: new this.axios.CancelToken( function(c) {
                    //console.log(11111);//测试
                    that.source = c;})
            }).then((res)=>{
                var msg = res.data.msg;
                var movies = res.data.data.movies;
                if(msg && movies){
                    this.moviesList = res.data.data.movies.list;//根据json数据结构
                }
            }).catch((err) => {
                if (this.axios.isCancel(err)) {
                    // 终止多次请求 请求取消 返回取消后的信息
                    console.log('Request canceled', err.message);
                } else {
                    // 服务端数据异常
                    console.log(err);
                }
            });
        }
    }
}
</script>

<style scoped>
#content .search_body{ flex:1; overflow:auto;}
.search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}
.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}
.search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;}
.search_body .search_result .img{ width: 60px; float:left; }
.search_body .search_result .img img{ width: 100%; }
.search_body .search_result .info{ float:left; margin-left: 15px; flex:1;}
.search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}
</style>
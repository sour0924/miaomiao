<!-- 我的喵喵组件页面 -->
<template>
    <div id="main">
        <Header title="我的喵喵"/>
        <div class="login_body">
            <Login />
        </div>
        <TabBar />
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Login from '@/components/Login';

export default {
    name : 'Mine',
    components : {
        Header,
        TabBar,
        Login
    }
}
</script>

<style scoped>

</style>
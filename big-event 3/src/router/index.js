import {createRouter, createWebHistory} from 'vue-router';

// 导入组件
import LoginVue from '@/views/Login.vue';
import LayoutVue from '@/views/Layout.vue';
import MainVue from "@/views/MainVue.vue";
import ArticleCategoryVue from '@/views/article/ArticleCategory.vue';
import ArticleManageVue from '@/views/article/ArticleManage.vue';
import GEPVue from '@/views/area/situation.vue'
import UserInfoVue from '@/views/user/UserInfo.vue';
import UserResetPasswordVue from '@/views/user/UserResetPassword.vue';
import AreaSituation from '@/views/area/situation.vue';
import EcologicalProducts from '@/views/ecological/products.vue';

// 定义路由关系
const routes = [
    {path: '/login', component: LoginVue},
    {
        path: '/',
        component: LayoutVue,
        redirect: '/main',
        children: [
            {path: '/main', component: MainVue},
            {path: '/article/category', component: ArticleCategoryVue},
            {path: '/article/manage', component: ArticleManageVue},
            {path: '/GEP', component: GEPVue},
            {path: '/user/info', component: UserInfoVue},
            {path: '/user/resetPassword', component: UserResetPasswordVue},
            {path: '/area/situation', component: AreaSituation},
            {path: '/ecological/product', component: EcologicalProducts}
        ]
    }
];

// 创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

// 添加 beforeEach 守卫
router.beforeEach((to, from, next) => {
    // 检查用户是否正在访问根路径
    if (to.path === '/') {
        // 重定向到 /main
        next('/main');
    } else {
        // 否则，继续正常导航
        next();
    }
});

// 导出路由
export default router;

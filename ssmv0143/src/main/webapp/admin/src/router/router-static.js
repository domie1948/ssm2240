import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xiaoyuanrenwu from '@/views/modules/xiaoyuanrenwu/list'
    import kebiaochaxun from '@/views/modules/kebiaochaxun/list'
    import renwutijiao from '@/views/modules/renwutijiao/list'
    import wangshangxuanke from '@/views/modules/wangshangxuanke/list'
    import jiaoshipingjiao from '@/views/modules/jiaoshipingjiao/list'
    import jiaoshixinxi from '@/views/modules/jiaoshixinxi/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import xuankexiangqing from '@/views/modules/xuankexiangqing/list'
    import chengjichaxun from '@/views/modules/chengjichaxun/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import pingjiaoxiangqing from '@/views/modules/pingjiaoxiangqing/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/xiaoyuanrenwu',
        name: '校园任务',
        component: xiaoyuanrenwu
      }
      ,{
	path: '/kebiaochaxun',
        name: '课表查询',
        component: kebiaochaxun
      }
      ,{
	path: '/renwutijiao',
        name: '任务提交',
        component: renwutijiao
      }
      ,{
	path: '/wangshangxuanke',
        name: '网上选课',
        component: wangshangxuanke
      }
      ,{
	path: '/jiaoshipingjiao',
        name: '教师评教',
        component: jiaoshipingjiao
      }
      ,{
	path: '/jiaoshixinxi',
        name: '教室信息',
        component: jiaoshixinxi
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/xuankexiangqing',
        name: '选课详情',
        component: xuankexiangqing
      }
      ,{
	path: '/chengjichaxun',
        name: '成绩查询',
        component: chengjichaxun
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/pingjiaoxiangqing',
        name: '评教详情',
        component: pingjiaoxiangqing
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

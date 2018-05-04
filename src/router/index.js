import Vue from 'vue'
import Router from 'vue-router'
import Article from 'components/article/article'
import vMain from 'components/main/main'
import ArticleDetail from 'components/article/detail/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/article',
      name: 'Article',
      component: Article,
      children: [
        {
          path: "/article/main",
          component: vMain,
          children: [
            {
              path: '/article/detail/:id',
              component: ArticleDetail
            }
          ]
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/project/HelloWorld'
import dataManagement from '@/project/dataManagement'
import productManagement from '@/project/productManagement'
import fileManagement from '@/project/fileManagement'
Vue.use(Router)

export default new Router({
  routes: [
        {
          path: '/',
          name: 'dataManagement',
          component: dataManagement,
        },
         {
          path: '/productManagement',
          name: 'productManagement',
          component: productManagement,
        }, 
        {
          path: '/fileManagement',
          name: 'fileManagement',
          component: fileManagement,
        },
     
    
  ]
})

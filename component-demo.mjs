import {executePostVueLoad} from './vue-loader.mjs'
import {registerListComponent} from './list-component.mjs'
executePostVueLoad(() => {
    registerListComponent()
    const vueApp = new Vue({
        el : '#app',
        data : {
            items : ['apple', 'pears', 'mango', 'banana'],
            title : "Fruits"
        }
    })
})

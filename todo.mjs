import {executePostVueLoad} from './vue-loader.mjs'

const createToDoVueInstance = () => new Vue({
    el : '#app',
    data : {
        items : [],
        currItem : ''
    },
    methods : {
        addToDoItem() {
            this.items.push(this.currItem)
            this.currItem = ''
        }
    }
})

executePostVueLoad(() => {
    createToDoVueInstance()
})

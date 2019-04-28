import {createVueInstancePostLoad} from './vue-loader.mjs'

const createVueInstanceForNormalMessage = () => {
    return new Vue({
        el : '#app',
        data : {
            message : "hello world"
        }
    })
}

const createForLoopVueInstance = () => {
    return new Vue({
        el : '#for-app',
        data : {
            texts : ['ab', 'cd', 'er', 'nk']
        }
    })
}

const createConditionalVueInstance = () => {
    return new Vue({
        el : '#cond-app',
        data : {
            seen : true
        },
        methods : {
            toggleShown() {
                this.seen = !this.seen
            }
        }
    })
}




createVueInstancePostLoad(() => {
    createVueInstanceForNormalMessage()
    createForLoopVueInstance()
    createConditionalVueInstance()
})

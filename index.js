

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

async function fetchVueFromCDN(){
    return await fetch("https://cdn.jsdelivr.net/npm/vue")
}

async function loadVueFromCDN() {
    const res = await fetchVueFromCDN()
    return res.text()
}

async function injectVueFromCDN() {
    const vuejs = await loadVueFromCDN()
    console.log("vue js code")
    console.log(vuejs)
    const script = document.createElement('script')
    script.innerHTML = vuejs
    document.body.appendChild(script)
}

async function createVueInstancePostLoad(cb) {
    const prevTime = currTimeInSeconds()
    await injectVueFromCDN()
    const currTime = currTimeInSeconds()
    console.log(currTime - prevTime)
    cb()
}

const currTimeInSeconds = () => new Date().getTime()

createVueInstancePostLoad(() => {
    createVueInstanceForNormalMessage()
    createForLoopVueInstance()
    createConditionalVueInstance()
})

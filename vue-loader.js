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

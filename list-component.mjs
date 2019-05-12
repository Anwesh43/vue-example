const registerTextComponent = () => {
    const ListItemComponent = Vue.component('listitem', {
        props: ['text'],
        template: '<li>{{text}}</li>'
    })
    console.log(ListItemComponent)
}

export const registerListComponent = () => {
    registerTextComponent()
    Vue.component('list', {
        props: ['items', 'title'],
        template : '<div><span>{{title}}</span><ul><listitem v-for = "item in items" v-bind:text = "item"></listitem></ul></div>'
    })
}

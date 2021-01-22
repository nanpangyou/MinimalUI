export default {
    bind: function (el, binding, vnode) {
        document.addEventListener('click', (e) => {
            if (!el.contains(e.target)) {
                binding.value()
            }
        })
    }
}


// 没理解为什么要写成下面的样子
// const callbacks = []
// document.addEventListener('click', (e) => {
//     const { target } = e
//     callbacks.forEach(item => {
//         if (!item.el.contains(target)) {
//             item.callback()
//         }
//     })
// })
// export default {
//     bind: function (el, binding, vnode) {
//         callbacks.push({ el, callback: binding.value })
//     }
// }
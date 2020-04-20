const log = {
    install(Vue) {
        Vue.prototype.$log = ({ title = 'log', type = 'info', text = '', plain = false } = { title: 'log', type: 'info', text: '', plain: false }) => {
            if (!plain) window.console.log(`%c ${title} %c ${text} %c `, `background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;`, `padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;background:${this.getTypeColor(type)};`, `background:transparent`)
            else window.console.log(`%c ${title} ${text}`, `padding: 1px;;color:${this.getTypeColor(type)};`)
        }
    },
    getTypeColor(type) {
        switch (type) {
            case 'info':
                return '#909399';
            case 'primary':
                return '#409EFF';
            case 'success':
                return '#67C23A';
            case 'warning':
                return '#E6A23C';
            case 'error':
                return '#F56C6C';
            default:
                return '#909399';
        }
    }
}

export default log
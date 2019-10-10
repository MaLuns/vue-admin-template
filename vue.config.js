'use strict'
const defaultSettings = require('./src/config/index')

module.exports = {
    configureWebpack: {
        name: defaultSettings.title,
    }
}
const path= require('path')

module.exports = {
    mode: 'development',
    entry: ['./Scripts/chat.js','./Scripts/ui.js','./Scripts/app.js'],
    output: {
        path:path.resolve(__dirname,'dst'),
        filename: 'bundle.js'
    },
    watch: true
}
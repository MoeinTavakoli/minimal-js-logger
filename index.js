const fs = require('fs')
const path = require('path')


class logger {
    constructor(option = { path: "./log" }) {

        this.path = option.path

        if (!fs.existsSync(this.path)) fs.mkdirSync(this.path)
        const date = new Date()

        this.filePath = `${this.path}/${date.getMonth()}-${date.getDay()}.log`
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, "")
        }
    }

    write(message, severity = "notice") {
        this.message = message;
        this.severity = severity;

        const date = new Date()
        fs.appendFileSync(this.filePath, `{message:"${this.message}",severity:"${this.severity}",date:"${date}",path:"${path.resolve()}"} \n`)
    }
}

module.exports = new logger({ path: "./log" })
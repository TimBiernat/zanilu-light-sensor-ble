bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Dollar), function () {
    for (let value of list) {
        bluetooth.uartWriteString(value)
    }
})
let data = ""
let list: string[] = []
bluetooth.startUartService()
loops.everyInterval(60000, function () {
    if (input.runningTime() > 60000) {
        data = "" + Math.round(input.runningTime() / 60000) + "," + Math.round(input.lightLevel())
        list.push(data)
    }
})

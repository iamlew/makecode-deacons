loops.forever(function () {
    if (input.lightLevel() > 128) {
        light.setAll(Colors.White)
    } else {
        if (input.lightLevel() < 20) {
            light.setAll(Colors.Red)
        } else {
            light.setAll(Colors.Green)
        }
    }
    loops.pause(1000)
    light.clear()
    loops.pause(1000)
})

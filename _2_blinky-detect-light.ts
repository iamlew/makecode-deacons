loops.forever(function () {
    if (input.lightLevel() > 128) {
        light.setAll(0xffffff)
    } else {
        if (input.lightLevel() < 20) {
            light.setAll(0xff0000)
        } else {
            light.setAll(0x00ff00)
        }
    }
    loops.pause(1000)
    light.clear()
    loops.pause(1000)
})

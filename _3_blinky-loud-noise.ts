loops.forever(function () {
    if (input.soundLevel() > 200) {
        light.setAll(0xffffff)
    } else {
        if (input.soundLevel() < 100) {
            light.setAll(0xff0000)
        } else {
            light.setAll(0x00ff00)
        }
    }
    loops.pause(1000)
    light.clear()
    loops.pause(1000)
})

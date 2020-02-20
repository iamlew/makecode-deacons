loops.forever(function () {
    if (input.soundLevel() > 200) {
        light.setAll(Colors.White)
    } else {
        if (input.soundLevel() < 100) {
            light.setAll(Colors.Red)
        } else {
            light.setAll(Colors.Green)
        }
    }
    loops.pause(1000)
    light.clear()
    loops.pause(1000)
})

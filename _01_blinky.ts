loops.forever(function () {
    light.setAll(Colors.Red)
    loops.pause(1000)
    light.clear()
    loops.pause(1000)
})

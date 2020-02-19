loops.forever(function () {
    light.setAll(0xff0000)
    loops.pause(500)
    light.clear()
    loops.pause(500)
})

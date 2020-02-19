let pixel = 0
loops.forever(function () {
    for (let index = 0; index <= pixel; index++) {
        light.setPixelColor(index, 0xffffff)
    }
    loops.pause(1000)
    light.clear()
    loops.pause(1000)
    if (pixel >= 9) {
        pixel = 0
    } else {
        pixel = pixel + 1
    }
})

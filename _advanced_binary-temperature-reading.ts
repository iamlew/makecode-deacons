let mask = 0
let temp = 0
loops.forever(function () {
    mask = 128
    temp = input.temperature(TemperatureUnit.Fahrenheit)
    for (let i = 0; i <= 7; i++) {
        if ((mask & temp) > 0) {
            light.setPixelColor(i, 0xFF0000)
        } else {
            light.setPixelColor(i, 0x0000FF)
        }
        mask = mask >> 1;
    }
})

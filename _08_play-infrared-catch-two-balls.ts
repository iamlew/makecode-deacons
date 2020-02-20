network.onInfraredReceivedNumber(function (num) {
    loops.pause(3000)
    if (num == 0) {
        music.jumpDown.play()
    } else if (num == 1) {
        music.powerDown.play()
    }
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(0)
    music.jumpUp.play()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(1)
    music.powerUp.play()
})

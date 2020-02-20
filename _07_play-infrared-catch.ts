network.onInfraredReceivedNumber(function (num) {
    loops.pause(3000)
    music.jumpDown.play()
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(0)
    music.jumpUp.play()
})

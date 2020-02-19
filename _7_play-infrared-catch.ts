network.onInfraredReceivedNumber(function (num) {
    music.jumpDown.play()
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    network.infraredSendNumber(0)
    music.jumpUp.play()
})

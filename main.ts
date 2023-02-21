let Mode = 0
let Power = 0
let ALARM = 0
let Alarm1 = 0
input.onSound(DetectedSound.Loud, function () {
    if (Mode == 1) {
        if (Power == 1) {
            ALARM = 1
            basic.pause(15000)
            ALARM = 0
        } else {
            ALARM = 0
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Mode == 0) {
        if (Power == 1) {
            ALARM = 1
            basic.pause(15000)
            ALARM = 0
        } else {
            ALARM = 0
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(192)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "HeLl0") {
        if (Power == 0) {
            Power = 1
            basic.showIcon(IconNames.Yes)
            basic.pause(100)
            basic.clearScreen()
        } else {
            Power = 0
            basic.showIcon(IconNames.No)
            basic.pause(100)
            basic.clearScreen()
        }
    }
    if ("G0oD" == receivedString) {
        if (Mode == 0) {
            Mode = 1
            basic.showLeds(`
                . . # . .
                . # . # .
                . # . # .
                . . # . .
                . # # # .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            Mode = 0
            basic.showLeds(`
                . # . # .
                # . # . #
                . # # # .
                # . # . #
                . # . # .
                `)
            basic.pause(100)
            basic.clearScreen()
        }
    }
    if ("A1arM" == receivedString) {
        ALARM = 0
        music.stopAllSounds()
        music.stopMelody(MelodyStopOptions.All)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (ALARM == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Alarm1 += 1
        if (Alarm1 == 15) {
            ALARM = 0
        }
    } else {
        ALARM = 0
    }
})
basic.forever(function () {
    if (ALARM == 1) {
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
    } else {
        ALARM = 0
    }
})

ALARM = 0
Mode = 0

def on_gesture_shake():
    global ALARM
    ALARM = 1
    basic.pause(15000)
    ALARM = 0
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global Mode
    if Mode == 0:
        Mode = 1
        basic.show_icon(IconNames.YES)
        basic.pause(100)
        basic.clear_screen()
    else:
        Mode = 0
        basic.show_icon(IconNames.NO)
        basic.pause(100)
        basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_forever():
    if ALARM == 1:
        for index in range(999999):
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
    else:
        pass
basic.forever(on_forever)

def on_forever2():
    if ALARM == 1:
        for index2 in range(999999):
            music.play_tone(659, music.beat(BeatFraction.HALF))
            music.play_tone(587, music.beat(BeatFraction.HALF))
    else:
        pass
basic.forever(on_forever2)

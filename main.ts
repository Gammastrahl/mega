let Mode = 0
input.onButtonPressed(Button.A, function () {
    if (Mode == 0) {
        Mode = 1
    } else {
        if (Mode == 1) {
            Mode = 2
        } else {
            if (Mode == 2) {
                Mode = 3
            } else {
                if (Mode == 3) {
                    Mode = 4
                } else {
                    if (Mode == 4) {
                        Mode = 5
                    } else {
                        if (Mode == 5) {
                            Mode = 6
                        } else {
                            if (Mode == 6) {
                                Mode = 7
                            } else {
                                if (Mode == 7) {
                                    Mode = 2
                                } else {
                                	
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    basic.showNumber(Mode)
    basic.clearScreen()
})

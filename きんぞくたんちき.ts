let ひいたじば = 0
let うごく = 0
let はじめのじば = 0
let val = 0
let じば = 0
input.onButtonPressed(Button.A, function () {
    if (うごく == 0) {
        うごく = 1
    } else {
        うごく = 0
    }
})
// This function was written by a parent
function じばをはかる() {
    じば = Math.sqrt(input.magneticForce(Dimension.X) * input.magneticForce(Dimension.X) + input.magneticForce(Dimension.Y) * input.magneticForce(Dimension.Y) + input.magneticForce(Dimension.Z) * input.magneticForce(Dimension.Z))
    ひいたじば = じば - はじめのじば
}
// This function was written by a parent
function じばのグラフ() {
    val = Math.floor(ひいたじば)
    if (val < 0) {
        led.plot(0, 0)
        val = 0 - val
    } else {
        led.unplot(0, 0)
    }
    if (val > 1295) {
        val = 1295
    }
    if (val < -1295) {
        val = -1295
    }
    for (let x = 0; x <= 4 - 1; x++) {
        for (let y = 0; y <= 6 - 1; y++) {
            if (y < val % 6) {
                led.plot(4 - x, 4 - y)
            } else {
                led.unplot(4 - x, 4 - y)
            }
        }
        val = Math.floor(val / 6)
    }
}
input.onButtonPressed(Button.B, function () {
    じばをはかる()
    はじめのじば = じば
})
input.onButtonPressed(Button.AB, function () {
    じばをはかる()
    じばのグラフ()
})
じばをはかる()
はじめのじば = じば
basic.forever(function () {
    if (うごく == 1) {
        じばをはかる()
        じばのグラフ()
        if (ひいたじば > 500) {
            music.playTone(50, music.beat(BeatFraction.Quarter))
        } else if (ひいたじば > 100) {
            music.playTone(100, music.beat(BeatFraction.Quarter))
        } else if (ひいたじば > 10) {
            music.playTone(200, music.beat(BeatFraction.Quarter))
        }
        if (ひいたじば < -500) {
            music.playTone(1600, music.beat(BeatFraction.Quarter))
        } else if (ひいたじば < -30) {
            music.playTone(800, music.beat(BeatFraction.Quarter))
        } else if (ひいたじば < -7) {
            music.playTone(400, music.beat(BeatFraction.Quarter))
        }
    }
})

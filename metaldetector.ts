let jiba_hiku = 0
let ugoku = 0
let jiba_hajime = 0
let val = 0
let jiba = 0
input.onButtonPressed(Button.A, function () {
    if (ugoku == 0) {
        ugoku = 1
    } else {
        ugoku = 0
    }
})
// This function was writen by a parent
function jiba_hakaru22() {
    jiba = Math.sqrt(input.magneticForce(Dimension.X) * input.magneticForce(Dimension.X) + input.magneticForce(Dimension.Y) * input.magneticForce(Dimension.Y) + input.magneticForce(Dimension.Z) * input.magneticForce(Dimension.Z))
    jiba_hiku = jiba - jiba_hajime
}
// let val = 0 This function was writen by a parent
function displayGraph22() {
    val = Math.floor(jiba_hiku)
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
    jiba_hakaru22()
    jiba_hajime = jiba
})
input.onButtonPressed(Button.AB, function () {
    jiba_hakaru22()
    displayGraph22()
})
jiba_hakaru22()
jiba_hajime = jiba
basic.forever(function () {
    if (ugoku == 1) {
        jiba_hakaru22()
        displayGraph22()
        if (jiba_hiku > 500) {
            music.playTone(50, music.beat(BeatFraction.Quarter))
        } else if (jiba_hiku > 100) {
            music.playTone(100, music.beat(BeatFraction.Quarter))
        } else if (jiba_hiku > 10) {
            music.playTone(200, music.beat(BeatFraction.Quarter))
        }
        if (jiba_hiku < -500) {
            music.playTone(1600, music.beat(BeatFraction.Quarter))
        } else if (jiba_hiku < -30) {
            music.playTone(800, music.beat(BeatFraction.Quarter))
        } else if (jiba_hiku < -7) {
            music.playTone(400, music.beat(BeatFraction.Quarter))
        }
    }
})

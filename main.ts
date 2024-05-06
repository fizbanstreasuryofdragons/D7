basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showNumber(randint(1, 6))
        basic.pause(2000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})

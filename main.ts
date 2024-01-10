let random = 0
let Truth = 0
let Dare = 0
input.onButtonPressed(Button.A, function () {
    random = randint(0, 1)
    if (random == 0) {
        basic.showString("Truth")
        Truth = randint(0, 1)
        if (Truth == 0) {
            basic.showString("your biggest lie?")
        } else {
            basic.showString("who is your best friend?")
        }
    } else if (random == 1) {
        basic.showString("Dare")
        Dare = randint(0, 1)
        if (Dare == 0) {
            basic.showString("yell something silly")
        } else {
            basic.showString("act like celebrity")
        }
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
    basic.pause(2000)
})

input.onButtonPressed(Button.A, function () {
    veces_presionado += 33
    servos.P0.run(veces_presionado)
    servos.P1.run(veces_presionado)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.run(veces_presionado)
    servos.P1.run(veces_presionado)
    veces_presionado = veces_presionado - 33
})
let niveles = 0
let veces_presionado = 0
veces_presionado = 0
basic.forever(function () {
    basic.pause(100)
    if (niveles == 0) {
        basic.showNumber(0)
    } else {
        if (niveles <= 33) {
            basic.showNumber(1)
        } else if (niveles <= 66) {
            basic.showNumber(2)
        } else if (niveles <= 99) {
            basic.showNumber(3)
        }
    }
})
basic.forever(function () {
    if (veces_presionado >= 100) {
        veces_presionado = 100
    }
    if (veces_presionado <= 0) {
        veces_presionado = 0
    }
})
basic.forever(function () {
    basic.pause(100)
    niveles = veces_presionado
})

let tm: grove.TM1637 = null
let _4digit = grove.createDisplay(DigitalPin.P4, DigitalPin.P3)
_4digit.clear()
_4digit.point(true)
_4digit.set(7)
basic.forever(function () {
    servos.P1.setAngle(sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
    control.waitMicros(100)
    servos.P2.setAngle(sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
    control.waitMicros(100)
    _4digit = grove.createDisplay(DigitalPin.P3, DigitalPin.P4)
    _4digit.show(sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ))
    tm = grove.createDisplay(DigitalPin.P2, DigitalPin.P3)
})

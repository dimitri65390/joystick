basic.forever(function () {
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    10,
    170
    ), 0)
})

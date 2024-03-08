serial.writeLine("starting...")
serial.writeLine("Press A to configure pins (P1=SDA, P2=SCL) and write a number")
serial.writeLine("Press B to write a number")
// serial.writeLine("If sensor is NOT connected it should show -Infinity (for temp) and an error message")
input.onButtonPressed(Button.A, function () {
    if(powerUtils.usbPower()) {
        basic.showString("USB")

    } else {
        basic.showString("Batt")
    }
    basic.showNumber(powerUtils.powerConsumption())
})
input.onButtonPressed(Button.B, function () {
})

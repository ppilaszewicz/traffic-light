// Pin 0 is Red
// Pin 1 is Green
// Turns on the Lights when A is pressed. 
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
// Turns Off
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.forever(function () {
	
})

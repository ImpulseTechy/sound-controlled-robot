basic.forever(function () {
    if (input.soundLevel() > 90) {
        MotorDriver.MotorRun(Motor.A, Dir.backward, 10)
        MotorDriver.MotorRun(Motor.B, Dir.backward, 10)
    } else {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
    }
})

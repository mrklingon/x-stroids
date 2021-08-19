controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    fire = 40
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = direction - 1
    if (direction < 0) {
        direction = direction + 8
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = direction + 1
    if (direction > 8) {
        direction = direction - 8
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    fire = 0
})
let direction = 0
let fire = 0
fire = 0
let Xwing = [
assets.image`myImage`,
assets.image`myImage4`,
assets.image`myImage0`,
assets.image`myImage5`,
assets.image`myImage1`,
assets.image`myImage6`,
assets.image`myImage2`,
assets.image`myImage3`
]
let XWing = sprites.create(Xwing[0], SpriteKind.Player)
XWing.setStayInScreen(true)
direction = 0
let xvel = [
50,
25,
0,
-25,
-50,
-25,
0,
25
]
scene.setBackgroundColor(8)
effects.starField.startScreenEffect()
let yvel = [
0,
25,
50,
25,
0,
-25,
-50,
-25
]
let bounce = [
4,
5,
6,
7,
0,
1,
2,
3
]
game.onUpdate(function () {
    XWing.setImage(Xwing[direction])
    if (fire > 0) {
        XWing.setVelocity(xvel[direction], yvel[direction])
        fire += -1
    } else {
        XWing.setVelocity(0, 0)
    }
})

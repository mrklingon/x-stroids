namespace SpriteKind {
    export const rock = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    fire = 40
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.magicWand.playUntilDone()
    XWing.setPosition(randint(0, 160), randint(0, 120))
})
sprites.onOverlap(SpriteKind.rock, SpriteKind.rock, function (sprite, otherSprite) {
    music.knock.play()
    sprite.destroy()
    newAsteroid()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    lbolt = sprites.create(laser[direction], SpriteKind.Projectile)
    music.pewPew.play()
    lbolt.setPosition(XWing.x, XWing.y)
    lbolt.setVelocity(xvel[direction] * 10, yvel[direction] * 10)
    lbolt.setFlag(SpriteFlag.AutoDestroy, true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = direction - 1
    if (direction < 0) {
        direction = direction + 8
    }
})
sprites.onOverlap(SpriteKind.rock, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    music.knock.play()
    newAsteroid()
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.rock, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    otherSprite.destroy()
    newAsteroid()
})
function newAsteroid () {
    asteroid = sprites.create(Asts[randint(0, 3)], SpriteKind.rock)
    asteroid.setPosition(randint(0, 160), randint(0, 120))
    asteroid.setVelocity(randint(0, 65), randint(0, 65))
    asteroid.setBounceOnWall(true)
}
let lbolt: Sprite = null
let yvel: number[] = []
let xvel: number[] = []
let direction = 0
let XWing: Sprite = null
let laser: Image[] = []
let asteroid: Sprite = null
let Asts: Image[] = []
let fire = 0
fire = 0
game.splash("Pilot your X-Wing through the asteroids")
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
Asts = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . f f f . . . . 
    . . . . . . f f f f c f . . . . 
    . . . . . f f c c c c f f f f . 
    . . . . . f c c c c c c c c f . 
    . . . f f f c c c c c c c c f . 
    . . . f c c c c c c c c c c f . 
    . . . f f c c c f f c c c c f . 
    . . . . f f c c f f f c c c f f 
    . . . . . f f c f . f f c c c f 
    . . . . . . f f f . . f c f f f 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c . . . . . . . 
    . . . . . . c c 1 c . . . . . . 
    . . . c c c c 1 1 1 c c . . . . 
    . . c c 1 1 1 1 1 1 1 5 c . . . 
    . . c c 1 1 1 1 1 1 5 5 c c . . 
    . . c 1 1 1 1 1 1 1 5 1 1 c . . 
    . . c c 5 5 5 5 5 1 1 1 1 c . . 
    . . . c 1 1 5 5 1 1 1 1 c . . . 
    . . . c c 1 1 1 c c c c . . . . 
    . . . . c c 1 c c 7 7 7 c c . . 
    . . . . . c 1 1 1 5 7 7 7 c c . 
    . . . . . c c 1 1 1 5 7 c . c . 
    . . . . . . c c 1 1 5 5 1 c . . 
    . . . . . . . . c c 1 5 c c . . 
    . . . . . . . . . . c c . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e e e e . . . 
    . . . . . e e b b b b b e e e . 
    . . . e e e b b b b b b b b b e 
    . . . e b b b b b b b b b f f e 
    . . e e b b b b b b b b f b b e 
    . . e b b b b f f b b b b b b e 
    . . e b b b b b f f f b b b b e 
    . . e b b b b b b b f b b b b e 
    . . e e b b b b b b f f b b b e 
    . . . e e b b b b b b f f b b e 
    . . . . e e b b b b b b e e e e 
    . . . . . e e e e e e e e . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . d d d d f f d d . . . . . 
    . . d f f f f f f f d d d . . . 
    . . d d f f f f f f f f d d . . 
    . . d d f f f f f f f f d d d . 
    . d f f f f f f f f f f f f d . 
    . d f f f f f f f f f f f f d . 
    . d d f f f f f f d f f f f d . 
    . . d d d f f f f d f f f d . . 
    . . . . . d d d d d f f f d . . 
    . . . . . d d d . . d d f d . . 
    . . . . . . . . . . d d d . . . 
    . . . . . . . . . . . . d . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
for (let index = 0; index <= 3; index++) {
    asteroid = sprites.create(Asts[randint(0, 3)], SpriteKind.rock)
    asteroid.setPosition(randint(0, 160), randint(0, 120))
    asteroid.setVelocity(randint(0, 65), randint(0, 65))
    asteroid.setBounceOnWall(true)
}
info.setLife(10)
laser = [
assets.image`l1`,
assets.image`myImage8`,
assets.image`l2`,
assets.image`myImage7`,
assets.image`l1`,
assets.image`myImage8`,
assets.image`l2`,
assets.image`myImage7`
]
XWing = sprites.create(Xwing[0], SpriteKind.Player)
XWing.setStayInScreen(true)
direction = 0
xvel = [
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
yvel = [
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
    } else {
        fire += -1
        XWing.setVelocity(0, 0)
    }
})

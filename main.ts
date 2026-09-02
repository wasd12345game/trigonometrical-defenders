scene.onPathCompletion(SpriteKind.Enemy, function (sprite, location) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myWall`)) {
        if (true) {
        	
        }
    } else {
        Notification.notify("Can't place here!")
        pause(500)
        Notification.cancelNotification()
    }
})
let plus: Sprite = null
let mySprite: Sprite = null
info.setLife(1000)
info.setScore(50)
tiles.setCurrentTilemap(tilemap`level`)
let locationTiles = scene.aStar(tiles.getTileLocation(1, 0), tiles.getTileLocation(6, 3))
mySprite = sprites.create(assets.image`cursor`, SpriteKind.Player)
grid.place(mySprite, tiles.getTileLocation(1, 0))
grid.moveWithButtons(mySprite)
game.onUpdateInterval(1500, function () {
    plus = sprites.create(assets.image`plus`, SpriteKind.Enemy)
    tiles.placeOnTile(plus, tiles.getTileLocation(1, 0))
    scene.followPath(plus, locationTiles)
})

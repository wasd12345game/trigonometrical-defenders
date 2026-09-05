namespace SpriteKind {
    export const Sine = SpriteKind.create()
}
scene.onPathCompletion(SpriteKind.Enemy, function (sprite, location) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == 2) {
        toolbar.set_number(ToolbarNumberAttribute.SelectedIndex, 0)
    } else {
        toolbar.change_number(ToolbarNumberAttribute.SelectedIndex, 1)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myWall`)) {
        if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == 0) {
            if (info.score() >= 25) {
                myTower = sprites.create(toolbar.get_items()[toolbar.get_number(ToolbarNumberAttribute.SelectedIndex)].get_image(), SpriteKind.Sine)
                grid.place(myTower, grid.getLocation(mySprite))
            } else {
                Notification.notify("Not enough money!", 5)
                pause(100)
                Notification.cancelNotification()
            }
        } else if (toolbar.get_number(ToolbarNumberAttribute.SelectedIndex) == 1) {
        	
        } else {
        	
        }
    } else {
    	
    }
    Notification.notify("Can't place here!", 5)
    pause(100)
    Notification.cancelNotification()
})
function createItems () {
    item = Inventory.create_item("Sine Tower", assets.image`sine`)
    item2 = Inventory.create_item("Cosine Tower", assets.image`cosine`)
    item3 = Inventory.create_item("Universal Tower", assets.image`univ`)
    toolbar = Inventory.create_toolbar([item, item2, item3], 3)
    toolbar.setPosition(35, 105)
}
let angle = 0
let proj: Sprite = null
let dist = 0
let shortestDistance = 0
let closestEnemy: Sprite = null
let plus: Sprite = null
let item3: Inventory.Item = null
let item2: Inventory.Item = null
let item: Inventory.Item = null
let myTower: Sprite = null
let toolbar: Inventory.Toolbar = null
let mySprite: Sprite = null
info.setLife(1000)
info.setScore(50)
tiles.setCurrentTilemap(tilemap`level`)
let locationTiles = scene.aStar(tiles.getTileLocation(1, 0), tiles.getTileLocation(6, 3))
mySprite = sprites.create(assets.image`cursor`, SpriteKind.Player)
grid.place(mySprite, tiles.getTileLocation(1, 0))
grid.moveWithButtons(mySprite)
createItems()
game.onUpdateInterval(1500, function () {
    plus = sprites.create(assets.image`plus`, SpriteKind.Enemy)
    tiles.placeOnTile(plus, tiles.getTileLocation(1, 0))
    scene.followPath(plus, locationTiles)
})
game.onUpdateInterval(500, function () {
    for (let value of sprites.allOfKind(SpriteKind.Sine)) {
        closestEnemy = spriteutils.nullConsts(spriteutils.NullConsts.Null)
        shortestDistance = 999999
        for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
            dist = spriteutils.distanceBetween(value, value2)
            if (dist < shortestDistance) {
                shortestDistance = dist
                closestEnemy = value2
            }
        }
        if (closestEnemy && shortestDistance <= 80) {
            proj = sprites.create(assets.image`projectile`, SpriteKind.Projectile)
            proj.setFlag(SpriteFlag.GhostThroughWalls, true)
            proj.setPosition(value.x, value.y)
        }
        angle = spriteutils.angleFrom(value, closestEnemy)
        spriteutils.setVelocityAtAngle(proj, angle, 120)
    }
})

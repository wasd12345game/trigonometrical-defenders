// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`0a0008000102010101010101010101020102020202020201010201020101010102010102010201020201020101020102010201010201010201020102010102010102020201020202020101010101010101010101`, img`
2 . 2 2 2 2 2 2 2 2 
2 . 2 . . . . . . 2 
2 . 2 . 2 2 2 2 . 2 
2 . 2 . 2 . . 2 . 2 
2 . 2 . 2 . 2 2 . 2 
2 . 2 . 2 . 2 2 . 2 
2 . . . 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myWall":
            case "tile1":return tile1;
            case "myPath":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

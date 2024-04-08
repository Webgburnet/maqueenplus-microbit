radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
    	
    } else if (receivedString == "B") {
    	
    } else if (receivedString == "Z") {
    	
    } else if (receivedString == "Rouge") {
        maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Red)
    } else if (receivedString == "Vert") {
        maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Green)
    } else if (receivedString == "Bleu") {
        maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Blue)
    } else if (receivedString == "Jaune") {
        maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Yellow)
    }
})
radio.onReceivedValue(function (name, value) {
	
})
radio.setGroup(250)
maqueenPlusV2.I2CInit()
maqueenPlusV2.setBrightness(100)
basic.forever(function () {
	
})

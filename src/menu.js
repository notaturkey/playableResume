import Phaser from 'phaser';

import bg1 from './assets/background/bg1.png';
import bg2 from './assets/background/bg2.png';

class Button {
    constructor(x, y, label, scene, callback, callback2) {
        this.isDown = false
        const button = scene.add.text(x, y, label)
            .setOrigin(0.0)
            .setPadding(10)
            .setStyle({ backgroundColor: '#031f4c', font: 'bold 60px Arial' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: '#000' }))
            .on('pointerout', () => {
                button.setStyle({ fill: '#FFF' })
                scene.isRunning = false
            });
    }
}

export default class MainMenu extends Phaser.Scene {
    constructor () {
        super('mainmenu');
    }

    preload () {
        this.load.image('bg1', bg1);
        this.load.image('bg2', bg2);
    }
    
    create () {
        
        this.mappos = 450;
        this.bg1 = this.add.image(this.mappos,600, 'bg1');
        this.bg1.scale = 2
        this.bg2 = this.add.image(this.mappos,210, 'bg2');
        this.bg2.scale = 2

        this.label = this.add.text(40, 40, '', {font: 'bold 40px Arial', fill: 'white', align: 'center', wordWrap: { width: 760, useAdvancedWrap: true } });
        this.typewriteText("Welcome To Thomas's Interactive Resume!");
        //this.button = new Button(275, 800, 'START', this, () => this.clicked());


    }

    clicked() {
        this.scene.start("game");
    }
  
    update() {
        if (!this.isTyping){
            this.button = new Button(275, 800, 'START', this, () => this.clicked());
        }  
    }

    typewriteText(text) {
	    const length = text.length
	    let i = 0
        this.isTyping = true
	    this.time.addEvent({
		    callback: () => {
		        this.label.text += text[i]
			    ++i
                if (i == length){
                    this.isTyping = false
                }
	        },
		    repeat: length-1,
		    delay: 50
        })
    }
};

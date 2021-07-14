import Phaser from 'phaser';

class Button {
    constructor(x, y, label, scene, callback, callback2) {
        this.isDown = false
        const button = scene.add.text(x, y, label)
            .setOrigin(0.0)
            .setPadding(10)
            .setStyle({ backgroundColor: '#000' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))
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
    }
    
    create () {
        this.button = new Button(350, 500, 'START', this, () => this.clicked());
    }

    clicked() {
        this.scene.start("game");
    }
  
    update() {  
    }
};

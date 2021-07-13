import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import bg1 from './assets/background/bg1.png';
import bg2 from './assets/background/bg2.png';
import bg3 from './assets/background/bg3.png';
import bg4 from './assets/background/bg4.png';
import bg5 from './assets/background/bg5.png';
import bg6 from './assets/background/bg6.png';
import bg7 from './assets/background/bg7.png';
import bg8 from './assets/background/bg8.png';
import bg9 from './assets/background/bg9.png';
import bg10 from './assets/background/bg10.png';
import bg11 from './assets/background/bg11.png';

import idle from './assets/player/idle.png';
import run from './assets/player/run.png';
import attack from './assets/player/attack.png';

class Button {
    constructor(x, y, label, scene, callback, callback2) {
        this.isDown = false
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerup', ()=> callback2())
            .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => {
                button.setStyle({ fill: '#FFF' })
                scene.isRunning = false
                scene.player.play('idle');
            });
    }
}

class AttackButton {
    constructor(x, y, label, scene, callback, callback2) {
        this.isDown = false
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerup', ()=> callback2())
            .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => {
                button.setStyle({ fill: '#FFF' })
                scene.isRunning = false
                //scene.player.play('idle');
            });
    }
}

export default class Game extends Phaser.Scene {
    constructor ()
    {
        super('game');
    }

    preload ()
    {
        this.load.image('logo', logoImg);
        this.load.image('bg1', bg1);
        this.load.image('bg2', bg2);
        this.load.image('bg3', bg3);
        this.load.image('bg4', bg4);
        this.load.image('bg5', bg5);
        this.load.image('bg6', bg6);
        this.load.image('bg7', bg7);
        this.load.image('bg8', bg8);
        this.load.image('bg9', bg9);
        this.load.image('bg10', bg10);
        this.load.image('bg11', bg11);
        this.load.spritesheet('idle', idle, { frameWidth: 126, frameHeight: 39 });
        this.load.spritesheet('run', run, { frameWidth: 126, frameHeight: 39 });
        this.load.spritesheet('attack', attack, { frameWidth: 126, frameHeight: 39 });
    }

    create ()
    {
        //const logo = this.add.image(400, 150, 'logo');

        //this.tweens.add({
        //    targets: logo,
        //    y: 450,
        //    duration: 2000,
        //    ease: "Power2",
        //    yoyo: true,
        //    loop: -1
        //});
        this.mappos = 450;
        this.mappos2 = 914;
        this.bg1 = this.add.image(this.mappos,397, 'bg1');
        this.bg21 = this.add.image(this.mappos2,397, 'bg1');
        this.bg2 = this.add.image(this.mappos,397, 'bg2');
        this.bg22 = this.add.image(this.mappos2,397, 'bg2');
        this.bg3 = this.add.image(this.mappos,397, 'bg3');
        this.bg23 = this.add.image(this.mappos2,397, 'bg3');
        this.bg4 = this.add.image(this.mappos,397, 'bg4');
        this.bg24 = this.add.image(this.mappos2,397, 'bg4');
        this.bg5 = this.add.image(this.mappos,397, 'bg5');
        this.bg25 = this.add.image(this.mappos2,397, 'bg5');
        this.bg6 = this.add.image(this.mappos,397, 'bg6');
        this.bg26 = this.add.image(this.mappos2,397, 'bg6');
        this.bg7 = this.add.image(this.mappos,397, 'bg7');
        this.bg27 = this.add.image(this.mappos2,397, 'bg7');
        this.bg8 = this.add.image(this.mappos,397, 'bg8');
        this.bg28 = this.add.image(this.mappos2,397, 'bg8');
        this.bg9 = this.add.image(this.mappos,397, 'bg9');
        this.bg29 = this.add.image(this.mappos2,397, 'bg9');
        this.bg10 = this.add.image(this.mappos,397, 'bg10');
        this.bg210 = this.add.image(this.mappos2,397, 'bg10');
        
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('idle', { frames: [0,1,2,3,4] }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('run', { frames: [0,1,2,3,4,5,6,7] }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('attack', { frames: [0,1,2,3,4,5,6,7] }),
            frameRate: 8,
            repeat: -1
        });

        this.player = this.physics.add.sprite(100, 793);
        this.player.play('idle')
        this.player.debugShowVelocity;
        this.player.setOffset(50, 1);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.setVelocity(0);
        
        this.bg11 = this.add.image(450,397, 'bg11');
        this.bg211 = this.add.image(this.mappos2,397, 'bg11');
        //player.setGravityY(100);
        this.cameras.main.setBounds(0, 0, 928, 793);
        this.physics.world.setBounds(0, 0, 928, 743);
        this.cameras.main.centerOn(this.player.x, this.player.y);
        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
        
        
        //this.cameras.main.setZoom(2);
        this.cameras.main.setZoom(2);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.pointer = this.input.activePointer;
        
        // Then later in one of your scenes, create a new button:
        this.isRunning = false
        this.isAttacking = false

        this.button = new Button(300, 750, 'Run', this, () => this.runDown(), () => this.runUp());
        this.button = new AttackButton(200, 750, 'Attack', this, () => this.attack(), ()=>{});
        //adding some debug text that displays to the camera position instead of world position
        this.debug = this.add.text(300, 600, '').setOrigin(0.5);
        this.debug.setScrollFactor(0,0);
    }

    attack(){

        if (!this.isAttacking){
            this.isAttacking = true
            this.player.play('attack');
            console.log('playerAttacked');
            this.time.addEvent({
                delay: 1000, // in ms
                callback: () => {
                    this.isAttacking = false
                    this.runUp();
                }
            })
            
        }
    }

    //button works yay
    runDown(){
        this.isRunning = true;
        this.player.play('run');
    }

    runUp(){
        this.isRunning = false;
        this.player.play('idle');
    }

    swapChunks(one,two){
        if(one.x <= -464 ){
            one.x = two.x + 928;
        }
        if(two.x <= -464 ){
            two.x = one.x + 928;
        }
    }

    //the dumbest chunk system the world has ever seen ;)
    update()
    {
        this.swapChunks(this.bg1, this.bg21);
        this.swapChunks(this.bg2, this.bg22);
        this.swapChunks(this.bg3, this.bg23);
        this.swapChunks(this.bg4, this.bg24);
        this.swapChunks(this.bg5, this.bg25);
        this.swapChunks(this.bg6, this.bg26);
        this.swapChunks(this.bg7, this.bg27);
        this.swapChunks(this.bg8, this.bg28);
        this.swapChunks(this.bg9, this.bg29);
        this.swapChunks(this.bg10, this.bg210);
        this.swapChunks(this.bg11, this.bg211);
    
        if(this.isRunning){
            this.bg1.x -= 0.1;
            this.bg2.x -= 0.2;
            this.bg3.x -= 0.3;
            this.bg4.x -= .5;
            this.bg5.x -= .6;
            this.bg6.x -= .7;
            this.bg7.x -= .8;
            this.bg8.x -= 1.6;
            this.bg9.x -= 1.7;
            this.bg10.x -= 1.8;
            this.bg11.x -= 2;

            this.bg22.x -= 0.2;
            this.bg23.x -= 0.3;
            this.bg24.x -= .5;
            this.bg25.x -= .6;
            this.bg26.x -= .7;
            this.bg27.x -= .8;
            this.bg28.x -= 1.6;
            this.bg29.x -= 1.7;
            this.bg210.x -= 1.8;
            this.bg211.x -=2;
        }
        else {
            true;
        }
        this.debug.setText(['x:'+this.bg11.x ,'y:'+this.bg11.y]);
    }
}

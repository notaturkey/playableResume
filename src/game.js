import Phaser from 'phaser';
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
import bug from './assets/player/bug.png';

class Button {
    constructor(x, y, label, scene, callback, callback2) {
        this.isDown = false
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#031f4c' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerup', ()=> callback2())
            .on('pointerover', () => button.setStyle({ fill: '#000' }))
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
            .setStyle({ backgroundColor: '#031f4c' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerup', ()=> callback2())
            .on('pointerover', () => button.setStyle({ fill: '#000' }))
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

        this.load.image('bug',bug);
    }

    create ()
    {
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

        this.player = this.physics.add.sprite(100, 730);
        this.player.play('idle')
        this.player.debugShowVelocity;
        this.player.setOffset(50, 1);
        this.player.setBounce(0.2);
        //this.player.setCollideWorldBounds(true);
        this.player.setVelocity(0);

        this.bug = this.physics.add.image(700, 730, 'bug')
        this.bug.debugShowVelocity;
        //this.bug.setOffset(50, 1);
        this.bug.setBounce(0.2);
        //this.bug.setCollideWorldBounds(true);
        this.bug.setVelocity(0);
        //this.bug.setImmovable(true);
        this.bugUp = true;


        this.box = this.physics.add.sprite(500, 730);
        this.box.debugShowVelocity;
        this.box.setVelocity(0);
        this.player.setOffset(50, 1);

        this.playerBlocked = false
        this.physics.add.collider(this.player, this.box, () => {
            this.box.destroy();
            this.playerBlocked = true;
            this.fighting();

            this.textBox("Oh No! You've encountered a poorly drawn bug!");
            

            this.button = new AttackButton(300,750,'Ok', this, () => { 
                    if (!this.isTyping) {
                        console.log("hit")
                        this.textBoxDestroy();
                    }
                }, ()=>{});
        });

        this.bg11 = this.add.image(450,397, 'bg11');
        this.bg211 = this.add.image(this.mappos2,397, 'bg11');
        //player.setGravityY(100);
        this.cameras.main.setBounds(0, 0, 928, 793);
        this.physics.world.setBounds(0, 0, 928, 900);
        this.cameras.main.centerOn(this.player.x, this.player.y);
        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);


        //this.cameras.main.setZoom(2);
        this.cameras.main.setZoom(2);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.pointer = this.input.activePointer;

        // Then later in one of your scenes, create a new button:
        this.isRunning = false
        this.isAttacking = false

        //adding some debug text that displays to the camera position instead of world position
        this.debug = this.add.text(300, 600, '').setOrigin(0.5);
        this.debug.setScrollFactor(0,0);
        this.isTyping = false
        this.textBox("You are Thomas McDonald, a young developer fresh out of the University of Colorado at Colorado Springs ready to fight Bugs!")
        this.button = new Button(300, 750, 'Run', this, () => this.runDown(), () => this.runUp());
        //this.button = new AttackButton(200, 750, 'Attack', this, () => this.attack(), ()=>{});

        this.button = new AttackButton(300,750,'Ok', this, () => {
            if (!this.isTyping) {
                this.textBoxDestroy();
                this.button = new Button(300, 750, 'Run', this, () => this.runDown(), () => this.runUp());
                this.button = new AttackButton(200, 750, 'Attack', this, () => this.attack(), ()=>{});
            }
        }, ()=>{});
        
    }

    fighting(){
      this.playerBox()
      this.enemyBox()
    }

    notFighting(){
      this.playerName.destroy()
      this.playerStats.destroy()
      this.playerGraphics.destroy()
      this.enemyName.destroy()
      this.enemyStats.destroy()
      this.enemyGraphics.destroy()
    }

    playerBox(){
      this.playerGraphics = this.add.graphics();
      this.playerGraphics.lineStyle(1, 0xffffff);
      this.playerGraphics.fillStyle(0x031f4c, 1);
      this.playerGraphics.strokeRect(50, 350, 100, 200);
      this.playerGraphics.fillRect(50, 350, 100, 200);
      this.playerName = this.add.text(60, 360, 'Thomas', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });
      this.playerStats = this.add.text(60, 370, 'HP:0\nLevel:0\nStatus:0\nDescription: \ndumb', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });

    }

    enemyBox(){
      this.enemyGraphics = this.add.graphics();
      this.enemyGraphics.lineStyle(1, 0xffffff);
      this.enemyGraphics.fillStyle(0x031f4c, 1);
      this.enemyGraphics.strokeRect(250, 350, 100, 200);
      this.enemyGraphics.fillRect(250, 350, 100, 200);

      this.enemyName = this.add.text(260, 360, 'Enemy', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });
      this.enemyStats = this.add.text(260, 370, 'HP:0\nLevel:0\nStatus:0\nah', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });

    }

    textBox(str){
      this.graphics = this.add.graphics();
      this.graphics.lineStyle(1, 0xffffff);
      this.graphics.fillStyle(0x031f4c, 1);
      this.graphics.strokeRect(50, 650, 300, 50);
      this.graphics.fillRect(50, 650, 300, 50);

      this.label = this.add.text(60, 660, '', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });
      this.typewriteText(str);
    }

    newText(str){
        if (!this.isTyping){
            this.label.text = ""
            this.typewriteText(str)
        }
    }

    textBoxDestroy() {
        if (!this.isTyping) {
            this.graphics.destroy()
            this.label.destroy()
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

    attack(){
        if (!this.isAttacking){
            this.isAttacking = true
            this.player.play('attack');
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
        
        if (this.bugUp && this.bug.y < 710 ){ 
            this.bugUp = false;
        }
        else if (!this.bugUp && this.bug.y > 740){
            this.bugUp = true;
        }

        if (this.bugUp){
            this.bug.y -= 0.1;
        }
        else{
            this.bug.y += 0.1;
        }
        

        //this.physics.arcade.collide(this.player, this.bug);
        //this.physics.arcade.collide(this.player, this.bug);
        if(this.isRunning && !this.playerBlocked){
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

            this.bug.x -=2;

            this.box.x -=2;
        }
        else {
            true;
        }
        this.debug.setText(['x:'+this.bg11.x ,'y:'+this.bg11.y]);
        
        
    }
}

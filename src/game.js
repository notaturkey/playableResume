import Phaser from 'phaser';
import * as helper from './gameHelper' ;
import * as bugFight1 from './firstBug';
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

export default class Game extends Phaser.Scene {
    constructor (){
        super('game');
    }

    preload (){
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

    create (){
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

        //Player
        this.player = this.physics.add.sprite(100, 730);
        this.player.play('idle');
        this.player.setOffset(50, 1);
        this.player.setBounce(0.2);
        this.player.setVelocity(0);
        this.playerBlocked = false


        //Bug 1
        this.bug = this.physics.add.image(700, 730, 'bug');
        this.bug.setBounce(0.2);
        this.bug.setVelocity(0);
        this.bugUp = true;
        this.enemyHealth = 100;

        //Collision Box
        this.box = this.physics.add.sprite(500, 730);
        this.box.setVelocity(0);

        //On Collision
        this.physics.add.collider(this.player, this.box, () => {
            bugFight1.startFirstBug(this);
        });

        this.bg11 = this.add.image(450,397, 'bg11');
        this.bg211 = this.add.image(this.mappos2,397, 'bg11');

        //Camera
        this.cameras.main.setBounds(0, 0, 928, 793);
        this.cameras.main.centerOn(this.player.x, this.player.y);
        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
        this.cameras.main.setZoom(2);

        this.pointer = this.input.activePointer;


        //adding some debug text that displays to the camera position instead of world position
        //this.debug = this.add.text(300, 600, '').setOrigin(0.5);
        //this.debug.setScrollFactor(0,0);

        // game states
        this.isRunning = false;
        this.isAttacking = false;
        this.isTyping = false;

        helper.textBox(this,"Here is Thomas McDonald, a young developer fresh out of college with some skills under his belt to fight some bugs!");
        this.runButton = new helper.Button(300, 750, 'Run', this, () => this.runDown(), () => this.runUp());
        //this.button = new AttackButton(200, 750, 'Attack', this, () => this.attack(), ()=>{});

        this.button = new helper.AttackButton(300,750,'Ok', this, () => {
            if (!this.isTyping) {
                helper.textBoxDestroy(this);
                this.button.destroy();
                //this.button = new AttackButton(200, 750, 'Attack', this, () => this.attack(), ()=>{});
            }
        }, ()=>{});

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
    }
}

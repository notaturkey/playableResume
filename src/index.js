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

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
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

        this.bg1 = this.add.image(464,397, 'bg1');
        this.bg2 = this.add.image(464,397, 'bg2');
        this.bg3 = this.add.image(464,397, 'bg3');
        this.bg4 = this.add.image(464,397, 'bg4');
        this.bg5 = this.add.image(464,397, 'bg5');
        this.bg6 = this.add.image(464,397, 'bg6');
        this.bg7 = this.add.image(464,397, 'bg7');
        this.bg8 = this.add.image(464,397, 'bg8');
        this.bg9 = this.add.image(464,397, 'bg9');
        this.bg10 = this.add.image(464,397, 'bg10');

        this.bg11 = this.add.image(928,397, 'bg1');
        this.bg22 = this.add.image(928,397, 'bg2');
        this.bg33 = this.add.image(928,397, 'bg3');
        this.bg44 = this.add.image(928,397, 'bg4');
        this.bg55 = this.add.image(928,397, 'bg5');
        this.bg66 = this.add.image(928,397, 'bg6');
        this.bg77 = this.add.image(928,397, 'bg7');
        this.bg88 = this.add.image(928,397, 'bg8');
        this.bg99 = this.add.image(928,397, 'bg9');
        this.bg1010 = this.add.image(928,397, 'bg10');


        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('idle', { frames: [0,1,2,3,4] }),
            frameRate: 8,
            repeat: -1
        });

        this.player = this.physics.add.sprite(0, 793);
        this.player.play('idle')
        this.player.debugShowVelocity;
        this.player.setOffset(50, 1);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        //player.setGravityY(100);
        this.bg11 = this.add.image(464,397, 'bg11');
        this.cameras.main.setBounds(0, 0, 928, 793);
        this.physics.world.setBounds(0, 0, 928, 743);
        this.cameras.main.centerOn(this.player.x, this.player.y);
        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
        this.cameras.main.setZoom(2);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update()
    {
        this.player.setVelocity(0);
        if (this.cursors.left.isDown){
          this.bg1.x += 0.1
          this.bg2.x += 0.2
          this.bg3.x += 0.3
          this.bg4.x += .5
          this.bg5.x += .6
          this.bg6.x += .7
          this.bg7.x += .8
          this.bg8.x += 1.6
          this.bg9.x += 1.7
          this.bg10.x += 1.8
          this.bg11.x += 2
        }
        else if (this.cursors.right.isDown){
          this.bg1.x -= 0.1
          this.bg2.x -= 0.2
          this.bg3.x -= 0.3
          this.bg4.x -= .5
          this.bg5.x -= .6
          this.bg6.x -= .7
          this.bg7.x -= .8
          this.bg8.x -= 1.6
          this.bg9.x -= 1.7
          this.bg10.x -= 1.8
          this.bg11.x -= 2

          console.log(this.bg11.x)
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        debug:true,
        }
    },
    scene: MyGame
};

const game = new Phaser.Game(config);

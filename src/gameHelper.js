class Button {
    constructor(x, y, label, scene, callback, callback2) {
        scene.isDown = false
        this.button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#031f4c' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerup', ()=> callback2())
            .on('pointerover', () => this.button.setStyle({ fill: '#000' }))
            .on('pointerout', () => {
                this.button.setStyle({ fill: '#FFF' })
                scene.isRunning = false
                scene.player.play('idle');
            });
    }
    destroy(){
        this.button.destroy();
    }
}

class AttackButton {
    constructor(x, y, label, scene, callback, callback2) {
        scene.isDown = false
        this.button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#031f4c' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerup', ()=> callback2())
            .on('pointerover', () => this.button.setStyle({ fill: '#000' }))
            .on('pointerout', () => {
                this.button.setStyle({ fill: '#FFF' })
                scene.isRunning = false
                //scene.player.play('idle');
            });
    }

    destroy(){
        this.button.destroy();
    }
}


function fighting(scene){
    playerBox(scene);
    enemyBox(scene);
}

function notFighting(scene){
    scene.playerName.destroy();
    scene.playerStats.destroy();
    scene.playerGraphics.destroy();
    scene.enemyName.destroy();
    scene.enemyStats.destroy();
    scene.enemyGraphics.destroy();
}

function playerBox(scene){
    scene.playerGraphics = scene.add.graphics();
    scene.playerGraphics.lineStyle(1, 0xffffff);
    scene.playerGraphics.fillStyle(0x031f4c, 1);
    scene.playerGraphics.strokeRect(50, 350, 100, 200);
    scene.playerGraphics.fillRect(50, 350, 100, 200);
    scene.playerName = scene.add.text(60, 360, 'Thomas', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });
    scene.playerStats = scene.add.text(60, 370, 'HP:100/100\nLevel:0\nStatus:\n---caffeinated\nDescription: \n---UCCS Graduate', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });
}

function enemyBox(scene){
    scene.enemyGraphics = scene.add.graphics();
    scene.enemyGraphics.lineStyle(1, 0xffffff);
    scene.enemyGraphics.fillStyle(0x031f4c, 1);
    scene.enemyGraphics.strokeRect(250, 350, 100, 200);
    scene.enemyGraphics.fillRect(250, 350, 100, 200);
    scene.enemyName = scene.add.text(260, 360, 'Enemy', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });
    scene.enemyStats = scene.add.text(260, 370, 'HP:'+scene.enemyHealth+'/100\nLevel:0\nStatus:\n---Poorly Drawn\nDescription:\n---This guy pops\n---up alot.', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });

}

function textBox(scene, str){
    scene.graphics = scene.add.graphics();
    scene.graphics.lineStyle(1, 0xffffff);
    scene.graphics.fillStyle(0x031f4c, 1);
    scene.graphics.strokeRect(50, 650, 300, 50);
    scene.graphics.fillRect(50, 650, 300, 50);

    scene.label = scene.add.text(60, 660, '', {font: 'bold 10px Arial', fill: 'white', align: 'left', wordWrap: { width: 275, useAdvancedWrap: true } });
    typewriteText(scene,str);
}

function newText(scene, str){
      if (!scene.isTyping){
          scene.label.text = "";
          typewriteText(scene,str);
      }
}

function textBoxDestroy(scene) {
      if (!scene.isTyping) {
          scene.graphics.destroy();
          scene.label.destroy();
      }
  }

function typewriteText(scene,text) {
    const length = text.length;
    let i = 0;
    scene.isTyping = true;
    scene.time.addEvent({
        callback: () => {
            scene.label.text += text[i];
            scene.isTyping = true;
            ++i;
            if (i == length){
                scene.isTyping = false;
            }
        },
        repeat: length-1,
        delay: 50
    })
}

function attack(scene){
    if (!scene.isAttacking){
        scene.isAttacking = true;
        scene.player.play('attack');
        scene.time.addEvent({
            delay: 1000, // in ms
            callback: () => {
                scene.isAttacking = false;
                scene.runUp();
            }
        })
    }
}

module.exports = {
  Button,
  AttackButton,
  fighting,
  notFighting,
  playerBox,
  enemyBox,
  textBox,
  newText,
  textBoxDestroy,
  typewriteText,
  attack
}

// this file will boot the main game with all the scenes 
import Phaser from 'phaser';
import MainMenu from './menu.js';
import Game from './game.js';


const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example', 
  width: 800,
  height: 1000,
  scale: {
      mode: Phaser.Scale.FIT  
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug:true,
      }
  },
  scene: [MainMenu, Game]
};

const game = new Phaser.Game(config);
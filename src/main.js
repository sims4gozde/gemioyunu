import Phaser from 'phaser';
import { BootScene } from './scenes/BootScene.js';
import { BeachScene } from './scenes/BeachScene.js';
import { ShipScene } from './scenes/ShipScene.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#0d1b2a',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
  },
  physics: {
    default: 'arcade',
    arcade: { debug: false },
  },
  scene: [BootScene, BeachScene, ShipScene],
};

new Phaser.Game(config);

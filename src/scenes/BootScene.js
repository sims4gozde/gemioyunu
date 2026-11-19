import Phaser from 'phaser';

export const GAME = {
  WIDTH: 1280,
  HEIGHT: 720,
  PLAYER_SPEED: 260,
};

export const COLORS = {
  sand: '#e8d5a3',
  sea: '#2a9d8f',
  woodDark: '#6b4226',
  woodLight: '#a9764f',
  floor: '#d9b382',
  wall: '#5d3a1a',
  accent: '#e76f51',
  fg: '#264653',
};

export class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  create() {
    this.scene.start('BeachScene');
  }
}

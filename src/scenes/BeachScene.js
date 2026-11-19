import Phaser from 'phaser';
import { GAME, COLORS } from './BootScene.js';

export class BeachScene extends Phaser.Scene {
  constructor() {
    super('BeachScene');
  }

  create() {
    const g = this.add.graphics();

    g.fillStyle(Phaser.Display.Color.HexStringToColor(COLORS.sea).color);
    g.fillRect(0, 0, GAME.WIDTH, 400);

    g.fillStyle(Phaser.Display.Color.HexStringToColor(COLORS.sand).color);
    g.fillRect(0, 400, GAME.WIDTH, 320);

    this.add
      .text(GAME.WIDTH / 2, 200, 'GİZLİ GEMİ', {
        fontFamily: 'Arial', fontSize: '64px', color: '#ffffff',
      })
      .setOrigin(0.5);
    this.add
      .text(GAME.WIDTH / 2, 280,
        'Kumsalda parlayan bir harita buldun...\nHaritada bir gemi çizimi var.',
        { fontFamily: 'Arial', fontSize: '24px', color: '#ffffff', align: 'center' })
      .setOrigin(0.5);

    const mapProp = this.add.rectangle(GAME.WIDTH / 2, 500, 140, 100, 0xf4e4bc);
    this.add
      .text(GAME.WIDTH / 2, 500, 'HARİTA', { fontFamily: 'Arial', fontSize: '18px', color: '#6b4226' })
      .setOrigin(0.5);

    mapProp.setInteractive({ useHandCursor: true });
    mapProp.on('pointerdown', () => {
      this.add
        .text(GAME.WIDTH / 2, 600,
          'Ufukta aynı gemiyi görüyorsun... (tıkla ve gemiye in)',
          { fontFamily: 'Arial', fontSize: '22px', color: '#ffffff' })
        .setOrigin(0.5);
      mapProp.off('pointerdown');
      this.input.once('pointerdown', () => this.scene.start('ShipScene'));
    });

    // Placeholder haritayı bulmak için ipucu
    this.add
      .text(GAME.WIDTH / 2, 640, 'HARİTA\'ya dokun', {
        fontFamily: 'Arial', fontSize: '16px', color: '#ffffff',
      })
      .setOrigin(0.5);
  }
}

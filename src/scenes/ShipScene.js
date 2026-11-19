import Phaser from 'phaser';
import { GAME, COLORS } from './BootScene.js';

const ROOMS = [
  { name: 'Güverte', x: 640, y: 120, label: 'GÜVERTE' },
  { name: 'Kaptan Köşkü', x: 240, y: 120, label: 'KAPTAN KÖŞKÜ' },
  { name: 'Yemekhane', x: 240, y: 360, label: 'YEMEKHANE' },
  { name: 'Ambar', x: 240, y: 600, label: 'AMBAR' },
  { name: 'Makine Dairesi', x: 640, y: 600, label: 'MAKİNE DAİRESİ' },
  { name: 'Hazine Odası', x: 1040, y: 600, label: 'HAZİNE ODASI' },
];

const TASKS = [
  { id: 'kablo', x: 300, y: 190, title: 'Kabloları bağla' },
  { id: 'seste', x: 700, y: 280, title: 'Morsa sinyali gönder' },
  { id: 'kasa', x: 300, y: 490, title: 'Kasayı aç' },
  { id: 'silindir', x: 700, y: 610, title: 'Basınç vanasını ayarla' },
  { id: 'gunluk', x: 190, y: 120, title: 'Kaptan günlüğünü oku' },
];

export class ShipScene extends Phaser.Scene {
  constructor() {
    super('ShipScene');
  }

  create() {
    this.done = new Set();

    const g = this.add.graphics();
    g.fillStyle(Phaser.Display.Color.HexStringToColor(COLORS.floor).color);
    g.fillRect(320, 60, 860, 620);
    g.fillStyle(Phaser.Display.Color.HexStringToColor(COLORS.floor).color);
    g.fillRect(60, 60, 240, 600);

    ROOMS.forEach((r) => {
      const w = r.x < 320 ? 220 : 300;
      const h = r.y < 200 ? 180 : 200;
      const rect = this.add
        .rectangle(r.x, r.y, w, h)
        .setStrokeStyle(4, Phaser.Display.Color.HexStringToColor(COLORS.wall).color);
      this.add
        .text(r.x, r.y - h / 2 + 16, r.label, {
          fontFamily: 'Arial', fontSize: '14px', color: COLORS.woodDark,
        })
        .setOrigin(0.5);

      if (r.name === 'Hazine Odası') {
        this.treasureDoor = this.add.rectangle(r.x, r.y, 60, 20, 0x333333);
      }
      void rect;
    });

    // Görev istasyonları
    TASKS.forEach((t) => {
      const zone = this.add
        .rectangle(t.x, t.y, 70, 50, Phaser.Display.Color.HexStringToColor(COLORS.accent).color)
        .setStrokeStyle(3, 0xffffff)
        .setInteractive({ useHandCursor: true });
      const label = this.add
        .text(t.x, t.y, t.title, {
          fontFamily: 'Arial', fontSize: '12px', color: '#ffffff', align: 'center',
          wordWrap: { width: 66 },
        })
        .setOrigin(0.5);
      zone.on('pointerdown', () => {
        if (this.done.has(t.id)) return;
        this.done.add(t.id);
        zone.setFillStyle(0x2a9d8f);
        this.updateHud();
      });
      void label;
    });

    // Oyuncu (placeholder: mor "bean")
    this.player = this.add.rectangle(640, 120, 48, 56, Phaser.Display.Color.HexStringToColor(COLORS.fg).color);
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys('W,A,S,D');
    this.moveTarget = null;
    this.input.on('pointerdown', (p) => { this.moveTarget = { x: p.worldX, y: p.worldY }; });

    this.hud = this.add
      .text(16, 16, '', { fontFamily: 'Arial', fontSize: '20px', color: '#ffffff' })
      .setScrollFactor(0);
    this.updateHud();
  }

  updateHud() {
    const n = this.done.size;
    this.hud.setText(`Görevler: ${n}/${TASKS.length}  —  İpucu: her görev bir harita parçası verir`);
    if (n === TASKS.length) {
      this.treasureDoor.setFillStyle(0xe9c46a);
      this.add
        .text(GAME.WIDTH / 2, 720 / 2, 'HAZİNE ODASI AÇILDI!', {
          fontFamily: 'Arial', fontSize: '48px', color: '#e9c46a',
        })
        .setOrigin(0.5);
    }
  }

  update() {
    const body = this.player.body;
    body.setVelocity(0);

    let vx = 0, vy = 0;
    if (this.cursors.left.isDown || this.keys.A.isDown) vx = -1;
    else if (this.cursors.right.isDown || this.keys.D.isDown) vx = 1;
    if (this.cursors.up.isDown || this.keys.W.isDown) vy = -1;
    else if (this.cursors.down.isDown || this.keys.S.isDown) vy = 1;

    if (vx === 0 && vy === 0 && this.moveTarget) {
      const dx = this.moveTarget.x - this.player.x;
      const dy = this.moveTarget.y - this.player.y;
      if (Math.hypot(dx, dy) > 8) {
        vx = Math.sign(dx);
        vy = Math.sign(dy);
      } else {
        this.moveTarget = null;
      }
    }

    const len = Math.hypot(vx, vy) || 1;
    body.setVelocity((vx / len) * GAME.PLAYER_SPEED, (vy / len) * GAME.PLAYER_SPEED);
  }
}

---
name: asset-entegrasyon
description: Kullanıcı assets/ klasörüne yeni tasarım dosyası attığında bunu oyuna entegre etme prosedürü
---

# Asset Entegrasyon Prosedürü

1. `ls assets/sprites assets/ui` ile yeni dosyaları bul, `docs/asset-list.md` spec'ine uygunluğunu kontrol et (boyut/isim).
2. İsim spec'e uymuyorsa `git mv` ile düzelt.
3. `BootScene.js` içinde `this.load.image('char_front', 'assets/sprites/char_front.png')` şeklinde preload et.
4. Placeholder geometriyi (`this.add.rectangle` / graphics) sil, `this.add.image(x, y, 'key')` ile değiştir.
5. Ekran çözünürlüğünde doğru göründüğünü doğrula, dokunma alanı varsa `setInteractive` boyutunu senkronla.
6. Commit: `feat: integrate <asset-adı> sprite`.

## Kurallar
- Görsel hiçbir zaman AI ile üretilmez/değiştirilmez; sadece konum/ölçek ayarı yapılır.
- Eksik dosya varsa placeholder'da kal, `docs/asset-list.md`'de işaretle.

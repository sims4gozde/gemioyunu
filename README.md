# Gemi Oyunu 🏴‍☠️

Among Us tarzı (üstten görünüş) tek oyunculu hazine avı oyunu. Phaser 3 + Vite.

## Nasıl çalışır (Mac)
```bash
npm install
npm run dev
```
Tarayıcıda açılan adrese gir (terminalde yazar, örn. http://localhost:5173).
Telefonda test: aynı Wi-Fi'da `npm run dev -- --host` sonra telefon tarayıcısında
terminalde yazan `http://192.168.x.x:5173` adresini aç.

## Nasıl oynanır (M1 demo)
1. Sahilde HARİTA'ya dokun/tıkla → gemiye geç
2. Gemi içinde WASD/yön tuşları veya ekrana dokunarak yürü
3. Turuncu görev istasyonlarına dokun: hepsini bitir → Hazine Odası açılır

## Klasörler
- `src/` — oyun kodu
- `assets/` — tasarım dosyaları (kullanıcı üretir)
- `docs/` — tasarım belgeleri

Ayrıntılar: `AGENTS.md`, `docs/design-spec.md`, `docs/asset-list.md`

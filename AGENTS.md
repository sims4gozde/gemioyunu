# AGENTS.md — Gemi Oyunu

Bitirme projesi: Among Us tarzı üstten görünüşlü, tek oyunculu hazine avı oyunu.
Phaser 3 + Vite, JavaScript. Oyun dizilişi: plaj cutscene → gemi içi görevler → hazine.

## Komutlar
- `npm install` — bağımlılık kurulumu (bir kez)
- `npm run dev` — tarayıcıda test
- `npm run build` — üretim derlemesi (`dist/`)

## Kritik Kurallar
1. **Tasarımlar AI tarafından üretilmez.** Tüm karakter/asset görselleri kullanıcı (tasarım öğrencisi) tarafından yapılır; AI sadece entegre eder. Asla AI-görsü-üretimi eklenmez.
2. Ottoman Türkçe UI metinleri kullan; kod isimleri İngilizce (camelCase dosyalar PascalCase sahneler: `ShipScene.js`).
3. Her özellik tek commit/PR; commit mesajı kısa, emojili değil, İngilizce conventional (`feat:`, `fix:`, `docs:`).
4. Placeholder geometri kodda `COLORS` sabitinden okur; gerçek asset geldiğinde `assets/` altından yüklenir ve geometri silinir.
5. Kod yorumu ekleme. Eski dosyaları bırakma, sil.
6. Oyun 1280x720 Phaser.Scale.FIT ile responsive; telefon dokunmatiği her mekaniğe eklenmeli (masaüstü WASD yok sayılamaz).
7. `package.json`a yeni bağımlılık eklemeden önce kullanıcıya danış (token/maliyet hassasiyeti).

## Mimari
- `src/main.js` — Phaser config, sahne listesi
- `src/scenes/` — `BootScene` (sabitler: GAME, COLORS), `BeachScene` (açılış), `ShipScene` (gemi içi: odalar, görevler)
- `docs/design-spec.md` — oyun tasarım belgesi (kullanıcı ile doldurulur)
- `docs/asset-list.md` — kullanıcıdan beklenen tasarımlar: boyut/format/ihtiyaç tarihleri
- `assets/` — kullanıcının PNG/SVG dosyaları (`sprites/`, `ui/`)

## Görev Akışı
- Görev istasyonları `TASKS` dizisinde tanımlı (`ShipScene.js`). Yeni görev = diziye ekle + mini oyun sahnesi yaz.
- Placeholder geometri → gerçek asset geçişi: asset `assets/` altında varsa `this.load.image` ile Boot'ta yükle, geometri çağrısını değiştir.

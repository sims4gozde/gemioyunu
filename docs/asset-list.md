# Asset Listesi — Gözde'den Beklenen Tasarımlar

Format kuralları:
- Karakter/prop: **PNG, şeffaf arka plan** (Figma export → background kapalı)
- UI ikonları/belirteçler: SVG veya PNG
- Oyun içinde 64px görünecek her şey **128px (2x)** çizilir
- İsimler küçük harf + alt çizgi (`char_front.png` gibi)
- Tüm dosyalar `assets/sprites/` veya `assets/ui/` klasörüne atılır

## 1. Gönderim — Karakter (M1'in görselleşmesi için)
| Dosya adı | Boyut (px) | Açıklama |
|---|---|---|
| char_front.png | 128x128 | Önden, düz duruş |
| char_back.png | 128x128 | Arkadan |
| char_side_l.png | 128x128 | Sol profile |
| char_walk_1.png | 128x128 | Yürüyüş karesi 1 (bacaklar açık) |
| char_walk_2.png | 128x128 | Yürüyüş karesi 2 (bacaklar kapalı) |
| char_map_hold.png | 256x256 | Haritayı tutan yakın çekim (cutscene) |

## 2. Gönderim — Stil kuralları sayfası (style guide)
- Renk paleti (5-6 renk hex koduyla) — docs/design-spec.md'ye ekleyeceğiz
- Kontur kalınlığı kuralı, gölge kuralı

## 3. Gönderim — Plaj cutscene (M4)
| Dosya | Boyut | Açıklama |
|---|---|---|
| beach_bg.png | 2560x1440 (2x) | Deniz + kum, karakter'siz |
| map_prop.png | 256x256 | Parlayan harita |
| ship_silhouette.png | 512x512 | Ufuktaki gemi silueti |

## 4. Gönderim — Gemi içi (M2-M3)
| Dosya | Boyut | Açıklama |
|---|---|---|
| ship_floor.png | 2560x1440 (2x) | Ahşap zemin dokusu (tile) |
| wall_h.png / wall_v.png | 256x64 / 64x256 | Duvar parçaları |
| chest_closed.png | 128x128 | Sandık kapalı |
| chest_open.png | 128x128 | Sandık açık + hazine |
| barrel.png, table.png, door.png | 128x128 | Prop'lar |
| map_piece_1..5.png | 128x128 | Harita parçaları (ipucu sistemi) |

## 5. Gönderim — Mini oyun ekranları (M2, her görev için ayrı talimat verilecek)

## 6. Gönderim — UI (M4)
- Görev listesi paneli, envanter çantası, ana menü arkaplanı, diyalog kutusu,
  butonlar (normal/basılı halleri)

**Önemli:** Herhangi bir dosyayı yapamadığında/atamada sorun olmadığında yaz;
ben placeholder'la devam ettiririm.

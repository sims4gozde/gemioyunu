# Oyun Tasarım Belgesi (Design Spec)

> Bu belge oyunun tasarım "imzası"dır. Jüri sunumunda da kullanılır.
> GSM: Gözde (tasarım) + AI (kod).

## Konsept
**Ad:** Gemi Oyunu (geçici — oyunun adını koy)
**Tür:** Tek oyunculu, üstten görünüşlü (top-down) görev/hazine avı oyunu
**Referans oyun:** Among Us (bakış açısı, karakter oranı, oda yapısı, mini oyun görevleri)

## Hikaye
1. Karakter sahilde yürürken kumda parlayan bir harita bulur.
2. Haritada bir gemi çizimi vardır. Karakter ufka bakar: aynı gemiyi görür.
3. Gemiyi kazan/içine düşer → hikaye göreve döner: gemi içindeki görevler ve
   ipuçları onu hazineye götürecektir.

## Oynanış Döngüsü
- Oda oda dolaş, görev istasyonlarını bul
- Her görev bir mini oyundur (farklı mekanik)
- Her görev karşılığında bir HARİTA PARÇASI ve/veya ipucu alınır
- Tüm parçalar tamamlanınca Hazine Odası açılır → final

## Görevler (M2'de mini oyun olarak geliştirilecek)
| Görev | Mekanik fikri | Oda |
|---|---|---|
| Kabloları bağla | Renk eşleştirme (Among Us "wires") | Güverte |
| Morsa sinyali | Dokunma ritmi/eşleştirme | Kaptan Köşkü |
| Kasayı aç | Şifre kilidi (ipucu: günlük sayfası) | Ambar |
| Basınç vanası | Kaydırıcılı zamanlama | Makine Dairesi |
| Kaptan günlüğü | Okuma + doğru cevap seçme | Kaptan Köşkü |

## Estetik Yön (kullanıcının çizim tarzından)
- Kalın siyah kontur, düz (flat) renk dolguları
- Büyük kafa/küçük oranti çizim tarzı ("chibi bean")
- Stilize deniz/kum/güverte: az detay, basit geometrik şekiller
- Ekran çözünürlüğü: 1280x720 Phaser FIT ölçeklendirme (telefon + masaüstü)

## Ekranlar
1. Ana Menü (M4)
2. Plaj cutscene (M1'de placeholder, M4'te illüstrasyonlar)
3. Gemi içi (ana oyun alanı)
4. Görev ekranları (mini oyunlar, M2)
5. Envanter/Görev listesi HUD (M3)
6. Final (hazine, M4)

## Milestone'lar
- [x] M1: üstten görünüm + hareket + oda yapısı, kutu geometri, görev sistem iskeleti
- [ ] M2: 5 mini görev gerçek mekaniğiyle
- [ ] M3: envanter + harita parçası + kilitli kapı
- [ ] M4: cutscene + ana menü + HUD tasarımı
- [ ] M5: ses, partiküller, (opsiyonel) Capacitor paketi

---
name: test-dongusu
description: Kullanıcının yerel testi sonrası hata düzeltme iş akışı (git pull döngüsü)
---

# Test Döngüsü Prosedürü

1. Kullanıcı hata/geri bildirim bildirir → hatayı `src/` içinde ilgili sahneye izole et.
2. Hatayı düzelt, çalışan başka hiçbir şeyi değiştirme (token/ diff ekonomisi).
3. `npm run build` ile derlemenin temiz geçtiğini doğrula.
4. Commit (`fix: ...`) + push.
5. Kullanıcıya tek satır rapor: ne düzeltildi + `git pull && npm run dev` hatırlatması.

## Kurallar
- Aynı anda birden fazla düzeltme: her biri ayrı commit, tek push.
- Yeni bağımlılık = kullanıcıdan onay al.
- Kullanıcı ekran görüntüsü eklediyse önce onu incele, tahminle kod değiştirme.

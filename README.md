# Genius PDF
**Développé par Salim Bouzenad**

22 أداة PDF تعمل دون إنترنت: دمج، تقسيم، ترتيب، تدوير، ضغط، إصلاح، تحويل من وإلى Word وExcel وPowerPoint والصور، تعديل، توقيع، علامة مائية، ترقيم، قص، إخفاء معلومات، مقارنة.

## محتويات المشروع
- `www/` واجهة التطبيق ومكتباته (تعمل دون إنترنت).
- `electron/` غلاف برنامج ويندوز.
- `capacitor.config.json` إعداد تطبيق أندرويد.
- `assets/` أيقونة التطبيق.
- `.github/workflows/build.yml` يبني APK ومثبّت ويندوز تلقائياً.

## الحصول على ملف APK ومثبّت ويندوز (بدون تثبيت أي شيء على جهازك)
1. أنشئ حساباً على github.com ثم مستودعاً جديداً (New repository) باسم `genius-pdf`.
2. اضغط **uploading an existing file** وارفع كل محتويات هذا المجلد (بما فيها مجلد `.github`).
   - إن لم يظهر مجلد `.github` عند الرفع، أنشئ الملف يدوياً: Add file > Create new file، واكتب الاسم `.github/workflows/build.yml` والصق محتواه.
3. افتح تبويب **Actions**؛ سيبدأ البناء تلقائياً (نحو 10 دقائق).
4. افتح آخر عملية بناء، وفي أسفل الصفحة ستجد:
   - **Genius-PDF-Android** ← بداخله `Genius-PDF.apk`
   - **Genius-PDF-Windows** ← بداخله `Genius-PDF-Setup-1.0.0.exe` (مثبّت) و`Genius-PDF-Portable-1.0.0.exe` (بدون تثبيت)

## تثبيت APK على الهاتف
انقل الملف إلى الهاتف وافتحه، ثم اسمح بـ "تثبيت التطبيقات من مصادر غير معروفة" عند الطلب.
الملفات الناتجة تُحفظ في `Documents/Genius PDF` وتظهر نافذة المشاركة لإرسالها أو حفظها في مكان آخر.

## البناء على جهازك (للمطورين)
```
npm install
npm start                 # تشغيل نسخة الكمبيوتر
npm run dist:win          # مثبّت ويندوز (على جهاز ويندوز)
npm run android:init      # إنشاء مشروع أندرويد ثم افتحه في Android Studio
```

## ملاحظة عن APK الناتج
ملف APK من GitHub موقّع بمفتاح تجريبي (debug)، وهو مناسب للتثبيت المباشر والمشاركة. للنشر على Google Play تحتاج توقيعه بمفتاح نشر خاص بك من Android Studio (Build > Generate Signed Bundle).

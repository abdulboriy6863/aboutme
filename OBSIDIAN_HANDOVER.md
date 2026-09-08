# 📌 Portfolio Loyihasi: Handover & Holat Qaydnomasi

**Sana:** 2026-09-08  
**Loyiha:** Shaxsiy Senior Full-Stack & AI Arxitektor Portfoliosi  
**Repository:** `https://github.com/abdulboriy6863/aboutme.git` (`main` branch)  
**Asosiy Brend Ranglari:** `#79a7a7` (Light Sage Teal) va `#527c73` (Deep Sage Teal)  
**Qo'llab-quvvatlanuvchi Tillar:** `uz` (O'zbekcha), `en` (English), `ko` (한국어)

---

## ✅ Hozirgacha to'liq bajarilgan ishlar

### 1. Hero Bo'limi (`src/components/modules/hero/Hero.tsx`)
- **Tezkor AI Prompt Kartochkalari (Quick Prompts):**
  - Hover holatida qora/to'q kulrang o'rniga brendning asosiy sage-teal ranglari (`hover:border-[#79a7a7]`, `hover:bg-[#79a7a7]/5`, `hover:shadow-[0_4px_20px_rgba(82,124,115,0.12)]`) va ikonalar uchun `scale-110` animatsiyasi o'rnatildi.
- **AI Input va Yuborish tugmasi:**
  - Input hover va focus holatlarida `#79a7a7` nozik hoshiyasi va glow effekti berildi, yuborish tugmasi brend gradientiga moslashtirildi.

### 2. "Men haqimda" Bo'limi (`src/components/modules/about/AboutMe.tsx`)
- **Profil Fotosurati:**
  - Border radius `rounded-2xl` (16px) ga keltirildi.
  - Dark mode'da fotosurat foni oqarib ketmasligi uchun nozik sage-grey ambient qatlam qo'shildi (kunduzgi va tungi rejimda bir xil ohangda chiqadi).
- **Senior Muhandislik Narrativi (Bio):**
  - **Blue Networks EV CSMS:** 1,600+ stansiyalar, Java 17, Spring Boot, MyBatis, OCPP 1.6J/2.0.1, WebSocket real-vaqt telemetriyasi, OTA yangilanishlar, Koreya Atrof-muhit vazirligi (KECO) milliy rouming ma'lumotlari (`로밍 데이터`), Smartro PG to'lovlari.
  - **AI Energiya Bashorati:** 8 ta model ansambli (PyTorch LSTM, XGBoost, EVT - GEV/GPD Ekstremal Qiymatlar Nazariyasi) orqali P50/P90 ehtimollik kvantillarida yuklama bashorati va KEPCO (한전) tariflarini optimallashtirish.
- **Metrikalar va Tillar:**
  - 4 ta asosiy ko'rsatkich (`5+`, `1,600+`, `99.99%`, `<15ms`) micro-card boxlarsiz ochiq va toza tipografiyada joylashtirildi.
  - O'rtadagi ajratuvchi border saqlab qolindi.
  - 4 ta til nishonlari (🇺🇿 O'zbekcha, 🇰🇷 한국어, 🇺🇸 English, 🇷🇺 Русский) bir qatorda chiroyli qilib tartiblandi.

### 3. "Ko'nikmalar" Bo'limi (`src/components/modules/skills/Skills.tsx`)
- **Arxitektura va Kenglik:**
  - Bo'lim kengligi "Men haqimda" bo'limi bilan bir xil `max-w-4xl mx-auto px-4 sm:px-6` ga keltirildi.
  - 3 ta ustunli karta dizayni (`AI & LLM Muhandisligi`, `Backend & Tizimlar Arxitekturasi`, `Frontend & Mobil Ishlanmalar`).
- **Matnlar va Imlo:**
  - G'aliz eshitilgan `"Mahsulot frontend'i"` so'zi **`Frontend & Mobil Ishlanmalar`** (Inglizchada: `Frontend & Mobile Engineering`, Koreyschada: `프론트엔드 & 모바일 엔지니어링`) ga o'zgartirildi.
  - Har bir kartochka ostidagi texnologik steklar (Java 17, OCPP, KECO Roaming, Smartro PG, Next.js 15, React 19, Jetpack Compose va b.) chetdan chiqib ketmaydigan qilib `break-words` bilan to'g'rilandi.

### 4. Xavfsizlik & API Kalitlari (`route.ts` & `.gitignore`)
- `src/app/api/chat/route.ts` faylidagi fallback sifatida qolib ketgan Gemini API kaliti to'liq olib tashlandi va faqat `process.env.GEMINI_API_KEY` muhit o'zgaruvchisiga ulandi.
- `.gitignore` faylida barcha `.env*` formatlari qat'iy bloklandi.

---

## 🚀 Ertaga davom ettiriladigan rejalar (Next Steps)

1. **Bento Grid / Case Studies bo'limi (`BentoGrid.tsx`)**:
   - Keyslar kartalari dizayni, kengligi va vizual simulyatsiyalarini (WebSocket telemetry, AI forecast grafiklari) "About" va "Skills" bo'limlari dizayn tili bilan to'liq uyg'unlashtirish.
2. **AI Copilot Chat Tizimi (`AiAssistant.tsx`)**:
   - Chatbotning tizim promptlari, Abdulboriyning barcha loyihalari bo'yicha to'g'ri va aniq javob berishini tekshirish.
3. **Aloqa bo'limi (Contact CTA) & Footer**:
   - LinkedIn, GitHub, Email havolalari va rezyume (CV) yuklab olish funksiyasini sozlash.
4. **Yakuniy Tekshiruv & SEO/Metadata**:
   - OpenGraph preview rasmlari, favicon va Google PageSpeed tekshiruvi.

---

## 🛠 Texnik Eslatmalar
- **Build holati:** `npm run build` muvaffaqiyatli (xatoliklarsiz, Next.js 15.5 SSG & Dynamic pages).
- **Git:** Barcha so'nggi o'zgarishlar `main` branchga push qilingan.

<template>
  <div class="font-sans">
    <!-- Navbar -->
    <!-- Navbar -->
    <header id="home" class="sticky top-0 z-50 bg-white shadow-sm border-y border-gray-200">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <img @click="scrollToTop" src="../../src/assets/img/logo.png" alt="Logo" class="h-10 w-auto cursor-pointer" />
        </div>

        <!-- Menu (Desktop) -->
        <nav class="hidden md:flex items-center gap-12 text-gray-700 text-sm">
          <a v-for="item in navItems" :key="item.id" :href="item.href" @click="setActive(item.id)"
            class="hover:text-blue-600" :class="{ 'text-[#6047ff] font-semibold': activeLink === item.id }">
            {{ t(item.label) }}
          </a>
        </nav>
        <!-- Right Side -->
        <div class="flex items-center gap-4">
          <!-- Language select (mobil + desktop) -->
          <div class="md:hidden">
            <HomeLanguageSelect />
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden p-2 rounded hover:bg-gray-100" @click="isMenuOpen = !isMenuOpen">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Desktop buttons -->
          <div class="hidden md:flex items-center gap-4">
            <HomeLanguageSelect />
            <button
              class="bg-[#6047ff] text-white px-4 py-1.5 rounded shadow hover:bg-[#5135ff] flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
              {{ t("Login") }}
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Dropdown -->
      <!-- Mobile Dropdown (Sliding Sidebar) -->
      <transition name="slide-left">
        <nav v-if="isMenuOpen" class="fixed inset-y-0 left-0 w-80 bg-white shadow-xl border-r border-gray-200 z-50 
             flex flex-col px-6 py-6 space-y-6 transform transition-transform duration-300">
          <!-- Menu Items -->
          <a href="#home" @click="activeSection = 'home'; isMenuOpen = false" :class="[
            'block text-lg font-medium transition-colors',
            activeSection === 'home' ? 'text-[#6047ff]' : 'text-gray-700 hover:text-[#6047ff]'
          ]">{{ t('home') }}</a>

          <a href="#news" @click="activeSection = 'news'; isMenuOpen = false" :class="[
            'block text-lg font-medium transition-colors',
            activeSection === 'news' ? 'text-[#6047ff]' : 'text-gray-700 hover:text-[#6047ff]'
          ]">{{ t('news') }}</a>

          <a href="#stats" @click="activeSection = 'stats'; isMenuOpen = false" :class="[
            'block text-lg font-medium transition-colors',
            activeSection === 'stats' ? 'text-[#6047ff]' : 'text-gray-700 hover:text-[#6047ff]'
          ]">{{ t('stats') }}</a>

          <a href="#links" @click="activeSection = 'links'; isMenuOpen = false" :class="[
            'block text-lg font-medium transition-colors',
            activeSection === 'links' ? 'text-[#6047ff]' : 'text-gray-700 hover:text-[#6047ff]'
          ]">{{ t('links') }}</a>

          <!-- Button -->
          <div class="border-t border-gray-200 pt-4">
            <button class="mt-2 bg-[#6047ff] text-white px-4 py-2 rounded shadow hover:bg-[#5135ff] 
                 flex items-center gap-2 w-full justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
              {{ t("Login") }}
            </button>
          </div>
        </nav>
      </transition>

    </header>

    <!-- Hero Section -->
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center bg-gradient-to-r from-white via-white/90 to-transparent">
      <!-- Background Image -->
      <div class="absolute inset-0 bg-cover bg-right md:bg-center" style="
          background-image: url('https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg');
        ">
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-6 py-16 items-center">
        <!-- Text -->
        <div class="space-y-6 font-[Helvetica Neue] italic">
          <h2 class="text-2xl md:text-3xl font-serif font-bold leading-relaxed tracking-wide py-12 -mt-20">
            <span class="text-[#6047ff]">{{ t("part1") }}</span>
            <span class="text-gray-800"> - {{ t("part2") }}</span>
          </h2>
          <p class="text-gray-600 italic">
            {{ t("heroSubtitle") }}
          </p>
          <p class="text-gray-800 font-medium">
            {{ t("president") }} <br />
            <span class="text-gray-600 text-sm">
              {{ t("presidentRole") }}
            </span>
          </p>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section id="news" class="bg-gray-50 py-12 border-y border-gray-300">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-serif font-bold mb-8 text-[#6047ff] italic">
          {{ t("news") }}
        </h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="news in newsList" :key="news.id"
            class="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
            <img :src="news.image" alt="news" class="rounded-lg mb-4 h-40 w-full object-cover" />
            <h3 class="text-sm font-semibold mb-2 text-gray-800">
              {{ news.title }}
            </h3>
            <p class="text-gray-600 text-sm flex-1 mt-4">
              {{ news.description }}
            </p>
            <!-- <a
              href="#"
              class="mt-4 text-[#6047ff] hover:underline text-sm font-medium"
            >
              Batafsil →
            </a> -->
          </div>
        </div>
      </div>
    </section>
    <!-- statistika -->
    <section id="stats" class="bg-gray-50 py-16 font-[Helvetica Neue]">
      <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <!-- Chap taraf: statistika -->
        <div class="w-full lg:w-1/2">
          <h2 class="text-3xl font-serif font-bold mb-10 text-[#6047ff] italic">
            {{ t("stats") }}
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Stat item -->
            <div
              class="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow hover:shadow-lg hover:-translate-y-1 transition">
              <img src="../../src/assets/img/application.png" alt="icon" class="w-16 h-16" />
              <div class="text-[#6047ff] text-2xl font-bold mt-3">10344</div>
              <div class="text-gray-600 text-sm">
                {{ t("sent_applications") }}
              </div>
            </div>

            <div
              class="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow hover:shadow-lg hover:-translate-y-1 transition">
              <img src="../../src/assets/img/accepted.png" alt="icon" class="w-14 h-14" />
              <div class="text-[#6047ff] text-2xl font-bold mt-3">654</div>
              <div class="text-gray-600 text-sm">
                {{ t("accepted_applications") }}
              </div>
            </div>

            <div
              class="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow hover:shadow-lg hover:-translate-y-1 transition">
              <img src="../../src/assets/img/rejected.png" alt="icon" class="w-14 h-14" />
              <div class="text-[#6047ff] text-2xl font-bold mt-3">3244</div>
              <div class="text-gray-600 text-sm">
                {{ t("rejected_applications") }}
              </div>
            </div>

            <div
              class="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow hover:shadow-lg hover:-translate-y-1 transition">
              <img src="../../src/assets/img/contract.png" alt="icon" class="w-14 h-14" />
              <div class="text-[#6047ff] text-2xl font-bold mt-3">13814</div>
              <div class="text-gray-600 text-sm">{{ t("get_contracts") }}</div>
            </div>
          </div>
        </div>

        <!-- O'ng taraf: rasm -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <img src="../../src/assets/img/map.png" alt="Map image" class="max-w-full h-auto mt-20" />
        </div>
      </div>
    </section>
    <!-- Carousel -->
    <section id="links" class="py-12 bg-gray-50 border-y border-gray-300">
      <div class="px-4 sm:px-6 md:px-8">
        <h2 class="text-2xl sm:text-3xl font-serif font-bold italic mb-8 text-center text-[#6047ff]">
          {{ t("usefull_links") }}
        </h2>

        <div class="relative">
          <!-- Carousel Wrapper -->
          <div ref="carousel"
            class="flex overflow-x-auto scroll-smooth space-x-4 sm:space-x-6 no-scrollbar cursor-grab active:cursor-grabbing select-none snap-x snap-mandatory px-6 sm:px-0"
            @mousedown="startDrag" @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag"
            @touchstart="startTouch" @touchmove="onTouch" @touchend="stopTouch">
            <div v-for="(item, index) in cards" :key="index" @click="openLink(item.href)"
              class=" cursor-pointer flex-shrink-0 w-[85%] sm:w-[320px] md:w-[380px] lg:w-[420px] snap-center bg-white border border-gray-200 rounded-lg shadow flex items-center gap-3 sm:gap-4 p-3 sm:p-4 h-[110px] sm:h-[130px] md:h-[120px] lg:h-[100px] transition-transform duration-300">
              <img :src="item.img" :alt="item.title"
                class="w-[50px] h-[50px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] object-contain" />
              <p class="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-snug">
                {{ item.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- section FAQ -->
    <section class="py-16 px-4 bg-gray-50 min-h-screen">
      <div class="max-w-6xl mx-auto px-6">
        <h1 class="text-3xl sm:text-3xl font-serif font-bold italic text-[#6047ff] mb-10 text-center sm:text-center">
          {{ t("faq") }}
        </h1>

        <!-- Loader -->
        <!-- <div v-if="loading" class="text-center py-10 text-gray-500 text-lg animate-pulse">
          {{ t("loading") }}...
        </div> -->

        <!-- FAQ List -->
        <div>
          <div v-for="(item, index) in faqList" :key="index"
            class="mb-4 rounded-2xl bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
            <button @click="toggle(index)"
              class="w-full px-6 py-5 flex justify-between items-center text-left text-lg sm:text-xl font-medium text-gray-800 transition-colors duration-300">
              <span class="flex items-center gap-3">
                <span class="text-xl font-bold text-[#6047ff] transition-transform duration-300"
                  :class="{ 'rotate-180': activeIndex === index }">
                  {{ activeIndex === index ? "−" : "+" }}
                </span>
                <span>{{ item.question }}</span>
              </span>
            </button>

            <transition name="fade-slide">
              <div v-if="activeIndex === index"
                class="px-6 pb-5 text-gray-600 text-[15px] leading-relaxed italic bg-gray-50 border-t border-gray-100">
                {{ item.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#0C233C] text-white text-sm px-4 py-12 md:px-12">
      <div class="max-w-7xl mx-auto grid gap-12 sm:gap-16 md:gap-24 grid-cols-1 md:grid-cols-4">
        <!-- Maktabgacha va maktab taʼlimi vazirligi -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <img src="../../src/assets/img/logo.png" alt="Logo" class="w-40 md:w-full object-contain" />
          </div>
          <p class="text-white/80 text-sm">
            {{ t("title3") }}
          </p>
        </div>

        <!-- Avloni instituti -->
        <div class="space-y-2">
          <div class="flex items-start gap-2">
            <img src="../../src/assets/img/avloniy.png" alt="Avloni Logo" class="w-10 h-10 flex-shrink-0" />
            <p class="text-[10px] leading-tight">
              {{ t("title4") }}
            </p>
          </div>
          <p class="text-white/80 text-xs">
            {{ t("title2") }}
          </p>
        </div>

        <!-- Navigation -->
        <div class="space-y-2">
          <p class="font-semibold">{{ t("Main") }}</p>
          <ul class="space-y-3 text-white/80">
            <li>
              <a href="#home" class="hover:underline">{{ t("home") }}</a>
            </li>
            <li>
              <a href="#news" class="hover:underline">{{ t("news") }}</a>
            </li>
            <li>
              <a href="#stats" class="hover:underline">{{ t("stats") }}</a>
            </li>
            <li>
              <a href="#links" class="hover:underline">{{ t("links") }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="space-y-2">
          <p class="font-semibold">{{ t("Contact") }}</p>
          <p class="text-white/80">+998 71 202 09 09</p>
          <p>
            <a href="mailto:info@uzedu.uz" class="hover:underline text-white/80">info@uzedu.uz</a>
          </p>
        </div>
      </div>

      <div
        class="max-w-7xl mx-auto border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-2 md:gap-0">
        <p>© {{ t("title1") }}</p>
        <p>@uzedu</p>
      </div>
    </footer>

    <button v-show="showScrollTop" @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-[#6047ff] text-white p-3 rounded-full shadow-lg hover:bg-[#5135ff] transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, onUnmounted, ref } from "vue";
import HomeLanguageSelect from "../HomeLanguageSelect.vue";
import { useLocale } from "../useLocale";
import { FaqService } from "../service/faq";


const faqList = ref<any[]>([]);
const loading = ref(false);
const fetchFaqs = async () => {
  try {
    loading.value = true;

    const body = {
      limit: 100000,
      page: 0,
    };

    const res = await FaqService.getList(body, "RETRAINING");

    faqList.value = res?.data || res?.items || [];
  } catch (err) {
    console.error("FAQlarni olishda xatolik:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchFaqs);

const { t } = useLocale();
const isMenuOpen = ref(false);
const activeLink = ref("home");
const activeSection = ref("home"); // default aktiv qism


interface News {
  id: number;
  title: string;
  description: string;
  image: string;
}

const newsList = ref<News[]>([
  {
    id: 1,
    title: "Yangi o‘quv yili boshlandi",
    description:
      "Maktab va maktabgacha ta’lim muassasalarida yangi o‘quv yili tantanali ravishda boshlandi.",
    image: "https://picsum.photos/400/200?1",
  },
  {
    id: 2,
    title: "БУГУН ОНЛАЙН ОЛИМПИАДА БАҲСЛАРИДА 6-, 9-СИНФ",
    description:
      "Hududlarda pedagoglar uchun zamonaviy metodikaga asoslangan treninglar o‘tkazildi.",
    image: "https://picsum.photos/400/200?2",
  },
  {
    id: 3,
    title: "Bolalar bog‘chasida yangi loyiha",
    description:
      "Maktabgacha ta’lim muassasalarida bolalar salomatligi va rivoji uchun yangi dastur joriy etildi.",
    image: "https://picsum.photos/400/200?3",
  },
  {
    id: 3,
    title: "Bolalar bog‘chasida yangi loyiha",
    description:
      "Maktabgacha ta’lim muassasalarida bolalar salomatligi va rivoji uchun yangi dastur joriy etildi.",
    image: "https://picsum.photos/400/200?3",
  },
]);

// Scroll to top button
const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.location.hash = "home";
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const navItems = [
  { id: "home", label: "home", href: "#home" },
  { id: "news", label: "news", href: "#news" },
  { id: "stats", label: "stats", href: "#stats" },
  { id: "links", label: "links", href: "#links" },
];
function setActive(id: string) {
  activeLink.value = id;
}

// const faqList = [
//   {
//     question: "Qaysi buyruq asosida qayta tayyorlov tashkil etiladi",
//     answer: "Vazirlikning 321-sonli buyrug‘i asosida 12",
//   },
//   {
//     question: "Qayta tayyorlash nima?",
//     answer: "Bu mavjud mutaxassislik bo‘yicha malaka oshirishdir.",
//   },
//   {
//     question:
//       "Qayta tayyorlash kurslarini qaysi nizom yoki buyruqlar tartibiga solib turadi?",
//     answer: "Vazirlikning tegishli nizomlari va buyruqlari asosida.",
//   },
//   {
//     question: "Qayta tayyorlash kurslari qanday shaklda tashkil etiladi?",
//     answer: "Onlayn va oflayn shakllarda tashkil etilishi mumkin.",
//   },
//   {
//     question: "Qayta tayyorlash uchun qanday hujjatlar kerak bo‘ladi?",
//     answer: "Pasport, diplom nusxasi, ariza va boshqa kerakli hujjatlar.",
//   },
//   {
//     question: "Qayta tayyorlash kurslari qancha vaqt davom etadi?",
//     answer: "Odatda 1 oydan 3 oygacha davom etadi.",
//   },
//   {
//     question:
//       "Qayta tayyorlash kursini bitirgach, diplom beriladimi yoki sertifikatmi?",
//     answer: "Sertifikat beriladi.",
//   },
//   {
//     question: "Qayta tayyorlash kurslari uchun kimga murojaat etish kerak?",
//     answer:
//       "Javob: Kurslarda tahsil olish uchun haftaning dushanba-juma kunlari 55 5089 06 67 (2) raqamiga soat 09:00-18:00 gacha telefon orqali bog‘lanish mumkin.",
//   },
//   {
//     question: "Qayta tayyorlashning qanday turlari mavjud?",
//     answer:
//       "Javob: Qayta tayyorlashning asosiy 2 xil turi mavjud: pedagogik qayta tayyorlash, kasbiy qayta tayyorlash. - Pedagogik qayta tayyorlash — oliy taʼlim muassasalarining nopedagogik yo‘nalishlarini bitirgan mutaxassislarning bazaviy kasbiy maʼlumotini taʼlimning tegishli turi Davlat taʼlim standarti (Davlat taʼlim talablari) bilan belgilanadigan o‘quv-tarbiya jarayonining talab etiladigan sifatini taʼminlaydigan darajada pedagogik faoliyatni yuritish uchun zarur va yetarli bo‘lgan pedagogik tayyorgarlik talablariga muvofiqlashtirish maqsadida mutaxassislarni o‘qitish. - Kasbiy qayta tayyorlash (ixtisoslashuv) — oliy pedagogik maʼlumotli mutaxassislar tomonidan taʼlimning tegishli turi Davlat taʼlim standarti (Davlat taʼlim talablari) bilan belgilanadigan o‘qitishning talab etiladigan sifatini taʼminlaydigan darajada o‘quv fani yoki kurs bo‘yicha pedagogik faoliyatni yuritish uchun zarur va yetarli hajmda yangi kasbiy bilimlar, malaka va ko‘nikmalarni o‘zlashtirish.",
//   },
//   {
//     question:
//       "Qayta tayyorlash kurslarining narxlari haqida maʼlumotni qayerdan olsam bo‘ladi?",
//     answer:
//       "Javob: Hozirgi kunda kurslarning narxlari 4 890 000 mingdan – 12 332 000 gacha etib belgilangan. Qayta tayyorlash kurslarini tashkil etuvchi muassasa tomonidan kontrakt summasi tegishli kalkulyatsiya qilib boriladi.",
//   },
//   {
//     question:
//       "Qayta tayyorlash kurslarining telegram guruhi yoki kanallari mavjudmi?",
//     answer:
//       "Javob: Qayta tayyorlash kurslari haqida yana-da batafsil maʼlumotlarni https://t.me/avloniyqaytatayyorlov kanaldan maʼlumot olish mumkin.",
//   },
// ];

const activeIndex = ref<number | null>(0); // Dastlab birinchi ochiq bo’ladi

function toggle(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index;
}
const cards = ref([
  { title: ('Respublika bolalar kitob xonasi'), href: 'http://kitob.uz', img: 'https://uzedu.uz/uploads/2021/09/cXc8OOZLrpuhFYRXvNWJQ5GoYOeM88E6.jpg' },
  { title: ('O`zbekiston Respublikasi ochiq axborot portali'), href: 'http://data.gov.uz', img: 'https://uzedu.uz/uploads/2021/09/1SO_XkcIAlylxxP3frNdOk3Zi-InN7i2.jpg' },
  { title: ('O`zbekiston Respublikasi Konstitutsiyasi'), href: 'https://constitution.uz', img: 'https://uzedu.uz/uploads/2021/09/HtHyhPqDo4iM8wByOjzbFdsRieQLuBnv.jpg' },
  { title: ('Taraqqiyot strategiyasi markazi'), href: 'https://strategy.uz/', img: 'https://uzedu.uz/uploads/2022/06/mEPUPAMz2RMOw1DCqY-AlFV03hPzTgeV.jpg' },
  { title: ('O`zbekiston Respublikasi qonun hujjatlari ma`lumotlari milliy bazasi'), href: 'https://lex.uz/uz/', img: 'https://uzedu.uz/uploads/2022/06/tDoD07ZpAtOMsYNJAQdrDlZ7OsHUygKC.jpg' },
  { title: ('Davlat aktivlarini boshqarish agentligi'), href: 'https://davaktiv.uz/ru/', img: 'https://uzedu.uz/uploads/2022/06/he_2F_zDKDSjGMFaSrGQ--Y_Rh2Ujrq7.jpg' },
  { title: ('O`zbekiston Respublikasi Prezidentining rasmiy veb-sayti'), href: 'https://president.uz', img: 'https://uzedu.uz/uploads/2021/09/Feo4zXTr3rEgAE9wo-UNiIDUcvbSckFs.jpg' },
  { title: ('O`zbekiston Respublikasi Prezidentining Virtual qabulxonasi'), href: 'https://pm.gov.uz', img: 'https://uzedu.uz/uploads/2021/09/kMZKcW_nK9A3sh5I-y2GXgpZxahanVso.jpg' },
  { title: ('O`zbekiston Respublikasining hukumat portali'), href: 'http://gov.uz', img: 'https://uzedu.uz/uploads/2021/09/ahrolQvWUhkWxys9o4VZXRE3NMelkb5h.jpg' },
  { title: ('Yagona Interaktiv Davlat xizmatlani portali'), href: 'http://my.gov.uz', img: 'https://uzedu.uz/uploads/2021/09/ja31-w3afFEFnRsPI3Yea6k9tSNIK-xH.jpg' },
  { title: ('Respublika bolalar kitob xonasi'), href: 'http://kitob.uz', img: 'https://uzedu.uz/uploads/2021/09/cXc8OOZLrpuhFYRXvNWJQ5GoYOeM88E6.jpg' },
  { title: ('O`zbekiston Respublikasi ochiq axborot portali'), href: 'http://data.gov.uz', img: 'https://uzedu.uz/uploads/2021/09/1SO_XkcIAlylxxP3frNdOk3Zi-InN7i2.jpg' },
  { title: ('O`zbekiston Respublikasi Konstitutsiyasi'), href: 'https://constitution.uz', img: 'https://uzedu.uz/uploads/2021/09/HtHyhPqDo4iM8wByOjzbFdsRieQLuBnv.jpg' },
  { title: ('Taraqqiyot strategiyasi markazi'), href: 'https://strategy.uz/', img: 'https://uzedu.uz/uploads/2022/06/mEPUPAMz2RMOw1DCqY-AlFV03hPzTgeV.jpg' },
  { title: ('O`zbekiston Respublikasi qonun hujjatlari ma`lumotlari milliy bazasi'), href: 'https://lex.uz/uz/', img: 'https://uzedu.uz/uploads/2022/06/tDoD07ZpAtOMsYNJAQdrDlZ7OsHUygKC.jpg' },
  { title: ('Davlat aktivlarini boshqarish agentligi'), href: 'https://davaktiv.uz/ru/', img: 'https://uzedu.uz/uploads/2022/06/he_2F_zDKDSjGMFaSrGQ--Y_Rh2Ujrq7.jpg' },
  { title: ('O`zbekiston Respublikasi Prezidentining rasmiy veb-sayti'), href: 'https://president.uz', img: 'https://uzedu.uz/uploads/2021/09/Feo4zXTr3rEgAE9wo-UNiIDUcvbSckFs.jpg' },
  { title: ('O`zbekiston Respublikasi Prezidentining Virtual qabulxonasi'), href: 'https://pm.gov.uz', img: 'https://uzedu.uz/uploads/2021/09/kMZKcW_nK9A3sh5I-y2GXgpZxahanVso.jpg' },
  { title: ('O`zbekiston Respublikasining hukumat portali'), href: 'http://gov.uz', img: 'https://uzedu.uz/uploads/2021/09/ahrolQvWUhkWxys9o4VZXRE3NMelkb5h.jpg' },
  { title: ('Yagona Interaktiv Davlat xizmatlani portali'), href: 'http://my.gov.uz', img: 'https://uzedu.uz/uploads/2021/09/ja31-w3afFEFnRsPI3Yea6k9tSNIK-xH.jpg' },
]);

// const cards = ref([
//   {
//     img: "../src/assets/img/gerb.png",
//     title: "O‘zbekiston Respublikasi Prezidentining rasmiy veb-sayti",
//   },
//   {
//     img: "https://picsum.photos/id/1025/600/400",
//     title: "Itlar bog‘i",
//   },
//   {
//     img: "https://picsum.photos/id/1043/600/400",
//     title: "Tog‘ manzarasi",
//   },
//   {
//     img: "https://picsum.photos/id/1043/600/400",
//     title: "Tog‘ manzarasi",
//   },
//   {
//     img: "https://picsum.photos/id/1043/600/400",
//     title: "Tog‘ manzarasi",
//   },
//   {
//     img: "https://picsum.photos/id/1043/600/400",
//     title: "Tog‘ manzarasi",
//   },
//   {
//     img: "https://picsum.photos/id/1043/600/400",
//     title: "Tog‘ manzarasi",
//   },
//   {
//     img: "https://picsum.photos/id/1043/600/400",
//     title: "Tog‘ manzarasi",
//   },
//   {
//     img: "https://picsum.photos/id/1043/600/400",
//     title: "Tog‘ manzarasi",
//   },
// ]);


const openLink = (href) => {
  if (href) window.open(href, "_blank"); // yangi tabda ochiladi
};
const carousel = ref(null);
let scrollInterval = null;
let isDragging = false;
let startX, scrollLeft;

// === Auto scroll ===
onMounted(() => {
  const el = carousel.value;
  if (!el) return;

  scrollInterval = setInterval(() => {
    if (isDragging) return;
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: 300, behavior: "smooth" });
    }
  }, 3000);
});

onBeforeUnmount(() => clearInterval(scrollInterval));

// === Mouse drag ===
const startDrag = (e) => {
  isDragging = true;
  startX = e.pageX - carousel.value.offsetLeft;
  scrollLeft = carousel.value.scrollLeft;
  clearInterval(scrollInterval);
};
const onDrag = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.value.offsetLeft;
  const walk = (x - startX) * 1.2;
  carousel.value.scrollLeft = scrollLeft - walk;
};
const stopDrag = () => {
  if (!isDragging) return;
  isDragging = false;
  restartAutoScroll();
};

// === Touch drag (mobile) ===
let touchStartX = 0;
let touchScrollLeft = 0;

const startTouch = (e) => {
  isDragging = true;
  touchStartX = e.touches[0].pageX - carousel.value.offsetLeft;
  touchScrollLeft = carousel.value.scrollLeft;
  clearInterval(scrollInterval);
};

const onTouch = (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - carousel.value.offsetLeft;
  const walk = (x - touchStartX) * 1.2;
  carousel.value.scrollLeft = touchScrollLeft - walk;
};

const stopTouch = () => {
  isDragging = false;
  restartAutoScroll();
};

// === Restart auto scroll ===
const restartAutoScroll = () => {
  const el = carousel.value;
  scrollInterval = setInterval(() => {
    if (isDragging) return;
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: 300, behavior: "smooth" });
    }
  }, 3000);
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

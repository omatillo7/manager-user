<template>
  <div class="min-h-screen flex items-center justify-center py-4 px-2 sm:py-8 sm:px-4">
    <div class="w-full max-w-6xl relative">
      <!-- Yuklab olish tugmasi -->
      <div class="flex justify-end mb-4">
        <button @click="downloadPDF"
          class="flex gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm shadow-md transition">
          <Download class="w-5 h-5" />
           {{ t('download') }}
        </button>
      </div>

      <!-- PDFga aylanadigan qism -->
      <div id="pdf-content" class="bg-white dark:bg-white rounded-xl p-4 sm:p-6 md:p-10 relative"
        style="box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);">
        <!-- Logo -->
        <div class="flex justify-center mb-4 sm:mb-6">
          <img src="../assets/img/avloniy.png" alt="Institut logosi"
            class="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32" />
        </div>

        <!-- Title -->
        <h2 class="text-center text-xs sm:text-lg md:text-xl font-bold uppercase mb-2 text-gray-900">
          ABDULLA AVLONIY NOMIDAGI <br />
          PEDAGOGIK MAHORAT MILLIY INSTITUTI
        </h2>

        <!-- Document Info -->
        <div class="text-[10px] sm:text-sm text-gray-900 mb-4 sm:mb-6">
          <p class="font-bold">
            № <span class="text-[#00b0f0]">24787/13133</span> –
            <span class="italic text-[#c59776]">Shartnoma raqami</span>
          </p>
          <p class="font-bold">
            Hujjat yaratilgan sana:
            <span class="text-[#00b0f0]">25-09-2025</span>
          </p>
        </div>

        <!-- Document Title -->
        <h3 class="text-center font-bold mb-3 sm:mb-4 text-gray-900 text-xs sm:text-base">
          O‘QISH JOYIDAN MA’LUMOTNOMA <br />
          <span class="text-[10px] sm:text-sm">СПРАВКА С МЕСТА УЧЁБЫ</span>
        </h3>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full border border-gray-400 text-[10px] sm:text-sm text-gray-900">
            <tbody>
              <tr>
                <td class="border border-gray-400 px-2 py-1">F.I.SH. / Ф.И.О.:</td>
                <td class="border border-gray-400 px-2 py-1 text-[#00b0f0]">SHUKUROVA GAVXAR LOLAYEVNA</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-2 py-1">JSH SHIR / ПИН ФЛ:</td>
                <td class="border border-gray-400 px-2 py-1 text-[#00b0f0]">42306851900024</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-2 py-1">Tug‘ilgan sanasi / дата рождения:</td>
                <td class="border border-gray-400 px-2 py-1"></td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-2 py-1">Fuqaroligi / Гражданство:</td>
                <td class="border border-gray-400 px-2 py-1 text-[#00b0f0]">O‘zbekiston Respublikasi fuqarosi</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-2 py-1">Qayta tayyorlov turi / Тип переподготовки:</td>
                <td class="border border-gray-400 px-2 py-1 text-[#00b0f0]">Kasbiy</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-2 py-1">Qabul turi / Тип приёма:</td>
                <td class="border border-gray-400 px-2 py-1 text-[#00b0f0]">To‘lov-shartnoma</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-2 py-1">O‘qishga kirgan sanasi / Дата регистрации:</td>
                <td class="border border-gray-400 px-2 py-1 text-[#00b0f0]">27-08-2025</td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-2 py-1">Ta’lim muassasasi / Учебное заведение:</td>
                <td class="border border-gray-400 px-2 py-1 text-[#00b0f0]">
                  Abdulla Avloniy nomidagi pedagogik mahorat milliy instituti
                </td>
              </tr>
              <tr>
                <td class="border border-gray-400 px-2 py-1">Qayta tayyorlov yo‘nalishi / Курс переподготовки:</td>
                <td class="border border-gray-400 px-2 py-1 text-[#00b0f0]">
                  Ixtisoslashtirilgan ta’lim muassasasi o‘qituvchisi va tarbiyachisi (tiflopedagogika) huquqini berish
                  bo‘yicha kasbiy qayta tayyorlash
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Bottom text -->
        <div class="mt-4 sm:mt-6 text-[10px] sm:text-sm text-gray-900">
          <p class="font-bold">
            Ma’lumot so‘ralgan joyga taqdim etish uchun berildi. <br />
            <span class="italic font-bold text-gray-900">
              Справка выдано для представления по месту требования.
            </span>
          </p>
        </div>

        <!-- QR (har doim textdan keyin pastda o‘ng tarafda turadi) -->
        <div class="mt-4 flex justify-end">
          <img src="../assets/img/qrcode.png" alt="QR Code" class="h-16 w-16 sm:h-20 sm:w-20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Download } from "lucide-vue-next";
import { useLocale } from "../useLocale"
const { t } = useLocale()
// import html2pdf from "html2pdf.js";

const downloadPDF = () => {
  const element = document.getElementById("pdf-content");
  if (!element) return;

  const options = {
    margin: 0.5,
    filename: "malumotnoma.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  // html2pdf().set(options).from(element).save();
};
</script>

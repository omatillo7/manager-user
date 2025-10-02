// services/newsService.js
import axios from "axios";

const BASE_URL = "https://tapi-manager.uzedu.uz";
const IMAGE_URL = "https://madm.uzedu.uz/images"; // uploadPath uchun to‘liq prefix

export async function getNewsList() {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v.1/directory/news/list`,
      {
        search: "",
        code: "NEWS",
        lessonTypeId: null,
        isShort: true,
      }
    );

    const list = response.data.data || [];

    return list.map((item) => ({
      id: item.id,
      title: item.nameUz,
      description: item.lessonTypeNameUz || "",
      image: item.uploadPath
        ? `${IMAGE_URL}/${item.uploadPath}`
        : "https://via.placeholder.com/300x200?text=No+Image",
    }));
  } catch (error) {
    console.error("❌ getNewsList xatolik:", error);
    return [];
  }
}

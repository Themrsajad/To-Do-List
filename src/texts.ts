import { LanguageText } from "./types";
import { useZState } from "./states";

export function Texts(text: LanguageText): string {
  const { isEnglish } = useZState();
  return isEnglish ? text.en : text.fa;
}

export const textsList = {
  heading_mainTitle: {
    en: "To-Do List",
    fa: "لیست کارها",
  },
  heading_completedTitle: {
    en: "Completed Tasks",
    fa: "کارهای انجام شده",
  },
  form_inputPlaceholder: {
    en: "like 'Reading my Lessons'",
    fa: "مثلا 'خواندن درس هام'",
  },
  form_priorityTitle: {
    en: "Set Priority",
    fa: "تنظیم اولویت",
  },
  form_priorityLow: {
    en: "Low",
    fa: "پایین",
  },
  form_priorityMedium: {
    en: "Medium",
    fa: "متوسط",
  },
  form_priorityHigh: {
    en: "High",
    fa: "بالا",
  },
  form_priorityCancel: {
    en: "Cancel",
    fa: "انصراف",
  },
  form_categoryButtonTitle: {
    en: "Add Category",
    fa: "افزودن دسته بندی",
  },
  form_categoryinputPlaceholder: {
    en: "School",
    fa: "مدرسه",
  },
  form_categorySelect: {
    en: "Select : ",
    fa: "انتخاب : ",
  },
  form_categoryCategories: {
    en: "Categories : ",
    fa: "دسته بندی ها : ",
  },
  filter_filterByCategory: {
    en: "Filter By Category : ",
    fa: "فیلتر براساس دسته بندی : ",
  },
  filter_select: {
    en: "Select",
    fa: "انتخاب",
  },
  filter_showAll: {
    en: "Show All",
    fa: "همه",
  },
  sort_sortBy: {
    en: "Sort By : ",
    fa: "مرتب سازی براساس : ",
  },
  sort_dateAdded: {
    en: "Date Added",
    fa: "تاریخ اضافه شدن",
  },
  sort_priority: {
    en: "Priority",
    fa: "اولویت",
  },
  sort_remainingTime: {
    en: "Remaining Time",
    fa: "زمان باقیمانده",
  },
  task_update: {
    en: "Update",
    fa: "ثبت تغییرات",
  },
  task_updatePlaceholder: {
    en: "New title",
    fa: "عنوان جدید",
  },
  task_tomorrow: {
    en: "Tomorrow",
    fa: "فردا",
  },
  task_today: {
    en: "Today",
    fa: "امروز",
  },
  task_dayleft: {
    en: " Day left",
    fa: " روز باقیمانده",
  },
  task_past: {
    en: "it's past",
    fa: "گذشته",
  },
  task_daysleft: {
    en: " Days left",
    fa: " روز باقیمانده",
  },
  floatedButton_completed: {
    en: "Completed Tasks",
    fa: "کارهای انجام شده",
  },
  floatedButton_returnHome: {
    en: "Return to Home",
    fa: "بازگشت به خانه",
  },
  completedPage_paragraph: {
    en: "You haven't completed any tasks yet. Start achieving your goals!",
    fa: "هنوز کاری انجام ندادی. از امروز شروع کن!",
  },
  completedPage_revert: {
    en: "Revert",
    fa: "برگرداندن",
  },
  //   completedPage_deleteAll: {
  //     en: "",
  //     fa: "",
  //   },
};

import { createHomeTab } from "./home.js";
import { createMenuTab } from "./menu.js";
import { createContactTab } from "./contact.js";

const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

// دالة مسح المحتوى القديم ورسم المحتوى الجديد
function renderTab(tabElement) {
  contentDiv.innerHTML = ""; // مسح الشاشة بالكامل
  contentDiv.appendChild(tabElement); // إضافة الموديول الجديد
}

// الأحداث عند الضغط على الأزرار
homeBtn.addEventListener("click", () => renderTab(createHomeTab()));
menuBtn.addEventListener("click", () => renderTab(createMenuTab()));
contactBtn.addEventListener("click", () => renderTab(createContactTab()));

// تحميل الصفحة الرئيسية تلقائياً أول ما الموقع يفتح
renderTab(createHomeTab());
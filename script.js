// IMPORTANT: Replace the placeholder below with your WhatsApp number, including country code, digits only.
// Example for India: 919876543210 (do not include +, spaces or dashes).
const WHATSAPP_NUMBER = "919815751852";

// Optional contact details shown in the contact section.
const CONTACT_PHONE = "Add your phone number";
const CONTACT_EMAIL = "Add your email address";

document.getElementById("phoneDisplay").textContent = CONTACT_PHONE;
document.getElementById("emailDisplay").textContent = CONTACT_EMAIL;
document.getElementById("year").textContent = new Date().getFullYear();

let currentLanguage = "en";
const languageToggle = document.getElementById("languageToggle");

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-en][data-hi]").forEach((element) => {
    const value = element.dataset[language];
    if (value !== undefined) element.innerHTML = value;
  });
  languageToggle.textContent = language === "en" ? "हिंदी" : "English";
}
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "hi" : "en"));

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => nav.classList.remove("open")));

function isWhatsAppConfigured() {
  return /^\d{10,15}$/.test(WHATSAPP_NUMBER) && !WHATSAPP_NUMBER.includes("X");
}
function openWhatsApp(message) {
  if (!isWhatsAppConfigured()) {
    document.getElementById("formError").textContent =
      currentLanguage === "en"
        ? "Website setup needed: open script.js and replace 91XXXXXXXXXX with your WhatsApp number, including country code."
        : "वेबसाइट सेटअप बाकी है: script.js में 91XXXXXXXXXX की जगह अपना WhatsApp नंबर देश कोड सहित डालें।";
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    return;
  }
  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
document.querySelectorAll(".book-tour").forEach((button) => {
  button.addEventListener("click", () => {
    const tour = button.dataset.tour;
    document.getElementById("destination").value =
      tour === "Mountain Escape" ? "Himachal Pradesh" :
      tour === "Culture & Heritage" ? "Rajasthan" :
      tour === "Coastal Days" ? "Goa & Coastal India" : "";
    document.getElementById("message").value =
      (currentLanguage === "en" ? "I'm interested in the " : "मुझे यह टूर पसंद है: ") + tour + ".";
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    document.getElementById("name").focus({ preventScroll: true });
  });
});
document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("formError").textContent = "";
  const form = new FormData(event.currentTarget);
  const message = currentLanguage === "en"
    ? `Hello Himachal Local Tours! I'd like to plan a trip.\nName: ${form.get("name")}\nDestination: ${form.get("destination")}\nTravellers: ${form.get("people")}\nTravel date: ${form.get("date") || "Flexible"}\nDuration: ${form.get("duration")}\nAdditional details: ${form.get("message") || "Not provided"}\nPlease share availability and pricing.`
    : `नमस्ते Himachal Local Tours! मैं यात्रा प्लान करना चाहता/चाहती हूँ।\nनाम: ${form.get("name")}\nजगह: ${form.get("destination")}\nयात्री: ${form.get("people")}\nयात्रा की तारीख: ${form.get("date") || "लचीली"}\nअवधि: ${form.get("duration")}\nअन्य जानकारी: ${form.get("message") || "नहीं दी गई"}\nकृपया उपलब्धता और कीमत बताएँ।`;
  openWhatsApp(message);
});
document.getElementById("floatingWhatsApp").addEventListener("click", (event) => {
  event.preventDefault();
  const message = currentLanguage === "en"
    ? "Hello Himachal Local Tours! I'd like help planning a trip in India."
    : "नमस्ते Himachal Local Tours! मुझे भारत में यात्रा प्लान करने में मदद चाहिए।";
  openWhatsApp(message);
});

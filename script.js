document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const telephone = document.getElementById("telephone").value.trim();
        const messageText = document.getElementById("message").value.trim();

        if (name === "" || 
            email === "" || 
            telephone === "" ||
             messageText === "") {
            message.style.color = "red";
            message.textContent = "Please fill in all fields.";
            return;
        }

        // Simulate form submission (Replace this with backend integration)
        message.style.color = "green";
        message.textContent = "Thank you! Your message has been sent.";

        // Reset form
        form.reset();
    });
});
// Language translations
const translations = {
    en: {
        title: "Mary & Martha Media and Consulting",
        navAbout: "About",
        navProducts: "Products",
        navServices: "Services",
        navBlog: "Blog",
        navPrivacy: "Data Privacy",
        navContact: "Contact",
        aboutTitle: "About Mary & Martha Media and Consulting",
        aboutContent: "Mary & Martha Media and Consulting is a leading provider of data-driven solutions, specializing in audience segmentation, programmatic advertising, and advanced analytics.",
        productsTitle: "Our Data Products",
        product1: "Audience Segmentation Data",
        product2: "Real-Time Behavioral Insights",
        product3: "Market Trend Forecasting",
        product4: "Competitor Intelligence Reports",
        servicesTitle: "Our Services",
        service1: "Programmatic Advertising",
        service2: "Data Analytics & Machine Learning",
        service3: "Predictive Analytics & Forecasting",
        service4: "Scientific Research & Case Studies",
        service5: "SEO & Online Marketing",
        privacyTitle: "Data Privacy Policy",
        privacyContent: "We prioritize data security and comply with GDPR and CCPA regulations. All data is anonymized and encrypted.",
        contactTitle: "Contact Us",
        contactName: "Name:",
        contactEmail: "Email:",
        contactTelephone: "Telephone:",
        contactMessage: "Message:",
        contactSubmit: "Send Message",
    },
    de: {
        title: "Mary & Martha Medien und Beratung",
        navAbout: "Über Uns",
        navProducts: "Produkte",
        navServices: "Dienstleistungen",
        navBlog: "Blog",
        navPrivacy: "Datenschutz",
        navContact: "Kontakt",
        aboutTitle: "Über Mary & Martha Medien und Beratung",
        aboutContent: "Mary & Martha Media und Consulting ist ein führender Anbieter datengesteuerter Lösungen, spezialisiert auf Zielgruppen-Segmentierung, programmatische Werbung und fortschrittliche Analytik.",
        productsTitle: "Unsere Datenprodukte",
        product1: "Zielgruppen-Segmentierungsdaten",
        product2: "Echtzeit-Verhaltensanalysen",
        product3: "Markttrend-Prognosen",
        product4: "Wettbewerbsintelligenz-Berichte",
        servicesTitle: "Unsere Dienstleistungen",
        service1: "Programmatic Advertising",
        service2: "Datenanalyse & maschinelles Lernen",
        service3: "Prädiktive Analysen & Prognosen",
        service4: "Wissenschaftliche Forschung & Fallstudien",
        service5: "SEO & Online Marketing",
        privacyTitle: "Datenschutzrichtlinie",
        privacyContent: "Wir legen Wert auf Datensicherheit und erfüllen die GDPR- und CCPA-Vorschriften. Alle Daten sind anonymisiert und verschlüsselt.",
        contactTitle: "Kontakt",
        contactName: "Name:",
        contactEmail: "E-Mail:",
        contactTelephone: "Telefon:",
        contactMessage: "Nachricht:",
        contactSubmit: "Nachricht senden",
    },
    tr: {
        title: "Mary & Martha Medya ve Danışmanlık",
        navAbout: "Hakkımızda",
        navProducts: "Ürünler",
        navServices: "Hizmetler",
        navBlog: "Blog",
        navPrivacy: "Gizlilik Politikası",
        navContact: "İletişim",
        aboutTitle: "Mary & Martha Medya ve Danışmanlık Hakkında",
        aboutContent: "Mary & Martha Medya ve Danışmanlık, veri odaklı çözümler sağlayan lider bir şirkettir.",
        productsTitle: "Veri Ürünlerimiz",
        product1: "Hedef Kitle Segmentasyonu Verileri",
        product2: "Gerçek Zamanlı Davranışsal İçgörüler",
        product3: "Pazar Eğilimleri Tahmini",
        product4: "Rakip İstihbarat Raporları",
        servicesTitle: "Hizmetlerimiz",
        service1: "Programatik Reklamcılık",
        service2: "Veri Analitiği & Makine Öğrenimi",
        service3: "Öngörücü Analitik & Tahminleme",
        service4: "Bilimsel Araştırmalar & Vaka Çalışmaları",
        service5: "SEO & Dijital Pazarlama",
        privacyTitle: "Gizlilik Politikası",
        privacyContent: "Veri güvenliğine öncelik veriyoruz ve GDPR ve CCPA düzenlemelerine uyuyoruz. Tüm veriler anonimleştirilmiş ve şifrelenmiştir.",
        contactTitle: "Bize Ulaşın",
        contactName: "Adınız:",
        contactEmail: "E-posta:",
        contactTelephone: "Telefon:",
        contactMessage: "Mesajınız:",
        contactSubmit: "Mesaj Gönder",
    }
};

// Language switcher function
document.getElementById("languageSwitcher").addEventListener("change", function () {
    const selectedLang = this.value;
    document.querySelectorAll("[data-key]").forEach(el => {
        el.innerText = translations[selectedLang][el.getAttribute("data-key")];
    });
});

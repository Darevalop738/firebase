import React from "react";
import i18n from "../i18n";


function LanguageSwitcher() {
  const handleLanguageChange = (lang) => {
    if (i18n && typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(lang);
      localStorage.setItem("language", lang);
    } else {
      console.error("i18n.changeLanguage no es una función");
    }
  };
  return (
    <div>
      {/* Selector de idioma */}
      <button onClick={() => handleLanguageChange("es")}>ES</button>
      <button onClick={() => handleLanguageChange("en")}>EN</button>
      <button onClick={() => handleLanguageChange("fr")}>FR</button>
    </div>
  );
}

export default LanguageSwitcher;
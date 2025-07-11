import React, { useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

const GoogleTranslate = () => {
    useEffect(() => {
        // Prevent duplicate script
        if (document.getElementById("google-translate-script")) return;

        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "en,zh-CN,es,ar,fr,pt,ru,de,ja,ko,id,it",
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false,
                },
                "google_translate_element"
            );
        };
    }, []);

    return (
        <div className="lan_bnt_header gap-1">
            <FaGlobe color="#555" style={{ marginRight: "5px" }} />
            <div id="google_translate_element" />
        </div>
    );
};

export default GoogleTranslate;

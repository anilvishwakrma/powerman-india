import { motion } from "framer-motion";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";

const LanguageDropdown = () => {
    const [selected, setSelected] = useState("English");

    const variants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    const getLanguageCode = (lang) => {
        switch (lang) {
            case "English": return "EN";
            case "Chinese": return "ZH";
            case "Spanish": return "ES";
            case "Arabic": return "AR";
            case "French": return "FR";
            case "Portuguese (Brazil)": return "PT-BR";
            case "Russian": return "RU";
            case "German": return "DE";
            case "Japanese": return "JA";
            case "Korean": return "KO";
            case "Indonesian": return "ID";
            case "Italian": return "IT";
            default: return "EN";
        }
    };

    return (
        <motion.div
            whileTap={{ scale: 0.96 }}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lun_select relative flex items-center space-x-2"
        >
            <FaGlobe className="text-gray-600 text-lg" />

            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md appearance-none"
            >
                <option value="English">EN</option>
                <option value="Chinese">ZH</option>
                <option value="Spanish">ES</option>
                <option value="Arabic">AR</option>
                <option value="French">FR</option>
                <option value="Portuguese (Brazil)">PT-BR</option>
                <option value="Russian">RU</option>
                <option value="German">DE</option>
                <option value="Japanese">JA</option>
                <option value="Korean">KO</option>
                <option value="Indonesian">ID</option>
                <option value="Italian">IT</option>
            </select>
        </motion.div>
    );
};

export default LanguageDropdown;

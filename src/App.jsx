import { useState } from "react";
import { CVDisplay } from "./components/cvDisplay";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import GeneralInfo from "./components/GeneralInfo";

export function App() {
    function hyphenToCamelCase(inputString) {
        const words = inputString.split("-");
        const camelCaseWords = [words[0]];

        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            camelCaseWords.push(word.charAt(0).toUpperCase() + word.slice(1));
        }

        return camelCaseWords.join("");
    }

    const [data, setData] = useState({
        name: "",
        about:"",
        email: "",
        phoneNumber: "",
        schoolName: "",
        titleOfStudy: "",
        dateOfStudyEnd: "",
        companyName: "",
        positionTitle: "",
        skillsUsed: "",
        dateOfStartOfCompany: "",
        dateOfEndOfCompany: "",
    });

    const handleFormChange = (e) => {
        const id = hyphenToCamelCase(e.target.id);
        setData((prevData) => {
            prevData[id] = e.target.value;
            return { ...prevData };
        });
    };

    return (
        <>  
            <GeneralInfo handleFormChange={handleFormChange}/>
            <EducationInfo handleFormChange={handleFormChange}/>
            <ExperienceInfo handleFormChange={handleFormChange}/>
            <CVDisplay {...data} />
        </>
    );
}

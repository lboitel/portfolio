import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Léo-Paul Boitel</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A NLP specialist",
        "An Open Source Contributor",
        "A Backend Developer",
        "A French"
    ],
    about: {
        start: "I've been working for over 4 years on data science projects. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL and NoSQL databases, BI tools, and more, " +
            "with a deep interest in fine-tuning NLP models."
    },
    workTimeline: [
        {
            id: "work-2",
            title: "Data Scientist",
            company: "The Blockchain Group",
            description: "Working to build scalable solutions, LLM's, RAG architectures, ML algorithms...",
            date: "Jan 2022-Present",
            icon: <BiRocket/>,
            tags: ["ml", "mlops", "python", "aws", "llm", "elasticsearch", "docker"]
        },
        {
            id: "work-1",
            title: "R&D Trainee Data Scientist",
            company: "Worldline",
            description: "Working to implement biometric authentication systems through machine learning method " +
                "and users web behavioral data. POC was sold +700K$",
            date: "Jan 2021 - Jul 2021",
            icon: <FaMobileAlt/>,
            tags: ["ml", "typescript", "python"]
        },
        {
            id: "work-0",
            title: "Institut Mines-Telecom Nord Europe / Telecom Lille",
            company: "Computer and Data Science Master's Degree - Engineer",
            description: "Specialization in Data Science and applied research.",
            date: "2017-2022",
            icon: <BsClipboardData/>,
            tags: ["ml", "dl", "nlp", "python", "java", "C", "C#", "signal processing", "postgres", "azure"]
        }
    ]
}


export default homeConfig
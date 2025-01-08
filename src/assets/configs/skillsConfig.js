import {
    SiPython,
    SiPostgresql,
    SiDocker,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiElasticsearch,
    SiAwsorganizations,
    SiPytorch,
    SiHuggingface,
    SiApachesuperset

} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "Postgres"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiElasticsearch size={50}/>,
            text: "ElasticSearch"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiAwsorganizations size={50}/>,
            text: "AWS"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        }
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiPytorch size={50}/>,
            text: "PyTorch"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiHuggingface size={50}/>,
            text: "HuggingFace"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiSnowflake size={50}/>,
            text: "Snowflake"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiApacheairflow size={50}/>,
            text: "Airflow"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JS"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        }
        ,
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiApachekafka size={50}/>,
            text: "Kafka"
        }
        ,
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiApachesuperset size={50}/>,
            text: "Superset BI"
        }
    ]
}

export default skillsConfig

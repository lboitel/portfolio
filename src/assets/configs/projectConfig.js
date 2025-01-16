import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
// import {ImBook} from "react-icons/im";

// import sklearnGenetic from "../images/sklearn_genetic_opt.png"
// import kafkaMl from "../images/kafkaml.png"
// import portfolio from "../images/portfolio.png"
import chess_img from "../images/chess.jpg"

import React from 'react'

const projectConfig = [
    // {
    //     id: "project-5",
    //     title: "Sklearn Genetic Opt",
    //     links: [
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt",
    //             icon: <AiFillGithub/>,
    //         },
    //         {
    //             name: "fork",
    //             url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork",
    //             icon: <BiGitRepoForked/>,
    //         },
    //         {
    //             name: "subscription",
    //             url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription",
    //             icon: <AiFillEye/>,
    //         },
    //         {
    //             name: "docs",
    //             url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/",
    //             icon: <ImBook/>,
    //         }
    //     ],
    //     image: sklearnGenetic,
    //     description: "scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",
    //     target: "_blank"
    // },
    // {
    //     id: "project-3",
    //     title: "Kafkaml Anomalies",
    //     links: [
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",
    //             icon: <AiFillGithub/>
    //         },
    //         {
    //             name: "fork",
    //             url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",
    //             icon: <BiGitRepoForked/>
    //         },
    //         {
    //             name: "subscription",
    //             url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",
    //             icon: <AiFillEye/>
    //         }
    //     ],
    //     image: kafkaMl,
    //     description: "Project for real-time anomaly detection using kafka and python.",
    //     target: "_blank"
    // },
    {
        id: "project-2",
        title: "Geo Yes'sir",
        links: [
            {
                name: "repo",
                url: "https://github.com/lboitel/geoguess",
                icon: <AiFillGithub/>
            },
            // {
            //     name: "fork",
            //     url: "https://github.com/rodrigo-arenas/pyworkforce/fork",
            //     icon: <BiGitRepoForked/>
            // },
            {
                name: "subscription",
                url: "/projects/geoguess",
                icon: <AiFillEye/>,
                target: "blank"
            },
            // {
            //     name: "docs",
            //     url: "https://pyworkforce.readthedocs.io/en/stable/",
            //     icon: <ImBook/>,
            // }
        ],
        image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
        description: "Training models to predict the country associated with an uploaded Google Streetview image. \nMade with ❤️ using Python, Tensorflow, Gmaps API, and Google Cloud Platform."
    },
    {
        id: "project-1",
        title: "StyleMate",
        links: [
            {
                name: "repo",
                url: "https://github.com/lboitel/chess-me",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/lboitel/chess-me/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "/projects/chess-me",
                icon: <AiFillEye/>,
                target : "blank"
            }
        ],
        image: chess_img,
        description: "A project focused on training models to analyze and replicate chess playstyles. \nBuilt using Python, Pychess, Stockfish, and the Chess.com API.",
    }
]

export default projectConfig
import score1 from "../assets/1score.PNG";

import tutorialModel from "../assets/tutorial model.PNG";

export const projects = [
  {
    id: 1,
    title: "Titanic Kaggle Challenge (WIP)",
    layoutType: "linear",
    description: "Predictive model forecasting survival outcomes for passengers on the Titanic.",
    techStack: ["Python"],
    github: "https://github.com/robmcn22/portfolio",
    live: "#",
    stages: [
      { 
        id: "overview", 
        title: "1. Project Overview", 
        content: "The Challenge: Use the provided Titanic passenger data (cabin, age, price of ticket, etc.) to try to predict who \
        survied and who did not on the Titanic.",
      },
      { 
        id: "baseline", 
        title: "2. Baseline Model & Score: Tutorial", 
        content: "Using the provided model to get a baseline score. This is the score to beat",
        images: [
          {
            src: score1,
            alt: "Baseline Titanic model score",
            description: "The initial Kaggle tutorial score used as the baseline to beat for the Titanic survival model."
          },
          {
            src: tutorialModel,
            alt: "Titanic tutorial model output",
            description: "This tutorial model gives a simple prediction framework to compare against more advanced feature engineering and model tuning."
          }
        ]
      }
    ]
  },
  // {
  //   id: 2,
  //   title: "Liverpool Analysis Dashboard",
  //   layoutType: "dashboard",
  //   description: "Interactive performance analysis dashboard.",
  //   techStack: ["#"],
  //   github: "#",
  //   live: "#",
  //   dashboardData: {
  //     kpis: [
  //       { label: "Expected Goals (xG)", value: "2.14 / match" },
  //       { label: "Win Rate", value: "68.4%" },
  //       { label: "High Press Success", value: "41.2%" }
  //     ],
  //     tabs: [
  //       { id: "attack", label: "Attacking Metrics", content: "Interactive xG breakdown chart here." },
  //       { id: "defense", label: "Defensive Pressing", content: "Heatmap visualization components here." }
  //     ]
  //   }
  // }
];
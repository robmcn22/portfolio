import score1 from "../assets/1score.PNG";

import tutorial from "../assets/tutorial model.PNG";

export const projects = [
  {
    id: 1,
    title: "Kaggle Competition - Titanic (WIP)",
    layoutType: "linear",
    description: "Predictive model forecasting survival outcomes for passengers on the Titanic.",
    techStack: ["Python"],
    github: "https://github.com/robmcn22/portfolio",
    live: "#",
    stages: [
      { 
        id: "overview", 
        title: "1. Project Overview", 
        content: [
          { type: "bold", text: "What is Kaggle? " },
          { text: "Kaggle is an online platform for data science competitions and collaborative machine learning. The competitions\
            they host provide datasets for practitioners to solve real-world problems, allowing you to create your own models, \
            have them scored, and use that as a method of comparison." },
          { type: "break" }, { type: "break" },
          { type: "bold", text: "The Challenge: " },
          { text: "Use the provided Titanic passenger data to create a model that predicts which passengers survived the Titanic disaster." },
          { type: "break" }, { type: "break" },
          { type: "bold", text: "The Data: " },
          { text: "Broken down into training (891 samples, discloses the ground truth - whether the passenger survived or not) and testing (418 samples, does\
            not disclose the ground truth)." },
          { type: "break" },
          { text: "Data Dictionary:" },
          {
            type: "list",
            items: [
              "Survived(ground truth): Whether the passenger survived - int (0 = No, 1 = Yes)",
              "Pclass: Passenger ticket class - int (1 = 1st(upper), 2 = 2nd(middle), 3 = 3rd(lower))",
              "Name: Passenger name - string",
              "Sex: Passenger sex - string ('male' or 'female')",
              "Age: Passenger age in years - float(if estimated, it is in the form of xx.5)",
              "SibSp: # of siblings/spouses the passenger has on board - int",
              "Parch: # of parents/children the passenger has on board - int",
              "Ticket: Ticket number of passenger - string",
              "Fare: Fare paid for the ticket - float",
              "Cabin: Cabin number - string",
              "Embarked: Port of embarkation - string ('S' = Southampton, 'C' = Cherbourg, 'Q' = Queenstown)"
            ]
          },
        ],
      },
      {
        id: "baseline",
        title: "2. Baseline Model & Score: Tutorial - Score: 0.77511",
        blocks: [
          {
            type: "text",
            content: [
              { text: "Used the provided model in the tutorial to get a baseline score. This is the score to beat." }
            ]
          },
          {
            type: "image",
            src: score1,
            alt: "Baseline Titanic model score",
            //description: "The initial Kaggle tutorial score used as the baseline to beat for the Titanic survival model."
          },
          {
            type: "text",
            content: [
              { text: "The tutorial uses a basic random forest model as shown here" }
            ]
          },
          {
            type: "image",
            src: tutorial,
            alt: "Titanic tutorial model output",
            description: "The model picks out four features, one hot encodes them, and uses very little hyperparameter tuning."
          }
        ]
      },
      {
        id: "data-prep",
        title: "3. Data Preparation",
        // blocks: [
        //   {
        //     type: "text",
        //     content: [
        //       { text: "Used the provided model in the tutorial to get a baseline score. This is the score to beat." }
        //     ]
        //   },
        //   {
        //     type: "image",
        //     src: score1,
        //     alt: "Baseline Titanic model score",
        //     //description: "The initial Kaggle tutorial score used as the baseline to beat for the Titanic survival model."
        //   },
        //   {
        //     type: "text",
        //     content: [
        //       { text: "The tutorial uses a basic random forest model as shown here" }
        //     ]
        //   },
        //   {
        //     type: "image",
        //     src: tutorial,
        //     alt: "Titanic tutorial model output",
        //     description: "The model picks out four features, one hot encodes them, and uses very little hyperparameter tuning."
        //   }
        // ]
      },
      {
        id: "x",
        title: "4. "
      },
      {
        id: "x",
        title: "5. "
      },
      {
        id: "x",
        title: "6. "
      },
      {
        id: "x",
        title: "7. "
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
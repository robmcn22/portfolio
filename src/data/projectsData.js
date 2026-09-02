import tutorialScore from "../assets/1.1 tutorialScore.PNG";
import tutorialModel from "../assets/1.2 tutorialModel.PNG";
import originalHead from "../assets/2.1 originalHead.PNG";
import title from "../assets/2.2 title.PNG";
import dropCols from "../assets/2.3 dropCols.PNG";
import nulls from "../assets/2.4 nulls.PNG";
import fill1 from "../assets/2.5 fill1.PNG";
import fill2 from "../assets/2.6 fill2.PNG";
import fill3 from "../assets/2.7 fill3.PNG";
import fixedNulls from "../assets/2.8 fixedNulls.PNG";
import familySize from "../assets/2.9 famSize.PNG";
import encode1 from "../assets/2.10 encode1.PNG";
import encode2 from "../assets/2.11 encode2.PNG";
import titleCounts from "../assets/2.12 titleCounts.PNG";
import fixedTitleCounts from "../assets/2.13 fixedTitleCounts.PNG";
import encode3 from "../assets/2.14 encode3.PNG";
import deckCounts from "../assets/2.15 deckCounts.PNG";
import encode4 from "../assets/2.16 encode4.PNG";
import finalHead from "../assets/2.17 finalHead.PNG";

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
        id: "tutorial",
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
            src: tutorialScore,
            alt: "Baseline Titanic model score",
          },
          {
            type: "text",
            content: [
              { text: "The tutorial uses a basic random forest model as shown here" }
            ]
          },
          {
            type: "image",
            src: tutorialModel,
            alt: "Titanic tutorial model output",
            description: "The model picks out four features, one hot encodes them, and uses very little hyperparameter tuning."
          }
        ]
      },
      {
        id: "data-prep",
        title: "3. Data Preparation",
        blocks: [
          {
            type: "text",
            content: [
              { text: "I prepared the Titanic data in stages so the models could work with clean, numeric features. I first inspected the original columns, then handled missing values, created useful features, and encoded categorical values." }
            ]
          },
          {
            type: "image",
            src: originalHead,
            alt: "Original Titanic dataset preview",
            description: "The original dataframe before preprocessing begins."
          },
          {
            type: "image",
            src: title,
            alt: "Titanic titles extracted from passenger names",
            description: "Passenger titles are extracted from names to preserve information about status and demographics."
          },
          {
            type: "image",
            src: dropCols,
            alt: "Titanic dataframe after dropping unused columns",
            description: "Identifier and text columns that are not directly useful to the model are removed."
          },
          {
            type: "text",
            content: [
              { type: "bold", text: "Handling missing values: " },
              { text: "I checked the remaining columns, filled missing entries with appropriate values, and verified that the nulls were resolved." }
            ]
          },
          {
            type: "image",
            src: nulls,
            alt: "Titanic dataframe showing missing values",
            description: "The null-value check identifies incomplete values that must be handled before training."
          },
          {
            type: "image",
            src: fill1,
            alt: "First Titanic missing-value fill step",
            description: "The first imputation operation fills a column with missing passenger information."
          },
          {
            type: "image",
            src: fill2,
            alt: "Second Titanic missing-value fill step",
            description: "The second imputation operation applies a consistent replacement value."
          },
          {
            type: "image",
            src: fill3,
            alt: "Third Titanic missing-value fill step",
            description: "The final targeted fill operation completes the initial missing-value cleanup."
          },
          {
            type: "image",
            src: fixedNulls,
            alt: "Titanic dataframe after missing values were fixed",
            description: "The dataframe after the missing-value checks and fill operations are complete."
          },
          {
            type: "text",
            content: [
              { type: "bold", text: "Feature engineering and encoding: " },
              { text: "I created family-size information, grouped rare titles, derived cabin-deck information, and converted categorical features into model-ready numeric values." }
            ]
          },
          {
            type: "image",
            src: familySize,
            alt: "Titanic family-size feature",
            description: "Family size is derived from the number of siblings, spouses, parents, and children aboard."
          },
          {
            type: "image",
            src: encode1,
            alt: "First Titanic categorical encoding step",
            description: "The first categorical feature is converted into a numeric representation."
          },
          {
            type: "image",
            src: encode2,
            alt: "Second Titanic categorical encoding step",
            description: "A second categorical encoding step prepares another feature for model input."
          },
          {
            type: "image",
            src: titleCounts,
            alt: "Titanic title frequency counts",
            description: "Title frequencies are examined so uncommon titles can be grouped consistently."
          },
          {
            type: "image",
            src: fixedTitleCounts,
            alt: "Titanic titles after grouping rare values",
            description: "Rare passenger titles are consolidated to reduce noise in the feature."
          },
          {
            type: "image",
            src: encode3,
            alt: "Titanic title encoding",
            description: "The cleaned title feature is encoded into a numeric value."
          },
          {
            type: "image",
            src: deckCounts,
            alt: "Titanic cabin deck counts",
            description: "Cabin letters are summarized as deck categories before encoding."
          },
          {
            type: "image",
            src: encode4,
            alt: "Titanic cabin deck encoding",
            description: "The deck category is converted into a numeric feature for the models."
          },
          {
            type: "text",
            content: [
              { text: "The final preview confirms that the cleaned and engineered features are present in a consistent format and ready for model training." }
            ]
          },
          {
            type: "image",
            src: finalHead,
            alt: "Final prepared Titanic dataset preview",
            description: "The completed feature set after cleaning, engineering, and categorical encoding."
          }
        ]
      },
      {
        id: "basic-dt",
        title: "4. Basic Decision Tree Model"
      },
      {
        id: "improved-dt",
        title: "5. Improved Decision Tree Model"
      },
      {
        id: "basic-rf",
        title: "6. Basic Random Forest Model"
      },
      {
        id: "improved-rf",
        title: "7. Improved Random Forest Model"
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
import { createElement as h } from "react";
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
import baseDTXY from "../assets/3.1 xAndY.PNG";
import baseDTModel from "../assets/3.2 createAndFitModel.PNG";
import baseDTPredictions from "../assets/3.3 predictModel.PNG";
import baseDTScore from "../assets/3.4 baseDTScore.PNG";
import gridSearchParams from "../assets/4.1 gridSearchParams.PNG";
import createGridSearch from "../assets/4.2 createGridSearch.PNG";
import gridSearchBestParams from "../assets/4.3 gridSearchBestParams.PNG";
import improvedDTModel from "../assets/4.4 fitDTWithBestParams.PNG";
import improvedDTScore from "../assets/4.5 improvedDTScore.PNG";
import baseRFXY from "../assets/5.1 xAndY.PNG";
import baseRFModel from "../assets/5.2 creatAndFitModel.PNG";
import baseRFPredictions from "../assets/5.3 predict.PNG";
import baseRFScore from "../assets/5.4 baseRFScore.PNG";
import improvedRFXY from "../assets/6.1 xAndY.PNG";
import improvedRFGridSearch from "../assets/6.2 gridSearch.PNG";
import improvedRFGridSearchFit from "../assets/6.3 gridSearchFit.PNG";
import improvedRFBestParams from "../assets/6.4 bestParams.PNG";
import improvedRFFit from "../assets/6.5 rfBestFit.PNG";
import improvedRFScore from "../assets/6.6 score.PNG";
import fareMissing from "../assets/7.1 naFare.PNG";
import fareFixed from "../assets/7.2 naFairFix.PNG";
import fareCheck from "../assets/7.3 showNaFairFix.PNG";
import baseGBXY from "../assets/7.4 xAndY.PNG";
import baseGBModel from "../assets/7.5 gbmBase.PNG";
import baseGBScore from "../assets/7.6 score.PNG";
import improvedGBParams from "../assets/8.1 gbParams.PNG";
import improvedGBBestParams from "../assets/8.2 gbBestParams.PNG";
import improvedGBFit from "../assets/8.3 gbBestFit.PNG";
import improvedGBScore from "../assets/8.4 score.PNG";
import baseXGModel from "../assets/9.1 baseXg.PNG";
import baseXGScore from "../assets/9.2 score.PNG";
import improvedXGParams from "../assets/10.1 xgbParams.PNG";
import improvedXGGrid from "../assets/10.2 xgbGrid.PNG";
import improvedXGBest from "../assets/10.3 bestXbg.PNG";
import improvedXGScore from "../assets/10.4 score.PNG";

const comparisonTable = (rows) =>
  h("div", { className: "overflow-x-auto" },
    h("table", { className: "w-full min-w-[520px] text-left text-sm" },
      h("thead", { className: "border-b border-gray-200 text-xs uppercase text-gray-500" },
        h("tr", null,
          h("th", { className: "px-3 py-3 font-semibold" }, "Metric"),
          h("th", { className: "px-3 py-3 font-semibold" }, "2024-25"),
          h("th", { className: "px-3 py-3 font-semibold" }, "2025-26"),
        ),
      ),
      h("tbody", { className: "divide-y divide-gray-100" },
        rows.map(([label, firstSeason, secondSeason]) =>
          h("tr", { key: label },
            h("th", { scope: "row", className: "px-3 py-3 font-medium text-gray-700" }, label),
            h("td", { className: "px-3 py-3 tabular-nums text-gray-700" }, firstSeason),
            h("td", { className: "px-3 py-3 tabular-nums text-gray-700" }, secondSeason),
          ),
        ),
      ),
    ),
  );

const dashboardSection = (summary, rows, note) =>
  h("div", { className: "space-y-6" },
    h("p", { className: "max-w-4xl leading-relaxed text-gray-700" }, summary),
    comparisonTable(rows),
    note ? h("p", { className: "text-sm text-gray-500" }, note) : null,
  );

export const projects = [
  {
    id: 1,
    title: "Kaggle Competition - Titanic (WIP)",
    layoutType: "linear",
    description: "Predictive model forecasting survival outcomes for passengers on the Titanic.",
    techStack: ["Python", "Pandas", "Machine Learning"],
    github: "https://github.com/robmcn22/portfolio/titanic-kaggle",
    live: "https://github.com/robmcn22/portfolio/blob/main/titanic-kaggle/titanic.ipynb",
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
        id: "data-prep", // REVIEW ***
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
        id: "basic-dt", // REVIEW ***
        title: "4. Basic Decision Tree Model",
        blocks: [
          {
            type: "text",
            content: [
              { text: "With the prepared features in place, I trained a basic decision tree as the first model built from the cleaned dataset. The feature matrix contains the input columns, while the target contains each passenger's survival outcome." }
            ]
          },
          {
            type: "image",
            src: baseDTXY,
            alt: "Decision tree feature matrix and target split",
            description: "The prepared data is separated into X, the passenger features used for prediction, and y, the survival target used during training."
          },
          {
            type: "image",
            src: baseDTModel,
            alt: "Basic decision tree model being created and fitted",
            description: "A decision tree classifier is created and fitted to the training data to learn rules for predicting survival."
          },
          {
            type: "image",
            src: baseDTPredictions,
            alt: "Basic decision tree predictions",
            description: "The fitted decision tree generates survival predictions for the held-out test data."
          },
          {
            type: "image",
            src: baseDTScore,
            alt: "Basic decision tree Kaggle score",
            description: "This submission score establishes the baseline for the decision-tree experiments that follow."
          }
        ]
      },
      {
        id: "improved-dt", // REVIEW ***
        title: "5. Improved Decision Tree Model",
        blocks: [
          {
            type: "text",
            content: [
              { text: "I improved the decision tree by searching across several hyperparameter combinations instead of relying on the classifier defaults. Grid search evaluates the candidate settings consistently and identifies the combination with the strongest validation performance." }
            ]
          },
          {
            type: "image",
            src: gridSearchParams,
            alt: "Decision tree grid search parameter ranges",
            description: "The parameter grid defines the tree settings to test, including its depth and the minimum samples required for splits and leaves."
          },
          {
            type: "image",
            src: createGridSearch,
            alt: "Decision tree grid search configuration",
            description: "GridSearchCV is configured to evaluate each parameter combination using cross-validation."
          },
          {
            type: "image",
            src: gridSearchBestParams,
            alt: "Best decision tree grid search parameters",
            description: "The search returns the parameter combination that performed best across the validation folds."
          },
          {
            type: "image",
            src: improvedDTModel,
            alt: "Improved decision tree fitted with best parameters",
            description: "A new decision tree is fitted using the best settings found by the grid search."
          },
          {
            type: "image",
            src: improvedDTScore,
            alt: "Improved decision tree Kaggle score",
            description: "The tuned decision tree produces the improved submission score shown here."
          }
        ]
      },
      {
        id: "basic-rf", // REVIEW ***
        title: "6. Basic Random Forest Model",
        blocks: [
          {
            type: "text",
            content: [
              { text: "I then trained a basic random forest to compare an ensemble of decision trees with the single-tree approach. The workflow keeps the same prepared features and target so the model comparison remains consistent." }
            ]
          },
          {
            type: "image",
            src: baseRFXY,
            alt: "Random forest feature matrix and target split",
            description: "The same prepared passenger features and survival target are split into X and y for the random forest."
          },
          {
            type: "image",
            src: baseRFModel,
            alt: "Basic random forest model being created and fitted",
            description: "A random forest classifier is created and fitted, combining many decision trees to make its predictions."
          },
          {
            type: "image",
            src: baseRFPredictions,
            alt: "Basic random forest predictions",
            description: "The fitted random forest predicts survival outcomes for the test passengers."
          },
          {
            type: "image",
            src: baseRFScore,
            alt: "Basic random forest Kaggle score",
            description: "This score shows how the untuned random forest performs against the earlier model baselines."
          }
        ]
      },
      {
        id: "improved-rf", // REVIEW ***
        title: "7. Improved Random Forest Model",
        blocks: [
          {
            type: "text",
            content: [
              { text: "To improve the random forest, I kept the prepared features and target consistent, then searched across multiple model settings with cross-validation. This made it possible to compare a broad set of ensemble configurations and select the strongest combination." }
            ]
          },
          {
            type: "image",
            src: improvedRFXY,
            alt: "Improved random forest feature matrix and target split",
            description: "The prepared Titanic data is separated into X, the passenger features used for prediction, and y, the survival target used to evaluate the model."
          },
          {
            type: "image",
            src: improvedRFGridSearch,
            alt: "Random forest grid search parameter ranges",
            description: "The parameter grid defines the random forest configurations to test, including tree depth, sample limits, feature selection, split criterion, and the number of trees."
          },
          {
            type: "image",
            src: improvedRFGridSearchFit,
            alt: "Random forest grid search fitting progress",
            description: "GridSearchCV evaluates each parameter combination across five cross-validation folds while the progress bar tracks the total model fits."
          },
          {
            type: "image",
            src: improvedRFBestParams,
            alt: "Best random forest grid search parameters",
            description: "The search identifies the best-performing random forest configuration, including 100 estimators, no maximum depth, a minimum leaf size of five, and a minimum split size of two."
          },
          {
            type: "image",
            src: improvedRFFit,
            alt: "Improved random forest fitted with best parameters",
            description: "The selected random forest estimator is fitted with the best parameters before generating predictions for the test passengers."
          },
          {
            type: "image",
            src: improvedRFScore,
            alt: "Improved random forest Kaggle score",
            description: "The final submission score shows the performance of the tuned random forest after the grid-search optimization."
          },
          {
            type: "text",
            content: [
              { text: "This model is the first one to achieve a higher accuracy score than the baseline tutorial model." }
            ]
          }
        ]
      },
      {
        id: "base-gradient-boost", // REVIEW ***
        title: "8. Base Gradient Boost",
        blocks: [
          {
            type: "text",
            content: [
              { text: "Before training the gradient boosting model, I found one missing value in the Fare column. I replaced it with the median fare calculated from the training data, then verified that the missing value had been resolved." }
            ]
          },
          {
            type: "image",
            src: fareMissing,
            alt: "Titanic dataset showing a missing Fare value",
            description: "The Fare column contains one missing value that must be handled before fitting the gradient boosting classifier."
          },
          {
            type: "image",
            src: fareFixed,
            alt: "Titanic Fare value filled with the training median",
            description: "The missing Fare entry is replaced with the median fare from the training data so the feature remains numeric and representative."
          },
          {
            type: "image",
            src: fareCheck,
            alt: "Titanic Fare column after missing-value fix",
            description: "A follow-up check confirms that the Fare column no longer contains a missing value."
          },
          {
            type: "image",
            src: baseGBXY,
            alt: "Gradient boosting feature matrix and target split",
            description: "The prepared passenger features are assigned to X and the survival outcomes are assigned to y for supervised learning."
          },
          {
            type: "image",
            src: baseGBModel,
            alt: "Base gradient boosting model being fitted",
            description: "A GradientBoostingClassifier is created and fitted to the cleaned training data before predicting the test passengers."
          },
          {
            type: "image",
            src: baseGBScore,
            alt: "Base gradient boosting Kaggle score",
            description: "The submission score records the performance of the untuned gradient boosting classifier."
          },
        ]
      },
      {
        id: "improved-gradient-boost", // REVIEW ***
        title: "9. Improved Gradient Boost",
        blocks: [
          {
            type: "text",
            content: [
              { text: "I improved the gradient boosting model by testing combinations of estimators, learning rates, tree depth, and subsampling with five-fold cross-validation. The best configuration was then fitted to the full prepared training data before generating the final submission." }
            ]
          },
          {
            type: "image",
            src: improvedGBParams,
            alt: "Gradient boosting grid search parameter ranges",
            description: "The parameter grid defines the gradient boosting configurations to compare, including the number of estimators, learning rate, tree depth, and subsampling ratio."
          },
          {
            type: "image",
            src: improvedGBBestParams,
            alt: "Best gradient boosting parameters",
            description: "The cross-validated search reports the parameter combination that produced the strongest validation accuracy."
          },
          {
            type: "image",
            src: improvedGBFit,
            alt: "Improved gradient boosting model fitted with best parameters",
            description: "The best gradient boosting estimator is fitted to the prepared training data and used to predict survival for the test set."
          },
          {
            type: "image",
            src: improvedGBScore,
            alt: "Improved gradient boosting Kaggle score",
            description: "The final submission score shows the performance of the tuned gradient boosting model."
          },
        ]
      },
      {
        id: "base-xgboost", // REVIEW ***
        title: "10. Base XGBoost",
        blocks: [
          {
            type: "image",
            src: baseXGModel,
            alt: "Base XGBoost model",
            description: "The base XGBoost classifier is created and fitted to the prepared Titanic training data."
          },
          {
            type: "image",
            src: baseXGScore,
            alt: "Base XGBoost Kaggle score",
            description: "The submission score records the performance of the untuned XGBoost classifier."
          },
        ]
      },
      {
        id: "improved-xgboost", // REVIEW ***
        title: "11. Improved XGBoost",
        blocks: [
          {
            type: "image",
            src: improvedXGParams,
            alt: "XGBoost grid search parameters",
            description: "The parameter grid defines the XGBoost configurations to compare during tuning."
          },
          {
            type: "image",
            src: improvedXGGrid,
            alt: "XGBoost grid search",
            description: "The grid search evaluates the configured XGBoost parameter combinations."
          },
          {
            type: "image",
            src: improvedXGBest,
            alt: "Best XGBoost model",
            description: "The best-performing XGBoost configuration is selected from the grid search results."
          },
          {
            type: "image",
            src: improvedXGScore,
            alt: "Improved XGBoost Kaggle score",
            description: "The final submission score shows the performance of the tuned XGBoost classifier."
          },
        ]
      },
    ]
  },
   {
     id: 2,
    title: "Liverpool: 2024-25 vs 2025-26",
     layoutType: "linear",
    description: "A 38-match Premier League comparison of Liverpool's title-winning and follow-up seasons.",
    techStack: ["Python", "Pandas", "Data Analysis"],
     github: "https://github.com/robmcn22/portfolio/tree/main/liverpool",
     live: "https://github.com/robmcn22/portfolio/blob/main/liverpool/liverpool.ipynb",
     stages: [
        {
          id: "goal",
          title: "1. Question & scope",
          content: [
            { type: "bold", text: "Objective: " },
            { text: "Compare Liverpool's 2024-25 title-winning Premier League season with 2025-26 to identify what changed alongside the fall in results. The analysis covers all 38 league fixtures in each season and focuses on results, shooting, defensive activity, possession, and discipline." }
          ]
        },
        {
          id: "data",
          title: "2. Data & perspective",
          content: [
            { type: "bold", text: "Sources: " },
            { text: "Seven match-level tables per season: scores and fixtures, shooting for/against, keeping for/against, and misc for/against. The .xls were exported from fbref and were read as HTML tables into pandas dataframes." },
            { type: "break" },
            { type: "bold", text: "Reading the paired tables: " },
            { text: "The comparison checks dates and opponent names across both perspectives and the fixture table before calculating per-match rates." }
          ]
        },
        {
          id: "method",
          title: "3. Method & validation",
          content: [
            { type: "list", items: [
              "Use the 38 fixture rows for match results, goals, possession, and clean sheets.",
              "Exclude aggregate footer rows from shooting tables by keeping rows with a match date.",
              "Aggregate misc stats from matched fixture rows, keeping Liverpool and opponent values distinct; zero-impute missing offsides.",
              "Compare season totals and per-match rates; split activity summaries into wins and matches where points were dropped."
            ] },
            { type: "break" },
            { type: "bold", text: "Goal totals: " },
            { text: "Fixture goals are kept separate from goals credited in the shooting tables because own-goal attribution can make those counts differ." }
          ]
        },
        {
          id: "findings",
          title: "4. What changed",
          content: [
            { type: "list", items: [
              "Results declined from 84 points (25-9-4) to 60 (17-9-12); goal difference fell from +45 to +10.",
              "Shots on target fell 24%, from 231 to 175, and their share of shots dropped from 35.7% to 29.8%.",
              "Liverpool's tackles won decreased from 10.50 to 8.08 per match and interceptions from 7.71 to 6.58; opponents' interceptions rose from 8.16 to 9.08.",
              "Liverpool recorded more crosses and offsides despite fewer shots. In 2025-26, crosses averaged 23.29 in matches where points were dropped versus 16.06 in wins.",
              "Liverpool's penalties scored/attempted fell from 9/9 to 1/2; opponents rose from 1/2 to 3/4. Liverpool's keeper faced 2 then 4 penalties, saving 1 in each season.",
              "Liverpool fouls and yellow cards decreased, while average possession edged up from 58.1% to 59.3%."
            ] }
          ]
        },
        {
          id: "caveats",
          title: "5. Caveats",
          content: [
            { text: "The workbooks contain no expected-goals data, and many other advanced metrics that can help identify tactical underlying causes rather than purely statistical ones."}
          ]
        },
        {
          id: "takeaways",
          title: "5. Takeaways",
          content: [
            { text: "Arne Slot prioritized possession, but the team experiencing less efficient chance creation and giving up significantly more counter attacks in 25-26 are the main reasons behind the poorer results." }
          ]
        }
     ],
     dashboardData: {
       kpis: [
         { label: "League points · 24-25 → 25-26", value: "84 → 60" },
         { label: "Goal difference · 24-25 → 25-26", value: "+45 → +10" },
         { label: "Shots on target / match", value: "6.1 → 4.6" },
       ],
       tabs: [
         {
           id: "season",
           label: "Season summary",
           content: dashboardSection(
             "Liverpool earned 24 fewer points in 2025-26. The title-winning season's 25 wins became 17, while losses rose from 4 to 12. Goal difference fell by 35, from +45 to +10.",
             [
               ["League record (W-D-L)", "25-9-4", "17-9-12"],
               ["Points", "84", "60"],
               ["Points per match", "2.21", "1.58"],
               ["Goals for", "86", "63"],
               ["Goals against", "41", "53"],
               ["Goal difference", "+45", "+10"],
             ],
             "Scope: 38 Premier League fixtures in each season."
           ),
         },
         {
           id: "attack",
           label: "Attacking",
           content: dashboardSection(
             "Shot volume declined by 9%, but shots on target fell by 24%. The share of shots on target dropped 5.9 percentage points, alongside a lower shot conversion rate.",
             [
               ["Goals scored", "86", "63"],
               ["Goals per match", "2.26", "1.66"],
               ["Shots", "647", "588"],
               ["Shots per match", "17.0", "15.5"],
               ["Shots on target", "231", "175"],
               ["Shots on target per match", "6.1", "4.6"],
               ["Shots on target share", "35.7%", "29.8%"],
               ["Shot conversion", "13.1%", "10.4%"],
             ],
             "Shot conversion uses goals credited in the shooting tables divided by total shots. Fixture goals are shown separately because own-goal attribution can make the totals differ.",
           ),
         },
         {
           id: "defence",
           label: "Defence & possession",
           content: dashboardSection(
             "Liverpool conceded 12 more goals and allowed 48 more shots. Average possession increased by 1.2 percentage points, so the weaker results coincided with less efficient chance creation and a higher defensive workload, not a loss of possession.",
             [
               ["Goals against", "41", "53"],
               ["Goals against per match", "1.08", "1.39"],
               ["Opposition shots", "387", "435"],
               ["Opposition shots per match", "10.2", "11.4"],
               ["Opposition shots on target", "141", "153"],
               ["Opposition shots on target per match", "3.7", "4.0"],
               ["Clean sheets", "14", "10"],
               ["Average possession", "58.1%", "59.3%"],
             ],
           ),
         },
         {
           id: "activity",
           label: "Activity & discipline",
           content: dashboardSection(
             "The paired misc tables show fewer Liverpool tackles won and interceptions in 2025-26, while opponents recorded more interceptions. Liverpool crossed slightly more often and were flagged offside more often despite taking fewer shots. Fouls committed and yellow cards fell, so the data do not support rising indiscipline as an explanation for the poorer results.",
             [
               ["Liverpool fouls committed / match", "11.32", "10.11"],
               ["Liverpool fouls drawn / match", "9.45", "10.18"],
               ["Opponent fouls committed / match", "9.76", "10.63"],
               ["Liverpool yellow cards / match", "1.76", "1.50"],
               ["Opponent yellow cards / match", "2.21", "2.13"],
               ["Liverpool penalties scored / attempts", "9 / 9", "1 / 2"],
               ["Liverpool penalty conversion", "100%", "50%"],
               ["Opponents penalties scored / attempts", "1 / 2", "3 / 4"],
               ["Opponent penalty conversion", "50%", "75%"],
               ["Liverpool keeper penalties faced", "2", "4"],
               ["Liverpool keeper penalties conceded", "1", "3"],
               ["Liverpool keeper penalties saved", "1", "1"],
               ["Liverpool keeper penalties missed", "0", "0"],
               ["Liverpool crosses / match", "19.08", "20.05"],
               ["Liverpool offsides / match", "1.58", "2.00"],
               ["Liverpool interceptions / match", "7.71", "6.58"],
               ["Opponent interceptions / match", "8.16", "9.08"],
               ["Liverpool tackles won / match", "10.50", "8.08"],
               ["Opponent tackles won / match", "10.45", "9.84"],
             ],
           ),
         },
       ]
     }
   }
];
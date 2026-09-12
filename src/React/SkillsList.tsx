import React, { useState } from "react";

const CategoryIcons: Record<string, React.ReactNode> = {
  // Data Engineering: database / pipeline
  "Data Engineering": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-6 h-6 text-[var(--sec)] opacity-70 flex-shrink-0"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v7c0 1.657 3.582 3 8 3s8-1.343 8-3V5" />
      <path d="M4 12v7c0 1.657 3.582 3 8 3s8-1.343 8-3v-7" />
    </svg>
  ),
  // Data Analysis: bar chart
  "Data Analysis": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="w-6 h-6 text-[var(--sec)] opacity-70 flex-shrink-0"
    >
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 20v-6" />
      <path d="M13 20V9" />
      <path d="M18 20v-9" />
    </svg>
  ),
  // Data Science: nodes / model
  "Data Science": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-6 h-6 text-[var(--sec)] opacity-70 flex-shrink-0"
    >
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
      <path d="M6.7 7.2 10.3 10.8M6.7 16.8l3.6-3.6M14 12h3" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Data Engineering": [
      "Batch pipelines in Python and SQL (ingestion, transformation, load)",
      "Medallion lakehouse architecture (Bronze / Silver / Gold)",
      "PySpark, Delta Lake, Parquet and partitioned object storage (S3 / MinIO)",
      "Dimensional modelling (Kimball, star schema, SCD Type 2)",
      "dbt Core for the semantic layer and automated data tests",
      "Orchestration with Apache Airflow; containers with Docker Compose",
    ],
    "Data Analysis": [
      "Exploratory data analysis and data cleaning",
      "Data quality: control-total reconciliation and referential integrity",
      "Entity resolution and fuzzy matching across sources",
      "Power BI dashboards and advanced Excel models",
      "Commercial analytics: sales by territory, market sizing, quota tracking",
    ],
    "Data Science": [
      "Causal impact modelling (fixed effects, propensity score matching)",
      "Gradient boosting models (LightGBM) with SHAP interpretability",
      "Predictive analytics on large panel datasets",
      "Translating business questions into measurable requirements",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9 w-full lg:w-auto">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="lg:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-base sm:text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 overflow-hidden ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;

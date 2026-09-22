// Single source of truth for projects: used by the cards on the home page
// and by the header / "More projects" block of every project page.

export interface Project {
  // page lives at /projects/<slug>
  slug: string;
  title: string;
  repo: string;
  status: string;
  description: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: "pharma-analytics-hub",
    title: "Pharma Commercial Analytics Hub",
    repo: "https://github.com/MendezFernando/pharma-analytics-hub-case-study",
    status: "Professional work",
    description:
      "Replaced a 6–8 hour monthly process with a system that ingests four pharmaceutical market audits, validates them with severity-aware rules and publishes every report in ~20 minutes.",
    stack: ["Python", "pandas", "Excel", "xlsxwriter", "TOML", "CLI", "Git", "Automated tests"],
  },
  {
    slug: "marketplace-data-platform",
    title: "Marketplace Data Platform",
    repo: "https://github.com/MendezFernando/marketplace-data-platform",
    status: "Personal project · 2026",
    description:
      "End-to-end medallion lakehouse over the real Olist dataset: PySpark + Delta Lake on AWS S3, a Kimball star schema with SCD Type 2, 33 data tests in dbt, an Airflow DAG of 14 tasks and a Power BI dashboard on top.",
    stack: ["Python", "PySpark", "Delta Lake", "dbt", "Airflow", "AWS", "PostgreSQL", "Docker", "FastAPI", "Power BI"],
  },
  {
    slug: "medical-sample-allocation",
    title: "Medical Sample Allocation",
    repo: "https://github.com/MendezFernando/medical-sample-allocation",
    status: "Econometric study",
    description:
      "Separates the effect of free drug samples from sales-force targeting bias on 2.36M physician-level observations, and turns it into a budget-neutral plan: +54.9% incremental prescriptions.",
    stack: ["Python", "pandas", "statsmodels", "linearmodels", "LightGBM", "SHAP"],
  },
];

// tool name -> file in public/svg (tools without a logo show text only)
const icons: Record<string, string> = {
  Python: "python",
  PySpark: "spark",
  "Delta Lake": "delta-lake",
  dbt: "dbt",
  PostgreSQL: "postgresql",
  Docker: "docker",
  Airflow: "airflow",
  AWS: "aws",
  FastAPI: "fastapi",
  "Power BI": "power bi",
  "MinIO (S3)": "minio",
  pytest: "pytest",
  Excel: "excel",
  Git: "git",
};

export const iconFor = (tool: string): string | null =>
  icons[tool] ? `/svg/${icons[tool]}.svg` : null;

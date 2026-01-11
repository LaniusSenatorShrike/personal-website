export const cvContent = {
  title: "Experience",
  pdfUrl: "",
  skills: {
    title: "Technical Skills",
    items: [
      "Python (Pandas, Polars, Scikit)", "SQL", "dbt (Jinja, macros)", "Apache Kafka", "Airflow", "Terraform/Terragrunt",
      "Databricks", "AWS (S3, EC2, Lambda, Athena)", "GCP (BigQuery, Cloud Function, Cloud Run, Vertex AI)",
      "Azure (Synapse, Data Lake, Data Factory)", "Looker/LookML", "PowerBI", "Tableau",
      "Docker", "Kubernetes", "PostgreSQL", "Jenkins", "GitHub Actions", "Datadog"
    ]
  },
  experience: [
    {
      id: 1,
      company: "Marktplaats (eBay/Adevinta/Blackstone)",
      role: "Tech Lead, Data & Analytics Engineering - Marketing",
      period: "Jan 2023 – Present",
      location: "Amsterdam, Netherlands",
      highlights: [
        "Lead a team of data and analytics engineers delivering insights for second-hand marketplaces (Leboncoin, Marktplaats, mobile.de, Kleinanzeigen)",
        "Designed multi-tenant hybrid notification middleware using Apache Kafka sending 10M+ push/in-app notifications per hour",
        "Architected end-to-end GDPR middleware handling ~1K daily DDR and SAR requests for Marketing Data Hub",
        "Led eBay Kleinanzeigen rebranding: +67M emails and +30M push notifications to +30M users, achieving 115% MoM growth in CRM MAU",
        "Built Gen-AI based Marketing Segmentation Platform using AWS Bedrock with Anthropic model",
        "Built Paid digital reporting dashboard based on Google Analytics (GA4) and Northstar metric dashboard on Looker"
      ],
      tech: ["Databricks", "GCP BigQuery", "AWS S3/Lambda", "Apache Kafka", "Airflow", "dbt", "Looker/LookML", "Terraform", "Datadog"]
    },
    {
      id: 2,
      company: "REEF Technology",
      role: "Sr. Analytics Engineer, Retail & Logistics Analytics",
      period: "2022 – 2023",
      location: "Amsterdam, Netherlands",
      highlights: [
        "Worked on proximity-as-a-service (PaaS) and last mile delivery services",
        "Designed and implemented dashboards that saved $2M monthly for supply chain and operations wastage",
        "Professional with supply chain and retail analytics KPIs and business operations",
        "Developed and deployed on Azure ecosystem: Synapse, Azure Data Lake Store and Azure Data Factory"
      ],
      tech: ["Databricks", "Azure Data Lake", "Azure Synapse", "Azure Data Factory", "Azure DevOps"]
    },
    {
      id: 3,
      company: "Agah Broker (ASA)",
      role: "BI Developer | Machine Learning Engineer (Recommender Systems)",
      period: "2021 – 2022",
      location: "Tehran, Iran",
      highlights: [
        "Fintech firm licensed by Tehran Stock Exchange providing stock market services",
        "Applied SVD++ matrix factorization for recommender system on cos.net.au achieving 7x increase in sales",
        "Developed hybrid Collaborative/Content-based filtering recommender system using SQL Server ML Services",
        "Designed Data Vault model (Hub, Link, Satellite) for DW that escalated dev speed and flexibility",
        "Dashboard design using PowerBI and Qlikview over financial market data"
      ],
      tech: ["Python", "SQL Server ML Services", "PowerBI", "Qlikview", "DAX", "SSAS", "REST APIs"]
    },
    {
      id: 4,
      company: "System Group (Hamkaran System)",
      role: "Business Intelligence Consultant",
      period: "2019 – 2021",
      location: "Tehran, Iran",
      highlights: [
        "Middle East's largest private software development company - BI team lead",
        "Hands-on experience with T-SQL, DAX and MS stack (SSIS, SSAS, SSRS, SSDT)",
        "Designed ETL/Process across DW/OLAP cubes",
        "Performance dashboards design",
        "Expert in Agile methodologies, specializing in incremental development"
      ],
      tech: ["T-SQL", "DAX", "SSIS", "SSAS", "SSRS", "SSDT", "PowerBI"]
    }
  ],
  education: {
    degree: "M.Sc. Electrical Engineering, Machine Learning & AI",
    university: "K. N. Toosi University of Technology",
    thesis: "Algorithmic Model Optimization under Uncertainty",
    period: "2014 – 2017"
  },
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon AWS",
      year: "2024"
    },
    {
      name: "dbt Fundamentals (dbt 101)",
      issuer: "dbt Labs",
      year: "2022"
    },
    {
      name: "Data Science and Machine Learning: Python and R",
      issuer: "Udemy",
      year: "2018"
    },
    {
      name: "Agile Scrum Workshop",
      issuer: "Workshop",
      year: "2018"
    }
  ],
  achievements: [
    {
      name: "Innovation Award in Solutions & Services",
      event: "Adevinta Ignite",
      location: "Barcelona",
      year: "2024"
    }
  ],
  languages: [
    { language: "English", level: "C2 (Fluent, IELTS Speaking: 8/9, GRE: 327/340)" },
    { language: "Dutch", level: "A2 (Conversatie)" },
    { language: "French", level: "A1" },
    { language: "Persian", level: "Native" }
  ]
};

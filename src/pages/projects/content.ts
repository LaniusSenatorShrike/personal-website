export const projectsContent = {
  title: "Projects",
  categories: ["All", "Data", "AI", "Cloud"],
  projects: [
    {
      id: 1,
      title: "Event Processing at Scale (10M+ events/hour)",
      category: "Data",
      description: "Led architecture and implementation of high-throughput event processing system handling 10M+ events per hour with <10ms latency. Built with Kafka Streams, Databricks, and AWS infrastructure for Marktplaats.",
      impact: "10M events/hour, 99.9% uptime, €2M+ value realized",
      tech: ["Kafka", "Python", "Databricks", "AWS", "PostgreSQL", "Airflow"],
      github: "",
      demo: ""
    },
    {
      id: 2,
      title: "Data Privacy & GDPR Compliance Platform",
      category: "Data",
      description: "Architected and led implementation of automated data privacy platform processing 1,000+ daily data subject requests with full audit trails and 100% compliance certification.",
      impact: "1K daily requests, 100% GDPR compliance, ISO 27001 certified",
      tech: ["Airflow", "dbt", "PostgreSQL", "Python", "Terraform", "AWS"],
      github: "",
      demo: ""
    },
    {
      id: 3,
      title: "Marktplaats Rebranding Email Delivery",
      category: "Cloud",
      description: "Orchestrated email delivery system for 67M users during major platform rebrand (Kleinanzeigen → Marktplaats) with zero downtime and 98% delivery rate.",
      impact: "67M emails delivered, 98% delivery rate, zero downtime",
      tech: ["AWS SES", "Airflow", "Python", "Terraform", "Monitoring"],
      github: "",
      demo: ""
    },
    {
      id: 4,
      title: "ETL Data Pipeline Framework",
      category: "Data",
      description: "Built scalable ETL framework processing 500GB+ daily using Airflow orchestration and dbt transformations. Standardized data pipelines across organization reducing time-to-insight by 60%.",
      impact: "500GB/day processed, €2M saved, 60% faster analytics",
      tech: ["Airflow", "dbt", "Spark", "Snowflake", "Python", "AWS"],
      github: "",
      demo: ""
    },
    {
      id: 5,
      title: "Real-time Analytics & Data Warehouse",
      category: "Data",
      description: "Designed and implemented real-time data warehouse supporting 500+ analysts with sub-second query performance on petabyte-scale data using Databricks and ClickHouse.",
      impact: "<1s query latency, 500+ users, PB-scale data",
      tech: ["Databricks", "ClickHouse", "dbt", "SQL", "Python", "AWS"],
      github: "",
      demo: ""
    },
    {
      id: 6,
      title: "Technical Leadership & Team Development",
      category: "AI",
      description: "Led cross-functional engineering teams (12+ members) managing data strategy, architecture decisions, and technical mentoring. Established best practices for data quality, documentation, and knowledge sharing.",
      impact: "12+ engineers, 300+ dbt models maintained, 95% code review quality score",
      tech: ["Leadership", "dbt", "Python", "Airflow", "SQL", "AWS", "Team Management"],
      github: "",
      demo: ""
    }
  ]
};

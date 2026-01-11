export const projectsContent = {
  title: "Projects",
  categories: ["All", "Data Engineering", "Analytics", "ML/AI"],
  projects: [
    {
      id: 1,
      title: "Multi-Tenant Hybrid Notification Middleware",
      category: "Data Engineering",
      description: "Designed and implemented a notification middleware using Apache Kafka that sends up to 10M push/in-app notifications per hour to Knocker/Batch API endpoints. Triggered by Adobe Campaign and Salesforce Marketing Cloud for marketing campaigns.",
      impact: "10M notifications/hour, multi-tenant architecture, real-time delivery",
      tech: ["Apache Kafka", "Python", "Adobe Campaign", "Salesforce Marketing Cloud", "AWS"],
      github: "",
      demo: ""
    },
    {
      id: 2,
      title: "End-to-End GDPR Middleware for Marktplaats",
      category: "Data Engineering",
      description: "Architected and implemented GDPR middleware handling ~1K daily DDR (Data Deletion Request) and SAR (Subject Access Request) to manage PII data in Marketing Data Hub with full compliance.",
      impact: "~1K daily requests, 100% GDPR compliance, automated PII management",
      tech: ["Python", "Airflow", "dbt", "GCP BigQuery", "Terraform"],
      github: "",
      demo: ""
    },
    {
      id: 3,
      title: "eBay Kleinanzeigen Rebranding Communication",
      category: "Analytics",
      description: "Led the data engineering effort for Kleinanzeigen rebranding campaign: +67M emails and +30M push notifications sent to +30M users in Germany, resulting in 115% Month-over-Month growth in CRM Monthly Active Users.",
      impact: "+67M emails, +30M push notifications, 115% MoM MAU growth",
      tech: ["Apache Kafka", "Airflow", "AWS SES", "Databricks", "Looker"],
      github: "",
      demo: ""
    },
    {
      id: 4,
      title: "Gen-AI Marketing Segmentation Platform",
      category: "ML/AI",
      description: "Building Gen-AI based Marketing Segmentation Platform using AWS Bedrock with Anthropic model for intelligent customer segmentation and personalized marketing campaigns.",
      impact: "AI-powered segmentation, personalized targeting, automated insights",
      tech: ["AWS Bedrock", "Anthropic Claude", "Python", "dbt", "Looker"],
      github: "",
      demo: ""
    },
    {
      id: 5,
      title: "Supply Chain Analytics Dashboards (REEF)",
      category: "Analytics",
      description: "Designed and implemented a series of dashboards for proximity-as-a-service and last mile delivery operations that saved $2M monthly for supply chain and operations wastage.",
      impact: "$2M monthly savings, supply chain optimization, operational efficiency",
      tech: ["Databricks", "Azure Synapse", "Azure Data Lake", "Azure Data Factory", "PowerBI"],
      github: "",
      demo: ""
    },
    {
      id: 6,
      title: "Recommender System (7x Sales Increase)",
      category: "ML/AI",
      description: "Applied matrix factorization method SVD++ for implementing model-based Collaborative Filtering recommender system on Australian retailer cos.net.au. Developed hybrid Collaborative/Content-based filtering system using SQL Server ML Services.",
      impact: "7x increase in sales, hybrid recommendation engine, cold start solution",
      tech: ["Python", "SQL Server ML Services", "SVD++", "Collaborative Filtering", "REST APIs"],
      github: "",
      demo: ""
    }
  ]
};

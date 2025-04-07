import { Injectable } from '@angular/core';

export type Highlight = { category: string, text: string, hidden?: boolean }
export type Skill = { name: string, hidden?: boolean }

@Injectable({
  providedIn: 'root'
})
export class MyHighlightsService {

  highlights: Highlight[] = [
    { category: 'Development', text: "Authored 1M+ lines of code in Java, Scala, Perl, TypeScript, Python, Go and more" },
    { category: 'CI/CD', text: "Led team through adoption of multiple tools; inc. Jenkins, uDeploy, Harness, Blackduck, Checkmarx, etc." },
    { category: 'Software Design', text: "20+ years doing software design; from object-oriented to clean-architecture, to TDD and more" },
    { category: 'Code Performance', text: "Wrote a Nagios NRPE server in Java that was 100x faster than the original C daemon" },
    { category: 'Test Coverage', text: "Drove test coverage up 20% on a heritage project and coached the team to achieve >90% on new code" },
    { category: 'Multi-threading', text: "Developed a job-queue system w/ configurable threadpools and a thread-safe 'worker' type model" },
    { category: 'Observability', text: "Delivered event-copying software in Java using Netty+Reactor achieving 10k events/second" },
    { category: 'Storage', text: "Developed solutions backed by SQL, NoSQL, object-storage, caching, and more" },
    { category: 'Technical Leadership', text: "Regularly provide 1-1 coaching to peers on technical decisioning and problem-solving" },
    { category: 'Data Pipelining', text: "Developed ETL pipeline w/ Cribl+Kafka+Java+MongoDB to process 1.5TB/day of security data" },
    { category: 'Software Delivery', text: "Owned and delivered 50+ individual software and tech solutions; inception to production" },
    { category: 'Enterprise Architecture', text: "Drove design best-practices as part of a large platform modernization" },
    { category: 'Build Systems', text: "Migrated a large Eclipse PDE project entirely to Gradle w/o any impact to developer productivity" },
    { category: 'Scaling', text: "Implemented sharding in an existing application to spread data across separate MySQL nodes" },
    { category: 'Backend Development', text: "Developed backend apps/APIs in JEE, Spring and Catalyst w/ AuthN/AuthZ integrations" },
    { category: 'Frontend Development', text: "Developed SPA frontends using both AngularJS and Angular 2+" },
    { category: 'Project Management', text: "Regular participant in roadmap/project planning and milestone tracking" },
    { category: 'API Design/Development', text: "Built microservice API components that became the prototype for the rest of team" },
    { category: 'Public/Private Cloud', text: "First in our team to deliver microservice component into production Tanzu environment" },
    { category: 'AuthN/AuthZ', text: "Developed application-level RBAC and OIDC integration with outside OAuth system (PING)" },
    { category: 'Desktop Development', text: "Developed 3D mapping application using Eclipse RCP and the NASA World Wind API" },
    { category: 'Agile', text: "Integral to my team's own agile journey; advocating to management for Kanban to match our work model" },
    { category: 'Logging Solutions', text: "Delivered a PCI Level-1 compliant logging framework using commodity tools syslog-ng and MySQL" },
  ]

  skills: Skill[] = [
    { name: "Java" },
    { name: "Scala" },
    { name: "Groovy" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Go" },
    { name: "Perl" },
    { name: "Python" },
    { name: "Gradle" },
    { name: "JUnit" },
    { name: "CI/CD" },
    { name: "Software Design & Testing" },
    { name: "Spring/JEE" },
    // { name: "DNS/HTTP/SSL/TLS" },
    { name: "Apigee" },
    { name: "SDLC tools and practices" },
    { name: "Github" },
    { name: "Code Security/SAST/SCA" },
    { name: "GCP" },
    { name: "Jenkins" },
    { name: "Team lead/coach" },
    // { name: "SSH/SFTP/SCP" },
    // { name: "Capacity Planning" },
    { name: "Harness" },
    { name: "Full-stack development" },
    { name: "ETL" },
    { name: "MySQL"},
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "SOA & REST" },
    { name: "RDBMS & SQL" },
    { name: "Crypto libraries/algorithms" },
    { name: "Angular" },
    // { name: "TCP/IP" },
    { name: "IAM/OAuth/OIDC" },
    { name: "Checkmarx" },
    { name: "Black Duck" },
    { name: "Message Queues & Kafka" },
    { name: "Reactive Programming" },
    { name: "DevOps" },
    { name: "Microservices" },
    { name: "AWS" },
    { name: "Splunk" },
    { name: "Netty" },
    { name: "Docker" },
    { name: "Observability/Monitoring" },
    { name: "Automation/Scripting" }
  ]

  constructor() { }
}

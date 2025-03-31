import { Injectable } from '@angular/core';

export type Highlight = { category: string, text: string, hidden?: boolean }
export type Skill = { name: string, hidden?: boolean }

@Injectable({
  providedIn: 'root'
})
export class MyHighlightsService {

  highlights: Highlight[] = [
    { category: 'Development', text: "Authored 1M+ lines of code in Java, Scala, Perl, TypeScript, Python, Go and more" },
    { category: 'CI/CD', text: "5+ years with enterprise CI/CD tools; inc. Jenkins, uDeploy, Harness, Blackduck, Checkmarx, etc." },
    { category: 'Software Design', text: "20+ years doing software design; from object-oriented to clean-architecture, to TDD and more" },
    { category: 'Code Performance', text: "Wrote a Nagios NRPE server in Java that was 100s of times faster than the original C daemon" },
    { category: 'Test Coverage', text: "Drove test coverage up 20% on a heritage project and coached the team to achieve >90% on new code" },
    { category: 'Observability Solutioning', text: "Delivered event-copying software in Java using Netty+Reactor achieving 10k events/second" },
    { category: 'Storage', text: "Developed solutions backed by SQL, NoSQL, object-storage, caching, and more" },
    { category: 'Technical Leadership', text: "Regularly provide 1-1 coaching to peers on technical decisioning and problem-solving" },
    { category: 'Data Pipelining', text: "Developed ETL pipeline w/ Cribl+Kafka+Java+MongoDB to process 1.5TB/day from a security platform" },
    { category: 'Software Delivery', text: "Owned and delivered 50+ individual software and tech solutions" },
    { category: 'Enterprise Architecture', text: "Designed and developed entire full-stack applications as well as more modern microservice APIs" },
    { category: 'FrontEnd Development', text: "Worked with server-side and client-side models and tools, inc. 8+ years with Angular" },
    { category: 'Project Management', text: "Regular participant in roadmap/project planning and milestone tracking" },
    { category: 'API Design/Development', text: "Built microservice API components in Springboot that became the prototype for the rest of team" },
    { category: 'Public/Private Cloud', text: "First in our team to deliver microservice component into on-prem production Tanzu environment" },
    { category: 'AuthN/AuthZ', text: "Developed application-level RBAC and OIDC integration with outside OAuth system (PING)" },
  ]

  skills: Skill[] = [
    { name: "Java" },
    { name: "Scala" },
    { name: "Groovy" },
    { name: "Perl" },
    { name: "CI/CD" },
    { name: "Software Design & Testing" },
    { name: "Spring" },
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
    { name: "SOA & REST" },
    { name: "RDBMS & SQL" },
    { name: "Python" },
    { name: "Crypto libraries/algorithms" },
    { name: "Angular" },
    // { name: "TCP/IP" },
    { name: "IAM/OAuth/OIDC" },
    { name: "Checkmarx" },
    { name: "Black Duck" },
    { name: "Kafka" },
    { name: "Reactive Programming" },
    { name: "DevOps" },
    { name: "Microservices" },
    { name: "AWS" },
    { name: "Golang" },
    { name: "Netty" },
    { name: "Docker" },
    { name: "Observability/Monitoring" },
    { name: "MongoDB" },
    { name: "Automation/Scripting" }
  ]

  constructor() { }
}

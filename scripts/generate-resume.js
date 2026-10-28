const fs = require('fs');
const path = require('path');

function createFinalCV() {
  // Page 1 Content
  const p1Lines = [
    // Header
    "BT",
    "/F2 20 Tf",
    "50 742 Td",
    "(MANISH CHOUHAN) Tj",
    "ET",

    "BT",
    "/F2 10.5 Tf",
    "0.21 0.45 0.28 rg",
    "50 726 Td",
    "(PROJECT MANAGER & TECHNICAL PRODUCT LEADER) Tj",
    "ET",

    "BT",
    "/F1 8.5 Tf",
    "0.2 0.2 0.2 rg",
    "50 710 Td",
    "(+91 89056 94021  |  manishchouchan123@gmail.com  |  Sojat Road, Pali, Rajasthan  |  manish.devoq-labs.online) Tj",
    "ET",

    "BT",
    "/F1 8.5 Tf",
    "50 697 Td",
    "(LinkedIn: linkedin.com/in/manish-chouhan-2301a7230  |  GitHub: github.com/Manish-10275) Tj",
    "ET",

    // Horizontal Rule
    "0.75 w",
    "0.85 0.85 0.82 RG",
    "50 686 m 562 686 l S",

    // PROFESSIONAL SUMMARY
    "BT",
    "/F2 10.5 Tf",
    "0 0 0 rg",
    "50 668 Td",
    "(PROFESSIONAL SUMMARY) Tj",
    "ET",

    "BT",
    "/F1 8.5 Tf",
    "0.2 0.2 0.2 rg",
    "50 652 Td",
    "(Results-driven Project Manager, AI Automation Associate, and Technical Builder combining rigorous management) Tj",
    "0 -11.5 Td",
    "(principles from Harvard University with advanced technical foundations from IIT Madras. Proven track record of) Tj",
    "0 -11.5 Td",
    "(leading cross-functional teams, directing end-to-end project lifecycles, and deploying scalable AI-driven automation) Tj",
    "0 -11.5 Td",
    "(workflows and enterprise web applications.) Tj",
    "ET",

    // PROJECT MANAGEMENT & CORE COMPETENCIES
    "BT",
    "/F2 10.5 Tf",
    "0 0 0 rg",
    "50 594 Td",
    "(PROJECT MANAGEMENT & CORE COMPETENCIES) Tj",
    "ET",

    "BT",
    "/F2 8.5 Tf",
    "50 578 Td",
    "(Project Methodologies: ) Tj",
    "/F1 8.5 Tf",
    "(Agile Project Management, Sprint Planning, Scrum, Risk Assessment, Resource Allocation) Tj",
    "ET",

    "BT",
    "/F2 8.5 Tf",
    "50 564 Td",
    "(AI & Workflow Automation: ) Tj",
    "/F1 8.5 Tf",
    "(AI Automation, Prompt Engineering, OpenAI APIs, Process Optimization, Pipeline Integration) Tj",
    "ET",

    "BT",
    "/F2 8.5 Tf",
    "50 550 Td",
    "(Technical Stack: ) Tj",
    "/F1 8.5 Tf",
    "(Python, TypeScript, JavaScript, React.js, Next.js, Fastify, Prisma, PostgreSQL, AWS) Tj",
    "ET",

    "BT",
    "/F2 8.5 Tf",
    "50 536 Td",
    "(Business & Operations: ) Tj",
    "/F1 8.5 Tf",
    "(Strategic Planning, Client Communication, Technical Documentation, Product Lifecycle Management) Tj",
    "ET",

    "BT",
    "/F2 8.5 Tf",
    "50 522 Td",
    "(Technical & Systems: ) Tj",
    "/F1 8.5 Tf",
    "(Git & GitHub, Docker, REST API Architecture, Node.js & Express, SQL, Supabase, Google Cloud, FastAPI, TensorFlow, Power BI, Excel) Tj",
    "ET",

    // PROFESSIONAL EXPERIENCE
    "BT",
    "/F2 10.5 Tf",
    "0 0 0 rg",
    "50 496 Td",
    "(PROFESSIONAL EXPERIENCE) Tj",
    "ET",

    // 1. Pixellab
    "BT",
    "/F2 9.5 Tf",
    "50 480 Td",
    "(AI Automation Associate | Pixellab.Media) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "460 480 Td",
    "(Sep 01, 2026 - Present) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "50 467 Td",
    "(- Design and implement AI-driven automation workflows to streamline operational pipelines and enhance project delivery speed.) Tj",
    "0 -11 Td",
    "(- Integrate advanced language models and APIs into digital ecosystems to optimize media workflows and business efficiency.) Tj",
    "ET",

    // 2. Devoq Labs
    "BT",
    "/F2 9.5 Tf",
    "50 433 Td",
    "(Founder & Project Director | Devoq Labs) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "460 433 Td",
    "(Jun 2025 - Present) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "50 420 Td",
    "(- Direct end-to-end project lifecycles for web development, AI integration, and digital transformation initiatives, managing timelines and scope.) Tj",
    "0 -11 Td",
    "(- Coordinate cross-functional teams of developers and designers, aligning resource allocation with client business milestones.) Tj",
    "0 -11 Td",
    "(- Supervise end-to-end delivery milestones, coordinating client reviews, sprints, task priorities, and deployment logs across customized AI endpoints.) Tj",
    "ET",

    // 3. JJGillespie
    "BT",
    "/F2 9.5 Tf",
    "50 374 Td",
    "(Project Manager | JJGillespie.com) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "460 374 Td",
    "(Nov 2025 - Present) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "50 361 Td",
    "(- Manage distributed project schedules, deliverables, and cross-team communications to ensure strategic alignment with organizational objectives.) Tj",
    "0 -11 Td",
    "(- Implement workflow improvements and milestone tracking that boost team productivity and delivery speed.) Tj",
    "0 -11 Td",
    "(- Bridge communications between commercial project stakeholders and technical execution teams to maintain clear task delegation pipelines.) Tj",
    "ET",

    // 4. Excelerate
    "BT",
    "/F2 9.5 Tf",
    "50 315 Td",
    "(Associate Project Manager Intern | Excelerate) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "460 315 Td",
    "(May 2025 - Jun 2025) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "50 302 Td",
    "(- Assisted in planning, tracking, and executing deliverables while maintaining strict quality assurance and timeline constraints.) Tj",
    "0 -11 Td",
    "(- Assisted senior management in mapping project milestones, organizing project documentation backlogs, and preparing sprint review dashboards.) Tj",
    "ET",

    // 5. Paradox
    "BT",
    "/F2 9.5 Tf",
    "50 268 Td",
    "(Core Team Operations Manager | Paradox, IIT Madras) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "535 268 Td",
    "(2026) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "50 255 Td",
    "(- Managed event operations, large-scale logistics, and participant engagement for a flagship institutional event under strict deadlines.) Tj",
    "ET",

    // 6. Codveda
    "BT",
    "/F2 9.5 Tf",
    "50 231 Td",
    "(Python Programmer Intern | Codveda Technologies) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "535 231 Td",
    "(2025) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "50 218 Td",
    "(- Developed automated Python scripting pipelines for processing text datasets and indexing directories.) Tj",
    "0 -11 Td",
    "(- Collaborated closely with technical leads to debug scripts, write modular tests, and refine codebase performance within Git version controls.) Tj",
    "ET",

    // Footer P1
    "BT",
    "/F1 8 Tf",
    "0.5 0.5 0.5 rg",
    "50 40 Td",
    "(Manish Chouhan - Project Manager & Technical Product Leader) Tj",
    "ET",
    "BT",
    "/F1 8 Tf",
    "515 40 Td",
    "(Page 1 of 2) Tj",
    "ET"
  ];

  // Page 2 Content
  const p2Lines = [
    // Header P2
    "BT",
    "/F2 11 Tf",
    "0 0 0 rg",
    "50 742 Td",
    "(KEY PROJECTS & TECHNICAL LEADERSHIP) Tj",
    "ET",

    // Project 1: Ad Automation OS
    "BT",
    "/F2 9.5 Tf",
    "50 722 Td",
    "(Ad Automation OS - Full-Stack / Backend Engineering Project) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "350 722 Td",
    "(Tech: Next.js, Fastify, Prisma, Meta Graph API) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "50 708 Td",
    "(- Architected and developed a full-stack automated ad management system integrating Meta Graph API with robust backend services.) Tj",
    "0 -11.5 Td",
    "(- Engineered scalable database schemas using Prisma and PostgreSQL/Supabase, deployed via Vercel and Railway with CI/CD pipelines.) Tj",
    "ET",

    // Project 2: Mind Mitra
    "BT",
    "/F2 9.5 Tf",
    "50 673 Td",
    "(Mind Mitra - AI-Powered Mental Health Platform) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "440 673 Td",
    "(Tech: Lovable AI, UI/UX) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "50 659 Td",
    "(- Spearheaded product conceptualization and development of a scalable mental health platform with dual-user dashboards.) Tj",
    "0 -11.5 Td",
    "(- Developed an AI counseling companion utilizing natural language processing pipelines to deliver real-time emotional support.) Tj",
    "ET",

    // Project 3: AgriBuddy
    "BT",
    "/F2 9.5 Tf",
    "50 624 Td",
    "(AgriBuddy - Smart Crop Pathogen Diagnosis Pipeline (Prototype)) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "390 624 Td",
    "(Tech: Python, TensorFlow, FastAPI) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "50 610 Td",
    "(- Developed an agro-tech prototype pipeline using computer vision designed to diagnose crop plant pathogens and leaf diseases.) Tj",
    "0 -11.5 Td",
    "(- Configured a FastAPI service interface to process image inputs and serve diagnostic guidance for common agricultural conditions.) Tj",
    "ET",

    // Project 4: Speech Services
    "BT",
    "/F2 9.5 Tf",
    "50 580 Td",
    "(Devoq Labs Speech Services - Voice Synthesis & Audio Processing Gateway) Tj",
    "ET",
    "BT",
    "/F1 8 Tf",
    "0.3 0.3 0.3 rg",
    "50 568 Td",
    "(Tech: Node.js, Express.js, Google Cloud Speech-to-Text, AI33.pro TTS, Docker) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "0.2 0.2 0.2 rg",
    "50 556 Td",
    "(- Engineered a centralized microservice gateway integrating Google Speech-to-Text with AI33.pro Text-to-Speech endpoints.) Tj",
    "0 -11 Td",
    "(- Implemented client API key authentication, request validation, and containerized deployment workflows using Docker.) Tj",
    "ET",

    // Project 5: HBB Mutation Analyzer
    "BT",
    "/F2 9.5 Tf",
    "50 526 Td",
    "(HBB Mutation Analyzer - Genomic Variant Research Tool (Prototype)) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "365 526 Td",
    "(Tech: Python, HGVS Parsing, ClinVar, PubMed, Gemini API) Tj",
    "ET",
    "BT",
    "/F1 8.5 Tf",
    "50 512 Td",
    "(- Designed a bioinformatics prototype to parse human Beta-Globin (HBB) gene variants using standard HGVS nomenclature.) Tj",
    "0 -11.5 Td",
    "(- Aggregated variant classifications from NCBI ClinVar and literature citations via PubMed API, integrating Gemini AI.) Tj",
    "ET",

    // Rule
    "0.75 w",
    "0.85 0.85 0.82 RG",
    "50 480 m 562 480 l S",

    // EDUCATION & CREDENTIALS
    "BT",
    "/F2 11 Tf",
    "0 0 0 rg",
    "50 458 Td",
    "(EDUCATION & CREDENTIALS) Tj",
    "ET",

    // Sub-header 1
    "BT",
    "/F2 10 Tf",
    "50 438 Td",
    "(EDUCATION) Tj",
    "ET",

    "BT",
    "/F2 9.5 Tf",
    "50 422 Td",
    "(Bachelor of Liberal Arts (Business Administration Mgmt)) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "50 410 Td",
    "(Harvard University) Tj",
    "ET",

    "BT",
    "/F2 9.5 Tf",
    "50 390 Td",
    "(BS in Data Science & Applications) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "50 378 Td",
    "(IIT Madras | 2025 - 2029) Tj",
    "ET",

    // Sub-header 2
    "BT",
    "/F2 10 Tf",
    "310 438 Td",
    "(CERTIFICATIONS & TRAINING) Tj",
    "ET",

    "BT",
    "/F2 9.5 Tf",
    "310 422 Td",
    "(Credential of Leadership, Impact, & Management) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "310 410 Td",
    "(Team Leadership, Strategy, Finance, Digital World) Tj",
    "ET",

    "BT",
    "/F2 9.5 Tf",
    "310 390 Td",
    "(Google Ads Apps & Play Academy) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "310 378 Td",
    "(Google Certification) Tj",
    "ET",

    "BT",
    "/F2 9.5 Tf",
    "310 358 Td",
    "(AWS Job Roles in Cloud & ML Prep) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "310 346 Td",
    "(Amazon Web Services) Tj",
    "ET",

    // Footer P2
    "BT",
    "/F1 8 Tf",
    "0.5 0.5 0.5 rg",
    "50 40 Td",
    "(Manish Chouhan - Project Manager & Technical Product Leader) Tj",
    "ET",
    "BT",
    "/F1 8 Tf",
    "515 40 Td",
    "(Page 2 of 2) Tj",
    "ET"
  ];

  const s1 = p1Lines.join("\n");
  const s2 = p2Lines.join("\n");
  const len1 = Buffer.byteLength(s1, 'utf-8');
  const len2 = Buffer.byteLength(s2, 'utf-8');

  let pdf = "%PDF-1.4\n";
  const offsets = [];

  function addObj(str) {
    offsets.push(Buffer.byteLength(pdf, 'utf-8'));
    pdf += str + "\n";
  }

  // 1: Catalog
  addObj("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj");

  // 2: Pages
  addObj("2 0 obj\n<< /Type /Pages /Kids [3 0 R 6 0 R] /Count 2 >>\nendobj");

  // 3: Page 1
  addObj("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 8 0 R /F2 9 0 R >> >> >>\nendobj");

  // 4: Stream 1
  addObj(`4 0 obj\n<< /Length ${len1} >>\nstream\n${s1}\nendstream\nendobj`);

  // 5: Font F1 (Helvetica)
  addObj("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj");

  // 6: Page 2
  addObj("6 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 7 0 R /Resources << /Font << /F1 8 0 R /F2 9 0 R >> >> >>\nendobj");

  // 7: Stream 2
  addObj(`7 0 obj\n<< /Length ${len2} >>\nstream\n${s2}\nendstream\nendobj`);

  // 8: Font F1
  addObj("8 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj");

  // 9: Font F2 (Helvetica-Bold)
  addObj("9 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj");

  const startXref = Buffer.byteLength(pdf, 'utf-8');
  pdf += "xref\n";
  pdf += "0 10\n";
  pdf += "0000000000 65535 f \n";
  for (let i = 0; i < offsets.length; i++) {
    pdf += offsets[i].toString().padStart(10, '0') + " 00000 n \n";
  }
  pdf += "trailer\n";
  pdf += "<< /Size 10 /Root 1 0 R >>\n";
  pdf += "startxref\n";
  pdf += startXref + "\n";
  pdf += "%%EOF\n";

  const targetPath = path.join(__dirname, '..', 'public', 'resume.pdf');
  const testOutputPath = path.join(__dirname, 'test-generated-resume.pdf');
  
  // SAFETY LOCK: Prevent silent overwrite of the approved authentic CV.
  // public/resume.pdf is reserved for the exact finalized CV (Enhanced CV - Manish Chouhan - Final Layout.pdf).
  // The synthetic generator will only overwrite public/resume.pdf if explicitly passed the --force-synthetic flag.
  const forceSynthetic = process.argv.includes('--force-synthetic');
  if (!forceSynthetic) {
    fs.writeFileSync(testOutputPath, pdf, 'utf-8');
    console.log(`[SAFETY LOCK ACTIVE] public/resume.pdf contains the approved authentic finalized CV.`);
    console.log(`Synthetic resume preview written to: ${testOutputPath}`);
    console.log(`To force overwrite public/resume.pdf with synthetic version, run with --force-synthetic`);
    return;
  }

  fs.writeFileSync(targetPath, pdf, 'utf-8');
  console.log(`Successfully generated verified 2-page CV to ${targetPath} (${Buffer.byteLength(pdf, 'utf-8')} bytes)`);
}

createFinalCV();

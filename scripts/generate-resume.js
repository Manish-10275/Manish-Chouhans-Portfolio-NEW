const fs = require('fs');
const path = require('path');

function createResumePDF() {
  const contentLines = [
    // Header
    "BT",
    "/F2 20 Tf",
    "50 740 Td",
    "(MANISH CHOUHAN) Tj",
    "ET",

    "BT",
    "/F1 10 Tf",
    "50 722 Td",
    "(AI Automation & Product Developer | Founder, Devoq Labs) Tj",
    "ET",

    "BT",
    "/F1 9 Tf",
    "50 706 Td",
    "(Email: manishchouhan123@gmail.com  |  LinkedIn: linkedin.com/in/manish-chouhan-2301a7230  |  GitHub: github.com/Manish-10275) Tj",
    "ET",

    // Horizontal rule
    "0.75 w",
    "0.8 0.8 0.8 RG",
    "50 694 m 562 694 l S",

    // Profile summary
    "BT",
    "/F2 11 Tf",
    "0 0 0 rg",
    "50 676 Td",
    "(PROFESSIONAL SUMMARY) Tj",
    "ET",

    "BT",
    "/F1 9.5 Tf",
    "50 660 Td",
    "(AI automation specialist, full-stack developer, and entrepreneurial product builder. Experienced in delivering) Tj",
    "0 -13 Td",
    "(practical software systems, LLM integrations, and coordinating agile cross-functional engineering teams.) Tj",
    "ET",

    // Experience
    "BT",
    "/F2 11 Tf",
    "50 626 Td",
    "(PROFESSIONAL EXPERIENCE) Tj",
    "ET",

    // Role 1
    "BT",
    "/F2 10 Tf",
    "50 608 Td",
    "(Founder & CEO  -  Devoq Labs) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "440 608 Td",
    "(June 2025 - Present) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "50 594 Td",
    "(- Founded independent digital and AI development studio creating customized web platforms and AI systems.) Tj",
    "0 -12 Td",
    "(- Directing client sprints, technical requirements scoping, and software delivery architecture.) Tj",
    "0 -12 Td",
    "(- Built unified speech services, SaaS automation backends, and full-stack web applications.) Tj",
    "ET",

    // Role 2
    "BT",
    "/F2 10 Tf",
    "50 554 Td",
    "(Project Manager  -  JJGillespie.com) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "440 554 Td",
    "(Nov 2025 - Present) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "50 540 Td",
    "(- Directing distributed engineering sprints, task prioritization backlogs, and agile milestones.) Tj",
    "0 -12 Td",
    "(- Aligning commercial client objectives with engineering implementation roadmaps.) Tj",
    "0 -12 Td",
    "(- Standardized version-controlled Git workflows and documentation to maintain delivery velocity.) Tj",
    "ET",

    // Role 3
    "BT",
    "/F2 10 Tf",
    "50 500 Td",
    "(Associate Project Manager Intern  -  Excelerate) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "440 500 Td",
    "(May 2025 - June 2025) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "50 486 Td",
    "(- Prepared weekly sprint tracking dashboards and facilitated technical review meetings.) Tj",
    "0 -12 Td",
    "(- Coordinated requirement backlogs and helped streamline cross-functional developer communication.) Tj",
    "ET",

    // Role 4 & 5
    "BT",
    "/F2 10 Tf",
    "50 448 Td",
    "(Student Intern  -  Scaler School of Technology | Python Intern  -  Codveda) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "490 448 Td",
    "(2025) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "50 434 Td",
    "(- Developed automated Python scripts for parsing text datasets and data processing utilities.) Tj",
    "ET",

    // Education
    "BT",
    "/F2 11 Tf",
    "50 406 Td",
    "(EDUCATION) Tj",
    "ET",

    "BT",
    "/F2 10 Tf",
    "50 388 Td",
    "(Indian Institute of Technology, Madras (IIT Madras)) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "440 388 Td",
    "(2025 - 2029) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "50 374 Td",
    "(Bachelor of Science (BS) in Data Science and Applications) Tj",
    "0 -12 Td",
    "(Coursework: Machine Learning, Statistical Algorithms, Database Systems, Linear Algebra) Tj",
    "0 -12 Td",
    "(Core Team Member, Paradox IIT Madras 2026 - Operations & Logistics) Tj",
    "ET",

    "BT",
    "/F2 10 Tf",
    "50 336 Td",
    "(Harvard University DCE) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "50 322 Td",
    "(ALB Coursework in Business Administration & Management) Tj",
    "ET",

    // Technical Skills
    "BT",
    "/F2 11 Tf",
    "50 294 Td",
    "(TECHNICAL SKILLS) Tj",
    "ET",

    "BT",
    "/F1 9 Tf",
    "50 276 Td",
    "(AI & Automation: Python, LLM API Integration, AI Agents, Workflow Automation, Prompt Engineering) Tj",
    "0 -13 Td",
    "(Development: TypeScript, JavaScript, React, Next.js, Node.js, Express, REST APIs, Tailwind CSS, Git) Tj",
    "0 -13 Td",
    "(Product & Management: Agile / Scrum, Sprint Scoping, Technical Documentation, Stakeholder Communication) Tj",
    "0 -13 Td",
    "(Data & Analytics: SQL, Data Analysis, Python Data Processing (Pandas), Excel, Power BI) Tj",
    "ET",

    // Key Projects
    "BT",
    "/F2 11 Tf",
    "50 208 Td",
    "(FEATURED TECHNICAL PROJECTS) Tj",
    "ET",

    "BT",
    "/F2 9.5 Tf",
    "50 190 Td",
    "(HBB Mutation Analyzer: ) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "175 190 Td",
    "(Bioinformatics tool for HGVS sequence parsing, ClinVar assertions & Gemini research retrieval.) Tj",
    "ET",

    "BT",
    "/F2 9.5 Tf",
    "50 174 Td",
    "(Ad Automation OS: ) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "160 174 Td",
    "(Unified operations dashboard for marketing connectors, rule automation & audit logging.) Tj",
    "ET",

    "BT",
    "/F2 9.5 Tf",
    "50 158 Td",
    "(Devoq Labs Speech Services: ) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "205 158 Td",
    "(Backend API consolidating STT and TTS engines into a unified endpoint.) Tj",
    "ET",

    "BT",
    "/F2 9.5 Tf",
    "50 142 Td",
    "(AgriBuddy: ) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "120 142 Td",
    "(Computer vision plant disease diagnostics prototype for crop leaf anomalies.) Tj",
    "ET",

    // Certifications & Honors
    "BT",
    "/F2 11 Tf",
    "50 114 Td",
    "(HONORS & CREDENTIALS) Tj",
    "ET",
    "BT",
    "/F1 9 Tf",
    "50 96 Td",
    "(- Kaggle AI Agents Intensive Course  |  Google AI Learning Programs  |  Neoteric Summit Dubai 2026 Delegate) Tj",
    "0 -12 Td",
    "(- Published Author of 3 poetry & creative collections exploring human emotion and reflection.) Tj",
    "ET"
  ];

  const streamContent = contentLines.join("\n");
  const streamLength = Buffer.byteLength(streamContent, 'utf-8');

  let pdf = "%PDF-1.4\n";
  const offsets = [];

  function addObj(str) {
    offsets.push(Buffer.byteLength(pdf, 'utf-8'));
    pdf += str + "\n";
  }

  // 1 0 obj: Catalog
  addObj("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj");

  // 2 0 obj: Pages
  addObj("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj");

  // 3 0 obj: Page
  addObj("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj");

  // 4 0 obj: Stream
  addObj(`4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj`);

  // 5 0 obj: Font Helvetica
  addObj("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj");

  // 6 0 obj: Font Helvetica-Bold
  addObj("6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj");

  const startXref = Buffer.byteLength(pdf, 'utf-8');
  pdf += "xref\n";
  pdf += "0 7\n";
  pdf += "0000000000 65535 f \n";
  for (let i = 0; i < offsets.length; i++) {
    pdf += offsets[i].toString().padStart(10, '0') + " 00000 n \n";
  }
  pdf += "trailer\n";
  pdf += "<< /Size 7 /Root 1 0 R >>\n";
  pdf += "startxref\n";
  pdf += startXref + "\n";
  pdf += "%%EOF\n";

  const targetPath = path.join(__dirname, '..', 'public', 'resume.pdf');
  fs.writeFileSync(targetPath, pdf, 'utf-8');
  console.log(`Successfully wrote valid PDF to ${targetPath} (${Buffer.byteLength(pdf, 'utf-8')} bytes)`);
}

createResumePDF();

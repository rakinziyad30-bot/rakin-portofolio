export function downloadResumePlaceholder() {
  const resumeContent = `========================================================================
MUHAMMAD RAKIN ZIYAD
Jakarta, Indonesia | rakinziyad30@gmail.com
GitHub: https://github.com/rakinziyad30-bot
LinkedIn: https://www.linkedin.com/in/muhammad-rakin-ziyad-06a767233/
========================================================================
[NOTE: Generated from verified portfolio data — PDF CV file placeholder]

SUMMARY
-------
Information Technology undergraduate at Universitas Indraprasta PGRI (GPA: 3.64/4.00)
with a background in automotive operations, spare parts management, inventory
administration, and vehicle inspection. Developing software development skills
through practical projects involving JavaScript, React fundamentals, Java, HTML,
CSS, and MySQL.

EDUCATION & TRAINING
--------------------
* Universitas Indraprasta PGRI (UNINDRA)
  Bachelor's Degree in Information Technology | July 2024 – Present
  GPA: 3.64/4.00

* SMKN 26 Pembangunan Jakarta
  Automotive Maintenance Engineering | July 2018 – July 2022

* Professional Training:
  - Advanced Partsman (2023)
  - Parts Specialist

FEATURED SOFTWARE PROJECTS
--------------------------
1. TO-DO LIST WEB APP (HTML, CSS, JavaScript, localStorage)
   Repository: https://github.com/rakinziyad30-bot/ToDoList
   Live Demo:  https://rakinziyad30-bot.github.io/ToDoList/
   A task management application featuring user registration, login,
   user-specific data storage using localStorage, time validation, and task deletion.

2. EXPENSE TRACKER (HTML, CSS, JavaScript, localStorage)
   Repository: https://github.com/rakinziyad30-bot/ExpensesTracker
   Live Demo:  https://rakinziyad30-bot.github.io/ExpensesTracker/
   An application for tracking income and expenses, featuring balance summaries,
   transaction history, and user-specific data storage.

3. CRYPTO TRACKER (JavaScript, Vite, REST API)
   Repository: https://github.com/rakinziyad30-bot/CryptoTracker
   Live Demo:  https://rakinziyad30-bot.github.io/CryptoTracker/
   A cryptocurrency tracking interface built using Vite and JavaScript,
   integrating an external API to display cryptocurrency information.

4. PARKING PROGRAM (Java, OOP)
   Repository: https://github.com/rakinziyad30-bot/ProgramParkir
   A Java-based parking management program using separate classes for data
   management and program execution as an object-oriented programming exercise.

PROFESSIONAL EXPERIENCE
-----------------------
* PT Astrido Jaya Mobilindo — Partsman (July 2023 – Present | North Jakarta)
  - Manage spare parts orders and stock availability.
  - Prepare component requirement estimates.
  - Verify vehicle models using EPC (Electronic Parts Catalog).
  - Coordinate with Toyota Astra Motor regarding product information.
  - Support spare parts campaigns.

* HM Autoservice — Mechanic (February 2023 – July 2023 | South Bekasi)
  - Replace vehicle components.
  - Prepare component requirement and repair cost estimates.

* DAS Autos — Mechanic (November 2022 – January 2023 | East Jakarta)
  - Inspect engine conditions.
  - Replace components.
  - Estimate repair requirements and costs.

* OLX Autos Academy — Inspector (September 2022 – November 2022 | West Jakarta)
  - Conduct vehicle inspections.
  - Perform quality control.
  - Verify vehicle documentation.

* Tunas Daihatsu — Apprentice (June 2021 – December 2021 | East Jakarta)
  - Assist with spare parts replacement.
  - Prepare repair estimates.
  - Assist with engine overhaul work.

TECHNICAL & OPERATIONAL SKILLS
------------------------------
* Web Development: HTML, CSS, JavaScript, React Fundamentals
* Programming & Database: Java, MySQL, Node.js Fundamentals
* Tools & Workflow: Git, GitHub, VS Code, Vite, localStorage, Basic REST API Integration
* Business & Operations: Microsoft Excel, Inventory Administration, Spare Parts Management, Data Verification
* Soft Skills: Problem Solving, Attention to Detail, Communication, Teamwork, Time Management
========================================================================
`;

  const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Muhammad_Rakin_Ziyad_CV_Summary.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

const today = new Date();

const thisYear = today.getFullYear();

const footer_parent = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerText = "Edgar Ruiz" + " " + thisYear;

footer_parent.appendChild(copyright);

const skills = [
    "JavaScript / HTML / CSS / Python / Git / GitHub / DOM", 
    "Microcomputer / Microship, Basic, Assembly", 
    "Electronic circuit design / Altium Design", 
    "PCB layout design / Altium Design", 
    "3D mechanical modeling / Creo PTC, SolidWorks, AutoCAD", 
    "Mechanical drawing standard / ASME Y14.5M", 
    "PLM tools and engineering document control / Enovia", 
];

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul");

for( let x in skills) {
    const skills_li = document.createElement("li");
    skills_li.innerText = skills[x];
    skillsList.appendChild(skills_li);
}

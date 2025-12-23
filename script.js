document.addEventListener('DOMContentLoaded', function () {
    // Add Skill
    document.getElementById('addSkillBtn').addEventListener('click', function () {
        const skillsContainer = document.getElementById('skillsContainer');
        const newSkill = document.createElement('div');
        newSkill.innerHTML = `
            <input type="text" placeholder="Skill name" class="skill-name">
            <input type="number" min="0" max="100" placeholder="%" class="skill-level">
            <button class="remove-skill">×</button>
        `;
        skillsContainer.appendChild(newSkill);
    });

    // Add Project
    document.getElementById('addProjectBtn').addEventListener('click', function () {
        const projectsContainer = document.getElementById('projectsContainer');
        const newProject = document.createElement('div');
        newProject.innerHTML = `
            <input type="text" placeholder="Project Title" class="project-title">
            <input type="url" placeholder="Project Image URL" class="project-image">
            <textarea placeholder="Project Description" rows="2" class="project-description"></textarea>
            <input type="url" placeholder="Live Demo URL" class="project-demo">
            <input type="url" placeholder="GitHub URL" class="project-github">
            <button class="remove-project">Remove</button>
        `;
        projectsContainer.appendChild(newProject);
    });

    // Add Education
    document.getElementById('addEducationBtn').addEventListener('click', function () {
        const educationContainer = document.getElementById('educationContainer');
        const newEducation = document.createElement('div');
        newEducation.innerHTML = `
            <input type="text" placeholder="Degree/Certificate" class="education-degree">
            <input type="text" placeholder="Institution" class="education-institution">
            <input type="text" placeholder="Duration (e.g., 2020-2024)" class="education-duration">
            <textarea placeholder="Description" rows="2" class="education-description"></textarea>
            <button class="remove-education">Remove</button>
        `;
        educationContainer.appendChild(newEducation);
    });

    // Remove buttons (event delegation)
    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-skill')) {
            e.target.parentElement.remove();
        }
        if (e.target.classList.contains('remove-project')) {
            e.target.parentElement.remove();
        }
        if (e.target.classList.contains('remove-education')) {
            e.target.parentElement.remove();
        }
    });

    // Download Portfolio
    document.getElementById('downloadBtn').addEventListener('click', function () {
        const fullName = document.getElementById('fullName').value;
        const jobTitle = document.getElementById('jobTitle').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const profileImage = document.getElementById('profileImage').value;
        const aboutText = document.getElementById('aboutText').value;
        const linkedin = document.getElementById('linkedin').value;
        const github = document.getElementById('github').value;

        // Skills
        const skills = [];
        document.querySelectorAll('#skillsContainer > div').forEach(div => {
            const name = div.querySelector('.skill-name').value;
            const level = div.querySelector('.skill-level').value;
            if (name) skills.push({ name, level });
        });

        // Projects
        const projects = [];
        document.querySelectorAll('#projectsContainer > div').forEach(div => {
            const title = div.querySelector('.project-title').value;
            const image = div.querySelector('.project-image').value;
            const desc = div.querySelector('.project-description').value;
            const demo = div.querySelector('.project-demo').value;
            const repo = div.querySelector('.project-github').value;
            if (title) projects.push({ title, image, desc, demo, repo });
        });

        // Education
        const education = [];
        document.querySelectorAll('#educationContainer > div').forEach(div => {
            const degree = div.querySelector('.education-degree').value;
            const institution = div.querySelector('.education-institution').value;
            const duration = div.querySelector('.education-duration').value;
            const desc = div.querySelector('.education-description').value;
            if (degree) education.push({ degree, institution, duration, desc });
        });

        const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${fullName} - Portfolio</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; color: #333; }
        .container { max-width: 800px; margin: auto; padding: 20px; }
        header { background: #333; color: #fff; padding: 2rem 0; text-align: center; }
        header h1 { margin: 0; }
        header p { margin: 10px 0 0; }
        .section { margin: 2rem 0; }
        h2 { border-bottom: 2px solid #333; padding-bottom: 10px; }
        .skill-bar { background: #f4f4f4; height: 10px; border-radius: 5px; margin-top: 5px; }
        .skill-fill { background: #337ab7; height: 100%; border-radius: 5px; }
        .project { border: 1px solid #ddd; padding: 15px; margin-bottom: 20px; border-radius: 5px; }
        .project img { max-width: 100%; height: auto; }
        .education-item { margin-bottom: 15px; }
        .contact-info { display: flex; justify-content: center; gap: 20px; margin-top: 20px; }
        .contact-info a { color: #fff; text-decoration: none; }
    </style>
</head>
<body>
    <header>
        <div class="container">
            ${profileImage ? `<img src="${profileImage}" alt="${fullName}" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 3px solid #fff;">` : ''}
            <h1>${fullName}</h1>
            <p>${jobTitle}</p>
            <div class="contact-info">
                ${email ? `<a href="mailto:${email}">Email</a>` : ''}
                ${phone ? `<span>${phone}</span>` : ''}
                ${linkedin ? `<a href="${linkedin}" target="_blank">LinkedIn</a>` : ''}
                ${github ? `<a href="${github}" target="_blank">GitHub</a>` : ''}
            </div>
        </div>
    </header>

    <div class="container">
        <section class="section">
            <h2>About Me</h2>
            <p>${aboutText}</p>
        </section>

        <section class="section">
            <h2>Skills</h2>
            ${skills.map(skill => `
                <div style="margin-bottom: 15px;">
                    <strong>${skill.name}</strong>
                    <div class="skill-bar">
                        <div class="skill-fill" style="width: ${skill.level}%"></div>
                    </div>
                </div>
            `).join('')}
        </section>

        <section class="section">
            <h2>Projects</h2>
            ${projects.map(project => `
                <div class="project">
                    <h3>${project.title}</h3>
                    ${project.image ? `<img src="${project.image}" alt="${project.title}">` : ''}
                    <p>${project.desc}</p>
                    <div style="margin-top: 10px;">
                        ${project.demo ? `<a href="${project.demo}" target="_blank" style="margin-right: 15px;">Live Demo</a>` : ''}
                        ${project.repo ? `<a href="${project.repo}" target="_blank">GitHub Repo</a>` : ''}
                    </div>
                </div>
            `).join('')}
        </section>

        <section class="section">
            <h2>Education</h2>
            ${education.map(edu => `
                <div class="education-item">
                    <h3>${edu.degree}</h3>
                    <p><strong>${edu.institution}</strong> | ${edu.duration}</p>
                    <p>${edu.desc}</p>
                </div>
            `).join('')}
        </section>
    </div>
</body>
</html>`;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'portfolio.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});

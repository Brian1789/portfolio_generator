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
});

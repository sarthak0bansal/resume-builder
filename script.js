document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Generate resume content
    const resumeContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h4>Education</h4>
        <p>${education}</p>

        <h4>Work Experience</h4>
        <p>${experience}</p>

        <h4>Skills</h4>
        <p>${skills}</p>
    `;

    // Show the resume content in the output section
    document.getElementById('resumeContent').innerHTML = resumeContent;
});

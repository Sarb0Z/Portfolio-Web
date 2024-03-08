function submitForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(document.getElementById('jobApplicationForm'));
    
    // Display submitted data in console
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    
    alert('Form submitted successfully!');
}

function displayApplicationData() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    const applicationData = `
        <h2>Application Data</h2>
        <table>
            <tr>
                <td>Full Name:</td>
                <td>${fullName}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td>${phone}</td>
            </tr>
        </table>
    `;
    
    document.getElementById('applicationData').innerHTML = applicationData;
}

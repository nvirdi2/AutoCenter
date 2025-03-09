document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;

    // Placeholder for form submission logic
    console.log(`Appointment Request: ${name}, ${email}, ${service}`);

    // Optionally send data to Firebase or another backend service.
});

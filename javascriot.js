let currentStep = 1; // Current step of the form

// Function to open the booking form
function openBookingForm(hotelName) {
    document.getElementById('hotelName').textContent = hotelName;
    document.getElementById('bookingForm').style.display = 'flex';
    updateProgressBar();
}

// Function to close the booking form
function closeBookingForm() {
    document.getElementById('bookingForm').style.display = 'none';
}

// Show the next step in the form
function nextStep() {
    if (currentStep < 3) {
        document.getElementById('step' + currentStep).classList.remove('active');
        currentStep++;
        document.getElementById('step' + currentStep).classList.add('active');
        updateProgressBar();
    }
}

// Update the progress bar based on current step
function updateProgressBar() {
    let progressBarFill = document.getElementById('progressBarFill');
    let progressWidth = (currentStep / 3) * 100; // Calculate width based on steps
    progressBarFill.style.width = progressWidth + '%';
}

// Handle form submission
document.getElementById('bookingFormSubmit').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get the hotel name and display the confirmation message
    const hotelName = document.getElementById('hotelName').textContent;
    document.getElementById('confirmedHotelName').textContent = hotelName;

    // Hide the booking form and show the confirmation message
    document.getElementById('bookingForm').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
});

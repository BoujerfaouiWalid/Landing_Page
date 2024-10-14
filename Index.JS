// Test Drive Popup
const testDriveBtn = document.querySelector('.test-drive-btn');
testDriveBtn.addEventListener('click', () => {
    const popup = document.createElement('div');
    popup.classList.add('test-drive-popup');
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <h2>Book a Test Drive</h2>
            <p>Fill in your details to schedule your test drive.</p>
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <input type="date" required>
            <button class="book-btn">Book Now</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Close the popup
    document.querySelector('.close-popup').addEventListener('click', () => {
        document.body.removeChild(popup);
    });

    // Handle booking
    document.querySelector('.book-btn').addEventListener('click', () => {
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const date = document.querySelector('input[type="date"]').value;
        if (name && email && date) {
            alert(`Thank you, ${name}! Your test drive is booked for ${date}.`);
            document.body.removeChild(popup);
        } else {
            alert('Please fill in all fields.');
        }
    });
});

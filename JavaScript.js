// Form Validation
const form = document.getElementById('reservationForm');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;

    if(!name || !date || !time || !people){
        alert("Please fill all fields!");
    } else {
        alert(`Thank you ${name}, your table for ${people} people is booked on ${date} at ${time}.`);
        form.reset();
    }
});

// Review Slider
const reviews = [
    `"Great food and friendly staff!" - John D.`,
    `"Amazing ambiance and delicious desserts!" - Sarah P.`,
    `"Best restaurant experience ever!" - Ali K.`
];

let currentIndex = 0;
const reviewText = document.getElementById('reviewText');
const nextButton = document.getElementById('nextReview');

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    reviewText.textContent = reviews[currentIndex];
});

// Smooth Scroll (Optional Enhancement)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

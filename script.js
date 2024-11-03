
let timeInSeconds = 2400;


function updateTimer() {
    const timerElement = document.querySelector('.timer');
    
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    timerElement.textContent = `Ends in: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeInSeconds > 0) {
        timeInSeconds--;
    } else {
        clearInterval(timerInterval); 
        timerElement.textContent = "Time's up!"; 
    }
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();


const counters = document.querySelectorAll('.count');

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;

        const updateCount = () => {
            const increment = target / 200; 
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count) + "+"; 
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + "+"; 
            }
        };

        updateCount();
    });
};

// Trigger the animation on scroll
const section = document.getElementById('number-animation');
const options = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(section);
        }
    });
}, options);

observer.observe(section);



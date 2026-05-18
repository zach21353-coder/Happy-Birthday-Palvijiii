// Music Player Functionality
const playPauseBtn = document.getElementById('playPauseBtn');
const birthdayAudio = document.getElementById('birthdayAudio');
let isPlaying = false;

playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
        birthdayAudio.pause();
        playPauseBtn.innerHTML = '<span class="play-icon">▶</span>';
        isPlaying = false;
    } else {
        birthdayAudio.play();
        playPauseBtn.innerHTML = '<span class="play-icon">⏸</span>';
        isPlaying = true;
    }
});

// When audio ends
birthdayAudio.addEventListener('ended', function() {
    playPauseBtn.innerHTML = '<span class="play-icon">▶</span>';
    isPlaying = false;
});

// Gift Box Click Handler
const giftBox = document.getElementById('giftBox');
const proposalModal = document.getElementById('proposalModal');
const closeModal = document.getElementById('closeModal');
const confetti = document.getElementById('confetti');
let giftOpened = false;

giftBox.addEventListener('click', function() {
    if (!giftOpened) {
        giftOpened = true;
        proposalModal.style.display = 'block';
        createConfetti();
        
        // Auto-play music when gift is opened
        if (!isPlaying) {
            birthdayAudio.play();
            playPauseBtn.innerHTML = '<span class="play-icon">⏸</span>';
            isPlaying = true;
        }
    }
});

// Close Modal
closeModal.addEventListener('click', function() {
    proposalModal.style.display = 'none';
    giftOpened = false;
    confetti.innerHTML = '';
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === proposalModal) {
        proposalModal.style.display = 'none';
        giftOpened = false;
        confetti.innerHTML = '';
    }
});

// Confetti Creation
function createConfetti() {
    const confettiPieces = 50;
    const colors = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#ff69b4', '#ffa500'];
    
    for (let i = 0; i < confettiPieces; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.top = '-10px';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = Math.random() * 10 + 5 + 'px';
        piece.style.height = Math.random() * 10 + 5 + 'px';
        piece.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
        piece.style.animationDelay = Math.random() * 0.5 + 's';
        
        confetti.appendChild(piece);
        
        // Remove piece after animation
        setTimeout(() => {
            piece.remove();
        }, 5000);
    }
}

// Add some interactivity to the page
console.log('🎉 Happy Birthday Palvijiii! 🎉');
console.log('Click the gift box to see the special surprise!');

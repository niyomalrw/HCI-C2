// --- Modal Logic (Account Creation) ---
const modal = document.getElementById('accountModal');
const profileBtn = document.getElementById('profileBtn');
const closeBtn = document.getElementById('closeModal');
const signupForm = document.getElementById('signupForm');

// Open modal
profileBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.getElementById('email').focus(); // Accessibility: Focus on first input
});

// Close modal (X button or clicking outside)
closeBtn.addEventListener('click', () => modal.classList.remove('active'));
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

// Escape key to close modal (Error Prevention/Control)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});

// Handle form submission (Simulating a loading state)
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btnText = document.querySelector('.btn-text');
    const spinner = document.querySelector('.spinner');
    
    // UI Feedback: Loading state
    btnText.textContent = "Creating...";
    spinner.style.display = "inline-block";
    
    setTimeout(() => {
        modal.classList.remove('active');
        showToast("Account created successfully!");
        // Reset button
        btnText.textContent = "Create Account";
        spinner.style.display = "none";
        signupForm.reset();
    }, 1500);
});

// --- Save Recipe Logic ---
const saveButtons = document.querySelectorAll('.save-btn');

saveButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent clicking the card from triggering
        this.classList.toggle('saved');
        
        if (this.classList.contains('saved')) {
            this.textContent = "❤️";
            showToast("Recipe saved to your favorites!");
        } else {
            this.textContent = "🤍";
            showToast("Recipe removed from favorites.");
        }
    });
});

// --- Toast Notification System ---
const toast = document.getElementById('toast');
let toastTimeout;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
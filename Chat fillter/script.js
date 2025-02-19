


const tab = document.querySelectorAll('.tab1');

tab.forEach((filter, index) => {
    filter.addEventListener('click', () => {
        tab.forEach(filter => filter.classList.remove('active'))
        filter.classList.add('active');
    })
})

// Get all the buttons
const maleButton = document.querySelector('.male');
const femaleButton = document.querySelector('.female');
const bothButton = document.querySelector('.both');

// Get all the chat-bars
const allChats = document.querySelectorAll('.chat-bars');

// Add event listeners for the buttons
maleButton.addEventListener('click', function () {
    filterChats('male');
});

femaleButton.addEventListener('click', function () {
    filterChats('female');
});

bothButton.addEventListener('click', function () {
    filterChats('both');
});

// Function to filter chats based on the gender
function filterChats(gender) {
    allChats.forEach(chat => {
        // If 'both' is selected, show all chats
        if (gender === 'both') {
            chat.style.display = 'flex';
        } else {
            // Hide chats that don't match the selected gender
            if (chat.getAttribute('data-type') === gender) {
                chat.style.display = 'flex';
            } else {
                chat.style.display = 'none';
            }
        }
    });
}

// Initially show all chats
filterChats('both');


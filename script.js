
const btn = document.getElementById('runaway-btn');
let jumps = 0;

btn.addEventListener('mouseover', () => {
    jumps++;

    // After 10 jumps, the button gets "tired" and stops moving (because i designed it as a game and )
    // This makes it achievable!
    if (jumps < 10) {
        const x = Math.random() * (window.innerWidth - btn.clientWidth);
        const y = Math.random() * (window.innerHeight - btn.clientHeight);
        
        btn.style.position = 'absolute';
        btn.style.left = x + 'px';
        btn.style.top = y + 'px';
        
        // Change text to mock the user
        const insults = ["Too slow!", "Missed me!", "Try again!", "Haha!", "Nope!"];
        btn.innerText = insults[Math.floor(Math.random() * insults.length)];
    } else {
        btn.innerText = "FINE, CLICK ME...";
        btn.style.backgroundColor = "white"; // Turns white so it looks "clickable"
    }
});

// When they finally click it!
btn.addEventListener('click', () => {
    alert("Level 1 Clear! Preparing your nightmare...");
    // This will eventually link to login.html (Level 2)
    // window.location.href = "login.html"; 
});
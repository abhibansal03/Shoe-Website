document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreText = document.getElementById('more-text');
    
    readMoreBtn.addEventListener('click', () => {
        moreText.classList.toggle('hidden');
        readMoreBtn.textContent = moreText.classList.contains('hidden') ? 'Read More' : 'Read Less';
    });

    const bioBtns = document.querySelectorAll('.bio-btn');
    bioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const bio = btn.nextElementSibling;
            bio.classList.toggle('hidden');
            btn.textContent = bio.classList.contains('hidden') ? 'View Bio' : 'Hide Bio';
        });
    });
});

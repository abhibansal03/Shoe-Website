document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const comments = document.getElementById('comments').value;

    alert(`Thank you for your feedback, ${name}!\nRating: ${rating} stars\nComments: ${comments}`);

    // Here you can add the code to send the form data to the server if needed
});

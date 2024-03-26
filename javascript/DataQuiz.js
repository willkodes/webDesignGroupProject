document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const answers = {
            question1: 'insight',
            question2: 'python',
            question3: 'data-prep'
        };
        
        const totalQuestions = Object.keys(answers).length;

        for (const questionId in answers) {
            const selectedOption = document.querySelector(`input[name=${questionId}]:checked`);
            if (selectedOption) {
                const selectedValue = selectedOption.value;
                const correctAnswer = answers[questionId];

                if (selectedValue === correctAnswer) {
                    selectedOption.parentElement.classList.add('correct');
                } else {
                    selectedOption.parentElement.classList.add('incorrect');
                    const correctOption = document.querySelector(`input[value=${correctAnswer}]`);
                    correctOption.parentElement.classList.add('correct');
                }
            }
        }

    });
});

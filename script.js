document.addEventListener('DOMContentLoaded', () => {
    const difficultySelector = document.getElementById('difficulty');
    const shapeInfo = document.getElementById('shapeInfo');
    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const feedback = document.getElementById('feedback');
    const scoreValue = document.getElementById('scoreValue');
    const nextQuestion = document.getElementById('nextQuestion');

    let currentShape = {};
    let score = 0;

    // Event listener untuk submit tebakan
    submitGuess.addEventListener('click', () => {
        const guess = parseFloat(guessInput.value);
        if (!isNaN(guess)) {
            checkAnswer(guess);
        } else {
            feedback.textContent = "Masukkan tebakan yang valid!";
        }
    });

    // Event listener untuk soal selanjutnya
    nextQuestion.addEventListener('click', () => {
        generateShape();
        feedback.textContent = '';
        guessInput.value = '';
        nextQuestion.style.display = 'none';
    });

    // Generate soal pertama kali
    generateShape();

    // Fungsi untuk menggenerate soal berdasarkan tingkat kesulitan
    function generateShape() {
        const difficulty = difficultySelector.value;
        currentShape = getRandomShape(difficulty);
        shapeInfo.textContent = `Bangun: ${currentShape.name}, Dimensi: ${currentShape.dimensions}`;
    }

    // Fungsi untuk cek jawaban
    function checkAnswer(guess) {
        const correctAnswer = currentShape.answer;

        if (Math.abs(guess - correctAnswer) <= 0.1) {
            feedback.textContent = "Tebakan kamu benar!";
            score += 10;
        } else {
            feedback.textContent = `Salah! Jawaban yang benar adalah ${correctAnswer}`;
        }

        scoreValue.textContent = score;
        nextQuestion.style.display = 'block';
    }

    // Fungsi untuk mengambil bangun acak
    function getRandomShape(difficulty) {
        const shapes = [
            { name: 'Persegi', dimensions: 'Sisi: 5 cm', answer: 25 },
            { name: 'Lingkaran', dimensions: 'Radius: 7 cm', answer: 154 },
            { name: 'Kubus', dimensions: 'Sisi: 4 cm', answer: 64 },
            { name: 'Segitiga', dimensions: 'Alas: 6 cm, Tinggi: 3 cm', answer: 9 },
        ];

        // Tambahkan variasi bentuk dan perhitungan lebih kompleks berdasarkan tingkat kesulitan
        if (difficulty === 'medium') {
            shapes.push(
                { name: 'Balok', dimensions: 'Panjang: 4 cm, Lebar: 2 cm, Tinggi: 3 cm', answer: 24 }
            );
        } else if (difficulty === 'hard') {
            shapes.push(
                { name: 'Kerucut', dimensions: 'Jari-jari: 3 cm, Tinggi: 4 cm', answer: 37.68 }
            );
        }

        return shapes[Math.floor(Math.random() * shapes.length)];
    }
});

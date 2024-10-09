document.addEventListener('DOMContentLoaded', () => {
    const shapeSelector = document.getElementById('shapeSelector');
    const inputFields = document.getElementById('inputFields');
    const calculateButton = document.getElementById('calculateButton');
    const result = document.getElementById('result');

    // Update input fields based on selected shape
    shapeSelector.addEventListener('change', () => {
        const selectedShape = shapeSelector.value;
        renderInputFields(selectedShape);
    });

    // Initial render for square
    renderInputFields('square');

    // Calculation logic
    calculateButton.addEventListener('click', () => {
        const selectedShape = shapeSelector.value;
        let calculationResult;

        switch (selectedShape) {
            case 'square':
                const side = parseFloat(document.getElementById('side').value);
                calculationResult = calculateSquare(side);
                break;
            case 'rectangle':
                const length = parseFloat(document.getElementById('length').value);
                const width = parseFloat(document.getElementById('width').value);
                calculationResult = calculateRectangle(length, width);
                break;
            case 'triangle':
                const base = parseFloat(document.getElementById('base').value);
                const height = parseFloat(document.getElementById('height').value);
                calculationResult = calculateTriangle(base, height);
                break;
            case 'circle':
                const radius = parseFloat(document.getElementById('radius').value);
                const piChoice = document.querySelector('input[name="pi"]:checked').value;
                calculationResult = calculateCircle(radius, piChoice);
                break;
            case 'cube':
                const edge = parseFloat(document.getElementById('edge').value);
                calculationResult = calculateCube(edge);
                break;
            case 'cuboid':
                const lengthCuboid = parseFloat(document.getElementById('lengthCuboid').value);
                const widthCuboid = parseFloat(document.getElementById('widthCuboid').value);
                const heightCuboid = parseFloat(document.getElementById('heightCuboid').value);
                calculationResult = calculateCuboid(lengthCuboid, widthCuboid, heightCuboid);
                break;
            case 'cone':
                const radiusCone = parseFloat(document.getElementById('radiusCone').value);
                const heightCone = parseFloat(document.getElementById('heightCone').value);
                calculationResult = calculateCone(radiusCone, heightCone);
                break;
            case 'cylinder':
                const radiusCylinder = parseFloat(document.getElementById('radiusCylinder').value);
                const heightCylinder = parseFloat(document.getElementById('heightCylinder').value);
                calculationResult = calculateCylinder(radiusCylinder, heightCylinder);
                break;
            default:
                calculationResult = 'Pilih bangun terlebih dahulu';
        }

        result.innerHTML = `<p>${calculationResult}</p>`;
    });

    function renderInputFields(shape) {
        switch (shape) {
            case 'square':
                inputFields.innerHTML = `
                    <label for="side">Masukkan sisi persegi (cm):</label>
                    <input type="number" id="side" min="0" placeholder="Sisi persegi">
                `;
                break;
            case 'rectangle':
                inputFields.innerHTML = `
                    <label for="length">Masukkan panjang (cm):</label>
                    <input type="number" id="length" min="0" placeholder="Panjang">
                    <label for="width">Masukkan lebar (cm):</label>
                    <input type="number" id="width" min="0" placeholder="Lebar">
                `;
                break;
            case 'triangle':
                inputFields.innerHTML = `
                    <label for="base">Masukkan alas segitiga (cm):</label>
                    <input type="number" id="base" min="0" placeholder="Alas">
                    <label for="height">Masukkan tinggi segitiga (cm):</label>
                    <input type="number" id="height" min="0" placeholder="Tinggi">
                `;
                break;
            case 'circle':
                inputFields.innerHTML = `
                    <label for="radius">Masukkan jari-jari lingkaran (cm):</label>
                    <input type="number" id="radius" min="0" placeholder="Jari-jari lingkaran">
                    <label for="pi">Pilih nilai π:</label>
                    <input type="radio" id="pi1" name="pi" value="22/7" checked> 22/7
                    <input type="radio" id="pi2" name="pi" value="3.14"> 3.14
                `;
                break;
            case 'cube':
                inputFields.innerHTML = `
                    <label for="edge">Masukkan panjang rusuk kubus (cm):</label>
                    <input type="number" id="edge" min="0" placeholder="Rusuk kubus">
                `;
                break;
            case 'cuboid':
                inputFields.innerHTML = `
                    <label for="lengthCuboid">Masukkan panjang balok (cm):</label>
                    <input type="number" id="lengthCuboid" min="0" placeholder="Panjang balok">
                    <label for="widthCuboid">Masukkan lebar balok (cm):</label>
                    <input type="number" id="widthCuboid" min="0" placeholder="Lebar balok">
                    <label for="heightCuboid">Masukkan tinggi balok (cm):</label>
                    <input type="number" id="heightCuboid" min="0" placeholder="Tinggi balok">
                `;
                break;
            case 'cone':
                inputFields.innerHTML = `
                    <label for="radiusCone">Masukkan jari-jari kerucut (cm):</label>
                    <input type="number" id="radiusCone" min="0" placeholder="Jari-jari kerucut">
                    <label for="heightCone">Masukkan tinggi kerucut (cm):</label>
                    <input type="number" id="heightCone" min="0" placeholder="Tinggi kerucut">
                `;
                break;
            case 'cylinder':
                inputFields.innerHTML = `
                    <label for="radiusCylinder">Masukkan jari-jari tabung (cm):</label>
                    <input type="number" id="radiusCylinder" min="0" placeholder="Jari-jari tabung">
                    <label for="heightCylinder">Masukkan tinggi tabung (cm):</label>
                    <input type="number" id="heightCylinder" min="0" placeholder="Tinggi tabung">
                `;
                break;
            default:
                inputFields.innerHTML = '';
        }
    }

    function calculateSquare(side) {
        const area = side * side;
        const perimeter = 4 * side;
        return `Luas persegi: ${area} cm², Keliling: ${perimeter} cm`;
    }

    function calculateRectangle(length, width) {
        const area = length * width;
        const perimeter = 2 * (length + width);
        return `Luas persegi panjang: ${area} cm², Keliling: ${perimeter} cm`;
    }

    function calculateTriangle(base, height) {
        const area = 0.5 * base * height;
        return `Luas segitiga: ${area} cm²`;
    }

    function calculateCircle(radius, piValue) {
        const pi = piValue === '22/7' ? 22 / 7 : 3.14;
        const area = pi * radius * radius;
        const circumference = 2 * pi * radius;
        return `Luas lingkaran: ${area} cm², Keliling: ${circumference} cm`;
    }

    function calculateCube(edge) {
        const volume = edge ** 3;
        const surfaceArea = 6 * (edge ** 2);
        return `Volume kubus: ${volume} cm³, Luas permukaan: ${surfaceArea} cm²`;
    }

    function calculateCuboid(length, width, height) {
        const volume = length * width * height;
        const surfaceArea = 2 * (length * width + width * height + height * length);
        return `Volume balok: ${volume} cm³, Luas permukaan: ${surfaceArea} cm²`;
    }

    function calculateCone(radius, height) {
        const volume = (1 / 3) * Math.PI * radius ** 2 * height;
        const slantHeight = Math.sqrt(radius ** 2 + height ** 2);
        const surfaceArea = Math.PI * radius * (radius + slantHeight);
        return `Volume kerucut: ${volume.toFixed(2)} cm³, Luas permukaan: ${surfaceArea.toFixed(2)} cm²`;
    }

    function calculateCylinder(radius, height) {
        const volume = Math.PI * radius ** 2 * height;
        const surfaceArea = 2 * Math.PI * radius * (radius + height);
        return `Volume tabung: ${volume.toFixed(2)} cm³, Luas permukaan: ${surfaceArea.toFixed(2)} cm²`;
    }
});

document.getElementById('backButton').addEventListener('click', () => {
    window.location.href = "https://sites.google.com/view/sismul-kelompok2-2024/";
});

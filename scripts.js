document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'https://da6zin.github.io/Empresa-VisualizarAndamento/'; // Troque pela URL desejada
});

const inputFields = document.querySelectorAll('.input-field');

inputFields.forEach(field => {
    field.addEventListener('input', () => {
        if (field.value.trim() !== '') {
            field.style.borderColor = 'black';
        } else {
            field.style.borderColor = 'red';
        }
    });
});

// Função para abrir o menu lateral
document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '250px';
});

// Função para fechar o menu lateral
document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
});


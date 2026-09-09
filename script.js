const addStudentBtn = document.getElementById('add-student-btn');
const studentList = document.getElementById('student-list');

function addStudent() {
    const name = document.getElementById('student-name').value.trim();
    const registerNumber = document.getElementById('register-number').value.trim();
    const programme = document.getElementById('programme').value.trim();

    if (!name || !registerNumber || !programme) {
        alert('Please fill in all fields.');
        return;
    }

    const card = document.createElement('div');
    card.className = 'student-card';
    card.innerHTML = `
        <h3>${name}</h3>
        <p>Register Number: ${registerNumber}</p>
        <p>Programme: ${programme}</p>
    `;
    studentList.appendChild(card);

    document.getElementById('student-name').value = '';
    document.getElementById('register-number').value = '';
    document.getElementById('programme').value = '';
}

addStudentBtn.addEventListener('click', addStudent);
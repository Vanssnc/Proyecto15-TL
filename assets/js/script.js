let tasks = [
    { id: 1, name: 'Pasear al perro', completed: false },
    { id: 2, name: 'Comprar pan', completed: true },
    { id: 3, name: 'Hacer lista del súper', completed: false }
];

updateTaskList();
updateCounters();

document.getElementById('botonAgregar').addEventListener('click', function() {
    let taskInput = document.getElementById('inputTarea').value;

    if (taskInput.trim() === '') {
        alert('Por favor ingresa una tarea.');
        return;
    }

    let newTask = {
        id: tasks.length + 1,
        name: taskInput,
        completed: false
    };

    tasks.push(newTask);

    document.getElementById('inputTarea').value = '';

    updateTaskList();
    updateCounters();
});

function updateTaskList() {
    let taskList = document.getElementById('listaTareas');
    taskList.innerHTML = ''; 

    tasks.forEach(task => {
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>
                <input type="checkbox" class="form-check-input" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
            </td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Eliminar</button>
            </td>
        `;

        taskList.innerHTML += `
    <tr>
        <td>${task.id}</td>
        <td>${task.name}</td>
        <td>
            <input type="checkbox" class="form-check-input" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
        </td>
        <td>
            <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Eliminar</button>
        </td>
    </tr>
`;
    });
}

function updateCounters() {
    let totalTasks = tasks.length;
    let completedTasks = 0;

    tasks.forEach(task => {
        if (task.completed) {
            completedTasks++;
        }
    });

    document.getElementById('contTotal').textContent = totalTasks;
    document.getElementById('contRealizada').textContent = completedTasks;
}

function toggleTask(id) {
    tasks.forEach(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
    });
    updateTaskList();
    updateCounters();
}

function deleteTask(id) {
    tasks.forEach((task, index) => {
        if (task.id === id) {
            tasks.splice(index, 1);
        }
    });
    updateTaskList();
    updateCounters();
}
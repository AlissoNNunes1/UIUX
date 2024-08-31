const addTaskButton = document.querySelector('.add-task');
const taskItems = document.querySelector('.task-items');

addTaskButton.addEventListener('click', () => {
  const newTask = prompt('Digite a nova tarefa:');
  if (newTask) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('task-item');
    newListItem.innerHTML = `
      <span class="initial">${newTask.charAt(0)}</span>
      <span class="priority medium">★</span>
      <span class="description">${newTask}</span>
      <span class="status">✓</span>
    `;
    taskItems.appendChild(newListItem);
  }
});
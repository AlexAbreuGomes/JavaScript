document.addEventListener('DOMContentLoaded', () => {
    const habitsList = document.getElementById('habits-list');
    const loadBtn = document.getElementById('load-btn');
    const addBtn = document.getElementById('add-btn');
    const saveBtn = document.getElementById('save-btn');
  
    loadBtn.addEventListener('click', loadHabits);
    addBtn.addEventListener('click', addHabit);
    saveBtn.addEventListener('click', saveHabits);
  
    function loadHabits() {
      habitsList.innerHTML = '';
      const habits = JSON.parse(localStorage.getItem('habits')) || [];
      habits.forEach((habit, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${habit.name} - ${habit.status}`;
        habitsList.appendChild(li);
      });
    }
  
    function addHabit() {
      const habitName = prompt('Enter habit name:');
      const habitStatus = prompt('Enter habit status (good/bad):');
      const habits = JSON.parse(localStorage.getItem('habits')) || [];
      habits.push({ name: habitName, status: habitStatus });
      localStorage.setItem('habits', JSON.stringify(habits));
      loadHabits();
    }
  
    function saveHabits() {
      const habits = JSON.parse(localStorage.getItem('habits')) || [];
      localStorage.setItem('habits', JSON.stringify(habits));
    }
  
    loadHabits();
  });
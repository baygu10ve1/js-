document.getElementById('categorizeBtn').addEventListener('click', categorizeRows);

function categorizeRows() {
    const rows = document.querySelectorAll('#dataTable tbody tr');
    let lowCount = 0, mediumCount = 0, highCount = 0;

    // Удаляем классы с предыдущих категорий
    rows.forEach(row => {
        row.classList.remove('low', 'medium', 'high');
    });

    rows.forEach(row => {
        const price = parseInt(row.cells[1].textContent);
        
        if (price < 20) {
            row.classList.add('low');
            lowCount++;
        } else if (price >= 20 && price <= 80) {
            row.classList.add('medium');
            mediumCount++;
        } else {
            row.classList.add('high');
            highCount++;
        }
    });

    // Обновить счетчики
    document.getElementById('lowCount').textContent = `Низкие: ${lowCount}`;
    document.getElementById('mediumCount').textContent = `Средние: ${mediumCount}`;
    document.getElementById('highCount').textContent = `Высокие: ${highCount}`;
}

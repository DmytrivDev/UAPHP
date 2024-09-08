document.addEventListener('DOMContentLoaded', () => {
  const downloadLink = document.querySelector('.file-link');
  if (downloadLink) {
    const fileNameElement = downloadLink.querySelector('.file-name');

    // Получаем путь к файлу из атрибута href
    const filePath = downloadLink.getAttribute('href');

    // Извлекаем имя файла из пути
    const fileName = filePath.split('/').pop();

    // Заменяем текст в элементе <span> на имя файла
    fileNameElement.textContent = `Прикріпленний файл ${fileName}`;
  }
});

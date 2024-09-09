import NiceSelect from 'nice-select2';

const archiveSelect = document.querySelector('.archive__select');
const nearSelect = document.querySelector('.near__select');
const futureSelect = document.querySelector('.future__select');

if (archiveSelect) {
  partNiceSelect(archiveSelect);
}
if (nearSelect) {
  partNiceSelect(nearSelect);
}
if (futureSelect) {
  partNiceSelect(futureSelect);
}

function partNiceSelect(part) {
  new NiceSelect(part, {
    searchable: false,
  });

  function updateSelectText() {
    const selectedOption = part.options[part.selectedIndex].text;
    const customText = `Тип заходу: ${selectedOption}`;

    const display = document.querySelector('.nice-select .current');
    if (display) {
      display.textContent = customText;
    }
  }
  updateSelectText();

  part.addEventListener('change', updateSelectText);
}

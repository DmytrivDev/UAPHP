import NiceSelect from 'nice-select2';

const archiveSelect = document.querySelector('.archive__select select');
const nearSelect = document.querySelector('.near__select select');
const futureSelect = document.querySelector('.future__select select');

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

    const filtercont = part.closest('.filtercont');

    const display = filtercont.querySelector('.nice-select .current');

    if (display) {
      display.textContent = customText;
    }
  }
  updateSelectText();

  part.addEventListener('change', updateSelectText);
}

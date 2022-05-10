function highlight(table) {
  let allRows = table.querySelectorAll('tr');

  for (let i = 1; i < allRows.length; i++) {
    let status = allRows[i].cells[3];
    let gender = allRows[i].cells[2];
    let age = allRows[i].cells[1];

    if (status.dataset.available === 'true') {
      allRows[i].classList.add('available');
    } else if (status.dataset.available === 'false') {
      allRows[i].classList.add('unavailable');
    } else if (!status.hasAttribute('data-available')){
      allRows[i].hidden = true;
    }

    if (gender.innerText === 'm') {
      allRows[i].classList.add('male');
    } else {
      allRows[i].classList.add('female');
    }

    if (+age.innerText < '18') {
      allRows[i].style.textDecoration = 'line-through';
    }
  }
}

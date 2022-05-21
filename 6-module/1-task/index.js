/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {

  constructor(rows) {
    this.rows = rows;
    this.createTable()
  }

  createTable() {
    let table = document.createElement('TABLE');
    this.elem = table;

    table.innerHTML = `
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
    `
    table.innerHTML += this.rows.map(obj => {
      return `
        <tbody>
          <tr>
            <td>${obj.name}</td>
            <td>${obj.age}</td>
            <td>${obj.salary}</td>
            <td>${obj.city}</td>
            <td><button>X</button></td>
          </tr>
        </tbody>
      `
    }).join('');
    
    for (let i = 0; i < this.rows.length; i++){
      table.querySelectorAll('button')[i].addEventListener('click', this.delete);
    }

    return table;
  }

  delete(event) {
    if(event.target.tagName === 'BUTTON') {
      let btnRow = event.target.closest('tr');
      
      btnRow.remove();
      }
  }

}


function showSalary(users, age) {
  let filteredUsers = users.filter(user => user.age <= age);
    let result = '';

    for (let i = 0; i < filteredUsers.length; i++) {
        result += `${filteredUsers[i].name}, ${filteredUsers[i].balance}\n`;
    }
    return result.trim();
}

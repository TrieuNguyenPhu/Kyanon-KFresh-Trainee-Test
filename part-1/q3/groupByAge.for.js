function groupUsersByAge(users) {
  const result = {};

  for (let i = 0; i < users.length; i++) {
    const { age, name } = users[i];

    if (!result[age]) {
      result[age] = [];
    }

    result[age].push(name);
  }

  return result;
}

module.exports = groupUsersByAge;
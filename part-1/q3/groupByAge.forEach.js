function groupUsersByAge(users) {
  const result = {};

  users.forEach(({ age, name }) => {
    if (!result[age]) {
      result[age] = [];
    }

    result[age].push(name);
  });

  return result;
}

module.exports = groupUsersByAge;
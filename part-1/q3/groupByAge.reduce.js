function groupUsersByAge(users) {
  return users.reduce((result, user) => {
    const { age, name } = user;

    if (!result[age]) {
      result[age] = [];
    }

    result[age].push(name);
    return result;
  }, {});
}

module.exports = groupUsersByAge;
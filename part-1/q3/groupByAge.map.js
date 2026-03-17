function groupUsersByAge(users) {
  const map = new Map();

  users.forEach(({ age, name }) => {
    if (!map.has(age)) {
      map.set(age, []);
    }
    map.get(age).push(name);
  });

  return Object.fromEntries(map);
}

module.exports = groupUsersByAge;
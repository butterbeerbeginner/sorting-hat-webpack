const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  // eslint-disable-next-line no-shadow
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];
  return sortingHat;
};

export default sortingHat;

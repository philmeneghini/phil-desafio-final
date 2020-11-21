function toFilterText(launches, filter) {
  const lowerCaseFilter = filter.toLowerCase();
  const filteredLaunches = launches.filter((launch) =>
    launch.descriptionLowerCase.includes(lowerCaseFilter)
  );

  return filteredLaunches;
}

export { toFilterText };

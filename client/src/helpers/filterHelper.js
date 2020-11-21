function toFilterText(launches, filter) {
  const filteredLaunches = launches.filter((launch) =>
    launch.description.includes(filter)
  );

  return filteredLaunches;
}

export { toFilterText };

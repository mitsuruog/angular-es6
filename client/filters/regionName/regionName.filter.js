export default class regionName {

  constructor() {}

  activate() {
    return (input, regions) => {
      let regionName = '';
      angular.forEach(regions, function(region) {
        if (region.id === input) regionName = region.name;
      });
      return regionName;
    }
  }

}

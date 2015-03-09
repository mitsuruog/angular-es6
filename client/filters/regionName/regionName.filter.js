export default class regionName {

  constructor() {
    return (input, regions) => {
      let regionName = '';
      angular.forEach(regions, function(region) {
        if (region.id === input) regionName = region.name;
      });
      return regionName;
    }
  }

  static activate(){
    regionName.instance = new regionName();
    return regionName.instance;
  }

}

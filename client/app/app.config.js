export default class AppConfig {

  constructor($locationProvider) {
    $locationProvider.html5Mode(true);
  }

  static activate($locationProvider) {
    AppConfig.instance = new AppConfig($locationProvider);
    return AppConfig.instance;
  }

}

AppConfig.$inject = ['$locationProvider'];

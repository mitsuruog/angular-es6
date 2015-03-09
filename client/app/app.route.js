export default class AppRouter {

  constructor($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/list');

    $stateProvider.state('app', {
      abstract: true,
      url: '/#',
      template: `<div ui-view="header"></div>
        <div ui-view="contents" class="main"></div>
        <div ui-view="footer"></div>`
    })

    // アプリルート
    .state('app.root', {
      url: '^/',
      abstract: true,
      views: {
        'header@app': {
          templateUrl: 'components/header/header.html'
        },
        'contents@app': {
          template: '<div>main template<div>'
        },
        'footer@app': {
          templateUrl: 'components/footer/footer.html'
        }
      }
    })

    // メンバー一覧
    .state('app.root.list', {
      url: '^/list',
      views: {
        'contents@app': {
          templateUrl: 'app/list/list.html',
          controllerAs: 'vm',
          controller: 'ListController'
        }
      }
    })

    // メンバー登録
    .state('app.root.add', {
      url: '^/add',
      views: {
        'contents@app': {
          templateUrl: 'app/add/add.html',
          controllerAs: 'vm',
          controller: 'AddController'
        }
      }
    })

    // メンバー編集
    .state('app.root.edit', {
      url: '^/edit/:id',
      views: {
        'contents@app': {
          templateUrl: 'app/edit/edit.html',
          controllerAs: 'vm',
          controller: 'EditController'
        }
      }
    });

  }

  static activate($stateProvider, $urlRouterProvider) {
    AppRouter.instance = new AppRouter($stateProvider, $urlRouterProvider);
    return AppRouter.instance;
  }

}

AppRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

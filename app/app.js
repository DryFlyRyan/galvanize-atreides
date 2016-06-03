'use strict';
/**
 * @ngdoc overview
 * @name atreides
 * @description
 * # atreides
 *
 * Main module of the application.
 */
angular.module('atreides', [
    'ui.bootstrap',
    'oc.lazyLoad',
    'ui.router',
    'angular-loading-bar',
    'angularMoment'
  ]).config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider', '$locationProvider', function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider, $locationProvider) {

    $ocLazyLoadProvider.config({
      debug:false,
      events:true
    });

    // $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'app/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'atreides',
                    files:[
                    'app/dashboard/sidebar/sidebar.js',
                    'app/dashboard/sidebar/sidebar-search/sidebar-search.js',
                    'app/charts/chart-contoller.js',
                    'app/users/users.js',
                    'app/modals/modal.js',
                    'app/services/http-services/user-service.js',
                    'app/services/http-services/campus-service.js',
                    'app/services/http-services/beer-search-service.js',
                    'app/services/schedule-services/schedule-service.js',
                    'app/services/modal-services/modal-service.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                   "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
                $ocLazyLoad.load(
                  {
                    name:'moment',
                    files:['bower_components/moment/moment.js']
                  }
                )
                $ocLazyLoad.load(
                  {
                    name:'angular-moment',
                    files:['bower_components/angular-moment/angular-moment.js']
                  }
                )
            },
            loadMyFile:function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name:'chart.js',
                files:[
                  'bower_components/angular-chart.js/dist/angular-chart.min.js',
                  'bower_components/angular-chart.js/dist/angular-chart.css'
                ]
              })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'app/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'atreides',
              files:[
              'app/dashboard/dashboard.js',
              'app/services/http-services/tap-service.js'
              ]
            })
          }
        }
      })
      .state('dashboard.taps',{
        url:'/taps/:tapID',
        controller: 'MainCtrl',
        templateUrl:'app/dashboard/tap.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'atreides',
              files:[
              'app/dashboard/dashboard.js',
              'app/services/http-services/tap-service.js',
              ]
            })
          }
        }
      })
      .state('dashboard.beersearch',{
        url:'/beersearch/:tapID',
        params: {
          tapID: null,
        },
        controller: 'BeerSearchCtrl',
        templateUrl:'app/dashboard/beer-search/beer-search.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'atreides',
              files:[
              'app/dashboard/beer-search/beer-search.js',
              'app/services/http-services/tap-service.js'
              ]
            })
          }
        }
      })
      .state('dashboard.campuses',{
        url:'/campuses',
        controller: 'CampusCtrl',
        templateUrl:'app/campuses/campuses.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'atreides',
              files:[
              'app/campuses/campuses.js',
              'app/services/http-services/campus-service.js',
              ]
            })
          }
        }
    })
      .state('dashboard.campuses.campus', {
        url:'/{campusID}',
        controller: 'CampusCtrl',
        templateUrl:'app/campuses/campus.html',

    })
      .state('dashboard.users',{
        url:'/users',
        controller: 'UserCtrl',
        templateUrl:'app/users/users.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'atreides',
              files:[
              'app/users/users.js',
              'app/services/http-services/user-service.js',
              'app/campuses/campuses.js',
              'app/services/http-services/campus-service.js'
              ]
            })
          }
        }
    })
      .state('dashboard.users.user', {
        url:'/users/{userID}',
        controller: 'UserCtrl',
        templateUrl:'app/users/user.html'
    })
      .state('dashboard.devices',{
        url:'/devices',
        controller: 'DeviceCtrl',
        templateUrl:'app/devices/devices.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'atreides',
              files:[
              'app/devices/devices.js',
              'app/services/http-services/device-service.js',
              ]
            })
          }
        }
    })
      .state('dashboard.ontap',{
        url:'/ontap',
        controller: 'MainCtrl',
        templateUrl:'app/on-tap-display/ontap.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'atreides',
              files:[
              'app/dashboard/main.js',
              'app/services/http-services/tap-service.js',
              ]
            })
          }
        }
      })


  }])

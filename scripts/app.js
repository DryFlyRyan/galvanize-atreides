'use strict';
/**
 * @ngdoc overview
 * @name galvanizeFlowMonitor
 * @description
 * # galvanizeFlowMonitor
 *
 * Main module of the application.
 */
angular.module('galvanizeFlowMonitor', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ]).config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider', '$locationProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dev/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'galvanizeFlowMonitor',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js',
                    'scripts/controllers/chartContoller.js'
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
                    files:['bower_components/aangular-moment/angular-momeont.js']
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
        templateUrl:'views/dev/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'galvanizeFlowMonitor',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/services/tapService.js',
              ]
            })
          }
        }
      })
    //   .state('login',{
    //     templateUrl:'views/pages/login.html',
    //     url:'/login'
    // })
      .state('dashboard.devices',{
        url:'/devices/{deviceID}',
        controller: 'MainCtrl',
        templateUrl:'views/dev/dashboard/device.html'
    })
      .state('dashboard.campuses',{
        url:'/campuses',
        controller: 'CampusCtrl',
        templateUrl:'views/dev/campuses/campuses.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'galvanizeFlowMonitor',
              files:[
              'scripts/controllers/campuses.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/services/campusService.js',
              ]
            })
          }
        }
    })
      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'galvanizeFlowMonitor',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })


  }]);

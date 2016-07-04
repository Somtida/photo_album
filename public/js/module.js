'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url: '/',
      template: '<h1>Welcome</h1>',
    })

    .state('showall', {
      url: '/showall',
      templateUrl: '/html/showAllAlbum.html',
      controller: 'showallCtrl'
    })
    .state('showall.photoAlbum', {
      url: '/photoAlbum',
      templateUrl: '/html/showAllAlbum.html',
      controller: 'showallCtrl'
    })
    .state('showall.addPhotoToAlbum', {
      url: '/addPhotoToAlbum',
      templateUrl: '/html/addPhotoToAlbum.html',
      controller: 'showallCtrl'
    })

    .state('createAlbum', {
      url: '/createAlbum',
      templateUrl: '/html/createAlbum.html',
      controller: 'createAlbumCtrl'
    })

    // .state('addPhotoToAlbum', {
    //   url: '/addPhotoToAlbum',
    //   templateUrl: '/html/addPhotoToAlbum.html',
    //   controller: 'addPhotoToAlbumCtrl'
    // })


    .state('photos', {
      url: '/photos',
      templateUrl: '/html/photos.html',
      controller: 'photosCtrl'
    })
    .state('photos.showAllPhoto', {
      url: '/addPhoto',
      templateUrl: '/html/showAllPhoto.html',
      controller: 'photosCtrl'
    })
    .state('addPhoto', {
      url: '/addPhoto/:id',
      templateUrl: '/html/addPhoto.html',
      controller: 'photosCtrl',
      params: {}
    })


})

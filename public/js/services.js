'use strict';

var app = angular.module('myApp');

app.service('Gallery', function($http){
  this.photoGalleries = [];

  this.get = () => $http.get('/api/galleries');

  this.post = newGallery => {
    return $http.post('/api/galleries', newGallery);
  }
  this.delete = id => {
    return $http.delete(`/api/galleries/${id}`);
  }
  this.putPhoto = (id, photoId) => {
    return $http.put(`/api/galleries/${id}/addPhoto/${renterId}`);
  }
  this.put = (id, newGallery) => {
    return $http.put(`/api/galleries/${id}`, newGallery);
  }

})

app.service('Photo', function($http){
  this.photos = [];
  this.get = () => {
    return $http.get('/api/photos');
  }
  this.post = newPhoto => {
    return $http.post('/api/photos', newPhoto);
  }
  this.delete = id => {
    return $http.delete(`/api/photos/${id}`);
  }
  // this.put = (id, newPhoto) => {
  //   return $http.put(`/api/photos/${id}/`, newPhoto);
  // }
})

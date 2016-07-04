'use strict';

var app = angular.module('myApp');

app.service('Gallery', function($http){
  this.photoGalleries = [];

  this.get = () => $http.get('/api/galleries');
  this.getById = (id) => $http.get(`/api/galleries/${id}`);

  this.post = newGallery => {
    return $http.post('/api/galleries', newGallery);
  }
  this.delete = id => {
    return $http.delete(`/api/galleries/${id}`);
  }
  this.deletePhoto = (id, photoId) => {
    return $http.delete(`/api/galleries/${id}`, photoId);
  }
  this.putPhoto = (id, newImage) => {
    return $http.put(`/api/galleries/addPhoto/${id}`, newImage);
  }
  // this.putPhoto = (id, photoId) => {
  //   return $http.put(`/api/galleries/addPhoto/${id}/${photoId}`);
  // }
  this.put = (id, newGallery) => {
    return $http.put(`/api/galleries/${id}`, newGallery);
  }

})

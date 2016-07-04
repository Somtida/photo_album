'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, Gallery) {
  console.log('mainCtrl!');
  $scope.photoGalleries = [];
  Gallery.get()
    .then(res=>{
      console.log("res.data: ",res.data);
      Gallery.photoGalleries = res.data;
      $scope.photoGalleries = Gallery.photoGalleries;
      console.log("Gallery.photoGalleries: ", Gallery.photoGalleries);
    })
    .catch(err=>{
      console.log("err: ",err);
    })


});

app.controller('createAlbumCtrl', function($scope, Gallery){
  console.log('createAlbumCtrl');
  $scope.createNewAlbum = () => {
    console.log("$scope.newAlbum: ",$scope.newAlbum);
    Gallery.post($scope.newAlbum)
      .then(res => {
        console.log("posted");
        $scope.newAlbum = null;
      })
      .catch(err => {
        console.log("err: ",err);
      })
  }

  $scope.resetCreateGalArea = () => {
    $scope.newAlbum = null;
  }
});


app.controller('photosCtrl', function($scope, $stateParams, Gallery){
  console.log('photosCtrl');
  console.log("$stateParams: ",$stateParams);
  $scope.stateParams = $stateParams;
  console.log("id:", $stateParams.id);

  $scope.album =[];
  Gallery.getById($stateParams.id)
    .then(res => {
      console.log("res.data: ",res.data);
      $scope.album = res.data;
    })
    .catch(err => {
      console.log("err: ",err);
    })


  $scope.addImage = false;
  $scope.addImageButton = true;
  $scope.showAddArea = () => {
    $scope.addImage = true;
    $scope.addImageButton = false;
  }

  $scope.closeAddPhoArea = () => {
    $scope.addImage = false;
    $scope.addImageButton = true;
  }

  $scope.expandImage = () => {
    console.log("expand");
  }

  $scope.deletePhoto = (index) => {
    console.log("index: ", index);
    let photoId = $scope.album.photos[index]._id;
    console.log("id: ", photoId);
    // let id = Photo.photos[index]._id;
    // console.log("id: ",id);

    Gallery.deletePhoto($stateParams.id, photoId)
    .then(res => {
        console.log("added photo");
        $scope.newImage = null;
        $scope.addImage = false;
        $scope.addImageButton = true;
      })
      .catch(err => {
        console.log("err: ",err);
      })

    // Gallery.delete(id)
    //   .then(() =>{
    //     console.log("deleted");
    //   })
    //   .catch(err => {
    //     console.log("err: ", err);
    //   })
    // $scope.photoGalleries.splice(index, 1);
    // Photo.photos.splice(index, 1);
  }

  $scope.resetaddPhoArea = () => {
    $scope.newImage = null;
  }

  $scope.addNewPhoto = () => {

    console.log("$scope.newImage: ", $scope.newImage);

    Gallery.putPhoto($stateParams.id, $scope.newImage)
    .then(res => {
        console.log("added photo");
        $scope.newImage = null;
        $scope.addImage = false;
        $scope.addImageButton = true;
      })
      .catch(err => {
        console.log("err: ",err);
      })
  }



});


app.controller('showallCtrl', function($scope, Gallery){
  console.log('showallCtrl');




  $scope.editArea = false;
  $scope.showAlbumBox = true;
  $scope.myindex;

  $scope.deleteAlbum = (index) => {

    let id = Gallery.photoGalleries[index]._id;
    console.log("id: ",id);
    Gallery.delete(id)
      .then(() =>{
        console.log("deleted");
      })
      .catch(err => {
        console.log("err: ", err);
      })
    // $scope.photoGalleries.splice(index, 1);
    Gallery.photoGalleries.splice(index, 1);
  }

  $scope.cancelEdit = () => {
    $scope.editArea = false;
    $scope.showAlbumBox = true;
  }

  $scope.editAlbum = (index) => {
    $scope.myindex = index;
    $scope.editArea = true;
    $scope.showAlbumBox = false;
    let id = $scope.photoGalleries[index]._id;
    console.log("id: ",id);
    $scope.editGalleryObj = angular.copy($scope.photoGalleries[index]);
    // console.log("$scope.editGalleryObj: ",$scope.editGalleryObj);
    // console.log($scope.editGalleryObj.name);

  }
  $scope.saveEditGallery = () => {
    $scope.editArea = false;
    $scope.showAlbumBox = true;
    console.log("$scope.editGalleryObj:",$scope.editGalleryObj);
    let id = $scope.editGalleryObj._id;
    console.log("id: ",id);

    Gallery.put(id, $scope.editGalleryObj)
      .then(res=>{
        console.log("edited");
        console.log("res.data: ",res.data);
      })
      .catch(err=>{
        console.log("err: ",err);
      })

    Gallery.photoGalleries[$scope.myindex] = $scope.editGalleryObj;
  }

})

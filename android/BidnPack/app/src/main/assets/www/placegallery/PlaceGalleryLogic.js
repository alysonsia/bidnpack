'use strict';
angular.module('PlaceGallery', ['ngAnimate', 'ngTouch', 'ui.bootstrap'])
  .controller('MainCtrl', function ($scope) {
});
angular.module('PlaceGallery').controller('Carousel1Ctrl', function ($scope) {
  var slides = $scope.slides = [];
  $scope.addSlide = function(index) {
    slides.push({
      image: 'https://gojiberry.iriscouch.com/events/5d248e1afe44c11f369c36a785000c3e/bohol'+index+'.jpg',
      text: ['Beach','Chocolate Hills','Tarsier Watching','Hotel'][slides.length % 4],
      place: ['Bohol','Bohol','Bohol','Bohol'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide(i+1);
  }
});
angular.module('PlaceGallery').controller('Carousel2Ctrl', function ($scope) {
  $scope.myInterval = 0;
  var slides = $scope.slides = [];
  $scope.addSlide = function(index) {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'https://gojiberry.iriscouch.com/events/5d248e1afe44c11f369c36a785000c3e/boracay'+index+'.jpg',
      text: ['White Sand','Sunset','Willy\'s Rock','Ariel\'s Point'][slides.length % 4],
      place: ['Boracay','Boracay','Boracay','Boracay'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide(i+1);
  }
});
angular.module('PlaceGallery').controller('Carousel3Ctrl', function ($scope) {
  $scope.myInterval = 0;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/602',
      text: ['Whitewater Rafting','Cave of Gold','Macahambus Adventure Park','City Tour'][slides.length % 4],
      place: ['Cagayan de Oro','Cagayan de Oro','Cagayan de Oro','Cagayan de Oro'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});
angular.module('PlaceGallery').controller('Carousel4Ctrl', function ($scope) {
  $scope.myInterval = 0;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/602',
      text: ['Magellan\'s Cross','Whale Shark Encounter','Cebu Tops','Cultural Show'][slides.length % 4],
      place: ['Cebu','Cebu','Cebu','Cebu'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});
'use strict';

angular.module('PlaceGallery', ['ngAnimate', 'ngTouch', 'ui.bootstrap'])
  .controller('MainCtrl', function ($scope) {
    /*
    // Set of Photos
    $scope.photos = [
        {src: 'https://gojiberry.iriscouch.com/events/ea843cde1cb719826760be79f0001082/bohol.jpg', desc: 'Bohol'},
        {src: 'https://gojiberry.iriscouch.com/events/ea843cde1cb719826760be79f0001082/boracay.jpg', desc: 'Boracay'},
        {src: 'https://gojiberry.iriscouch.com/events/ea843cde1cb719826760be79f0001082/cagayandeoro.jpg', desc: 'Cagayan de Oro'},
        {src: 'https://gojiberry.iriscouch.com/events/ea843cde1cb719826760be79f0001082/cebu.jpg', desc: 'Cebu'}
    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };

    // show bid page
    $scope.showBidPage = function (index) {
        //$scope._Index = index;
        cobalt.navigate('push','placegallery2/PlaceGalleryUI2.html','push')
    };*/
});

angular.module('PlaceGallery').controller('ButtonsCtrl', function ($scope) {
  //$scope.singleModel = 1;
});

angular.module('PlaceGallery').controller('Carousel1Ctrl', function ($scope) {
  $scope.myInterval = 0;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/602',
      text: ['Chocolate Hills','Tarsier Watching','Blood Compact','Loboc River Cruise'][slides.length % 4],
      place: ['Bohol','Bohol','Bohol','Bohol'][slides.length % 4]
       //+ ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});
angular.module('PlaceGallery').controller('Carousel2Ctrl', function ($scope) {
  $scope.myInterval = 0;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/602',
      text: ['White Sand','Willy\'s Rock','Ariel\'s Point','Motag Living Museum'][slides.length % 4],
      place: ['Boracay','Boracay','Boracay','Boracay'][slides.length % 4]
       //+ ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
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
       //+ ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
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
       //+ ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});
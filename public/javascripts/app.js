angular.module('picture', [])
    .controller('MainCtrl', [
  '$scope', '$http',
  function ($scope, $http) {
            $scope.pictures = [];
            $scope.addPicture = function () {
                var newPicture = {
                    url: $scope.url,
                    caption: $scope.caption
                };
                if ($scope.url === '') {
                    return;
                }
                console.log(newPicture);
                $scope.create(newPicture);
                $scope.url = '';
                $scope.caption = '';
            };

            $scope.getAll = function () {
              return $http.get('/pictures').success(function(data){
                angular.copy(data, $scope.pictures);
              })
            }

<<<<<<< HEAD
            $scope.delete = function(picture) {
              console.log(picture);
              $http.delete('/pictures/' + picture._id).success(
=======
            $scope.delete = function(pictures) {
              $http.delete('/pictures/:' + picture._id).success(
>>>>>>> 52d7f8571717e03ba6b575020f53dcef86e4f53c
                function (data) {
                  console.log("delete is working")
                });
              $scope.getAll();
            };

            $scope.create = function (picture) {
              console.log(picture);
                return $http.post('/pictures', picture).success(function (data) {
                    $scope.pictures.push(data);
                });
            };

            $scope.getAll();
            // $scope.delete = function (picture) {
            //     $http.delete('/pictures/' + picture._id)
            //         .success(function (data) {
            //             console.log("delete worked");
            //         });
            //     $scope.getAll();
            // };

            // $scope.upvote = function (comment) {
            //     return $http.put('/comments/' + comment._id + '/upvote')
            //         .success(function (data) {
            //             console.log("upvote worked");
            //             comment.upvotes = data.upvotes;
            //         });
            // };

            // $scope.incrementUpvotes = function (comment) {
            //     $scope.upvote(comment);
            // };
  }
]);

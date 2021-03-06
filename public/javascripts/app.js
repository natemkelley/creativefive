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
                return $http.get('/pictures').success(function (data) {
                    angular.copy(data, $scope.pictures);
                })
            }


            $scope.delete = function (picture) {
                console.log(picture);
                $http.delete('/pictures/' + picture._id).success(
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

  }
]);

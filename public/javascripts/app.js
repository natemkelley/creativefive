angular.module('comment', [])
    .controller('MainCtrl', [
  '$scope', '$http',
  function ($scope, $http) {
            $scope.comments = [];
            $scope.addComment = function () {
                var newcomment = {
                    title: $scope.formContent,
                    upvotes: 0
                };
                if ($scope.formContent === '') {
                    return;
                }
                console.log("In addComment with " + $scope.formContent);
                $scope.create({
                    title: $scope.formContent,
                    upvotes: 0,
                });
                $scope.formContent = '';
            };
            // $scope.upvote = function (comment) {
            //     return $http.put('/comments/' + comment._id + '/upvote')
            //         .success(function (data) {
            //             console.log("upvote worked");
            //             comment.upvotes = data.upvotes;
            //         });
            // };

            $scope.incrementUpvotes = function (comment) {
                $scope.upvote(comment);
            };



            $scope.getAll = function () {
              return $http.get('/pictures').success(function(data){
                angular.copy(data, $scope.comments);
              })
            }

            // $scope.delete = function (picture) {
            //     $http.delete('/pictures/' + picture._id)
            //         .success(function (data) {
            //             console.log("delete worked");
            //         });
            //     $scope.getAll();
            // };
            $scope.delete = function(pictures) {
              $http.delete('/pictures' + picture._id).success(
                function (data) {
                  console.log("delete is working")
                });
              $scope.getAll();
            };

            $scope.create = function (comment) {
                return $http.post('/comments', comment).success(function (data) {
                    $scope.comments.push(data);
                });
            };

            $scope.getAll();

  }
]);

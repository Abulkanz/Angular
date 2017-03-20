blog.controller('ajoutCtrl', function ($scope, $http) {
    $scope.titPage = "Nouvel Article";
    $scope.sendArticle = function () {

        var newArticle = {
            titArt: $scope.newArticle.titArt,
            date: new Date().toISOString().replace(/T.*/, '').split('-').join('-'),
            contArt: $scope.newArticle.contArt,
            catArt: $scope.newArticle.catArt
        }
        console.log(newArticle);

        $http.post('/ajoutArt', newArticle).then(function (resp) {
            $scope.newArticle.titArt = "";
            $scope.newArticle.contArt = "";
            $scope.newArticle.catArt = "";
        });
    }

    getCategories();

    function getCategories() {
        $http({
            method: 'get',
            url: '/getCategories'
        }).then(function (resp) {
            $scope.listCat = resp.data;
        });
    }
});



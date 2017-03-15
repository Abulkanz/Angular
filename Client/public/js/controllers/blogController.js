blog.controller('blogCtrl', function ($scope, $http) {
    $scope.hello = "hello wold";

    getArticles();

    function getArticles() {
        $http({
            method: 'get',
            url: 'http://localhost:8090/getArticles'
        }).then(function (resp) {
            $scope.listArticles = resp.data;
        });
    }
    
    getCategories();
    
    function getCategories() {
        $http({
            method: 'get',
            url: 'http://localhost:8090/getCategories'
        }).then(function (resp) {
            $scope.listCat = resp.data;
        });
    }
});


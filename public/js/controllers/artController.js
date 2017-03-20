blog.controller('artCtrl', function ($scope, $http, $routeParams) {

    var param = $routeParams.id;
    console.log(param);
    getArticle();
    
    function getArticle() {
        $http.post('/getArticle', {id: param}).then(function (resp) {
            $scope.art = resp.data[0];
            console.log(resp.data);
        });
        
    }
    
});

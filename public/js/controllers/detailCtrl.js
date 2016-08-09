app.controller('detailCtrl', ['$scope', 'getDataService', '$routeParams', function($scope, gd_s, $routeParams) {

    gd_s.getData($routeParams.id).then(function(res) {
            console.log('获取数据成功');
            // console.log(res);

            $scope.data = res.data;
        })
        .catch(function(res) {
            console.log('获取数据失败');
            // console.log(res);
        })

}])
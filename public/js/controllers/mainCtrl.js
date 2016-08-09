app.controller('mainCtrl', ['$scope', 'getDataService', '$location', function($scope, gd_s, $location) {
    gd_s.getData().then(function(res) {
            console.log('获取数据成功');
            // console.log(res);

            $scope.data = res.data;
        })
        .catch(function(res) {
            console.log('获取数据失败');
            // console.log(res);
        })

    $scope.doDelFun = function(params) {
        if (confirm('确认删除吗？')) {
            gd_s.delData(params).then(function(res) {
                    console.log('删除数据成功');
                    // console.log(res);

                    // console.log($location.path());
                    $location.path('http://localhost:3001/#/');
                })
                .catch(function(res) {
                    console.log('删除数据失败');
                    // console.log(res);
                })
        }
    }
}])
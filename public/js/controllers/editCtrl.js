app.controller('editCtrl',['$scope','getDataService','$routeParams','$location',
function($scope,gd_s,$routeParams,$location){
    // console.log(gd_s);
    if($routeParams.id){
        gd_s.getData($routeParams.id)
        .then(function(res){
            console.log('获取数据成功');
            console.log(res);
            var data = res.data;
            $scope.name = data.name;
            $scope.title = data.title;
            $scope.address = data.address;
            $scope.phone = data.phone;
            $scope.qq = data.qq;
            $scope.email = data.email;
            $scope.description = data.description;
        })  
        .catch(function(res){
            console.log('获取数据失败');
            console.log(res);
        })

        $scope.doPostData = function(){
            var data = {
                name:$scope.name,
                title:$scope.title,
                address:$scope.address,
                phone:$scope.phone,
                qq:$scope.qq,
                email:$scope.email,
                description:$scope.description
            }
            gd_s.putData($routeParams.id,data)
            .then(function(res){
                console.log('上传数据成功');
                console.log(res);
            })
            .catch(function(res){
                console.log('上传数据失败');
                console.log(res);
            })
            $location.path('http://localhost:3001/#/');
        }

    }else{
        $scope.doPostData = function(){
            // console.log('我被点击了！')
            var data = {
                name:$scope.name,
                title:$scope.title,
                address:$scope.address,
                phone:$scope.phone,
                qq:$scope.qq,
                email:$scope.email,
                description:$scope.description
            }
            gd_s.postData(data)
            .then(function(res){
                console.log('上传数据成功');
                console.log(res);
            })
            .catch(function(res){
                console.log('上传数据失败');
                console.log(res);
            })
            $location.path('http://localhost:3001/#/');
        }
    }
}])
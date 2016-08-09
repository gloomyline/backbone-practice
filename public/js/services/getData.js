app.factory('getDataService',['$http','$q',function($http,$q){
    var dal = {};
    
    dal.getData = function(params){
        var params = params || '';
        var defferd = $q.defer();
        $http.get('http://localhost:3001/card/' + params)
        .success(function(res){
            defferd.resolve(res);
        })
        .error(function(err){
            defferd.reject(err);
        });

        return defferd.promise;
    }

    dal.postData = function(obj){
        var defferd = $q.defer();
        $http.post('http://localhost:3001/card',obj)
        .success(function(res){
            defferd.resolve(res);
        })
        .error(function(err){
            defferd.reject(err);
        })

        return defferd.promise;
    }

    dal.putData = function(params,obj){
        var defferd = $q.defer();
        $http.put('http://localhost:3001/card/' + params,obj)
        .success(function(res){
            defferd.resolve(res);
        })
        .error(function(err){
            defferd.reject(err);
        })

        return defferd.promise;
    }

    dal.delData = function(params){
        var defferd = $q.defer();
        $http.delete('http://localhost:3001/card/' + params)
        .success(function(res){
            defferd.resolve(res);
        })
        .error(function(err){
            defferd.reject(err);
        })

        return defferd.promise;
    }

    return dal;
}]);
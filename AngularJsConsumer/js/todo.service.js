function ToDoService($http) {
    
    var link = 'http://localhost:8091/'
    function create(item) {
        return $http.post(link +'todos', item)
            .then(function (response) {
                return response.data;
            })
    }
    function retreive() {
        console.log(11111111)
        return $http.get(link +'todos')
            .then(function (response) {
                return response.data.splice(0, 10)
            })
    }
    function update(item) {
        // return $http.put(API + item.id)
        //     .then(function (response) {
        //         return response.data;
        //     })
    }
    function remove(item) {
        console.log(item)
        return $http.delete(link + 'todos/' + item.index )
            .then(function (response) { 
                return response.data;
            })
    }
    return {
        create: create,
        retreive: retreive,
        update: update,
        remove: remove
    }
}

angular
    .module('app')
    .factory('ToDoService', ToDoService)
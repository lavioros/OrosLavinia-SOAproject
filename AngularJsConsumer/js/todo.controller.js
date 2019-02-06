function TodoController(ToDoService) {
    this.newTodo = '';
    var ctrl = this;
    this.list = []

    function retreveToDo() {
        ToDoService.retreive()
            .then(function (response) {
                ctrl.list = response;
            })
    }
    this.updateTodo = function (item, index) {
        if (item === null) {
            ctrl.removeToDo(item, index)
        }
        ToDoService.update(item);
    }
    this.removeToDo = function (item, index) {
        ToDoService.remove(item).then(function (response) {
            ctrl.list.splice(index, 1)
        })
    }

    this.addToDo = function () {
        if (!ctrl.newTodo) {
            return;
        }
        ToDoService.create({
            userId: 3,
            title: ctrl.newTodo,
            completed: false
        }).then(function (response) {
            ctrl.list.unshift(response)
            ctrl.newTodo = '';
            retreveToDo();
        })
    }

    this.toggleState = function (item, index) {
        ToDoService.update(item).then(function () { },
            function () {
                item.completed = !item.completed;
            })
    }


    this.remainingItems = function () {
        return this.list.filter((item) => {
            return !item.completed
        });
    }
    retreveToDo();
}

angular
    .module('app')
    .controller('TodoController', TodoController)
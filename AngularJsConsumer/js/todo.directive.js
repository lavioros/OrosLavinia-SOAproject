function todoApp() {
    return {
        restrict: 'E',
        controller: 'TodoController as todo',
        template: `<div class="todo">
        <form class="todo__form" ng-submit="todo.addToDo()">
          <input type="text" placeholder="Add new to do!" ng-model="todo.newTodo">
        </form>
        <ul class="todo__list">
          <li ng-repeat="item in todo.list">
            <input type="checkbox" id="todo-{{ $index }}" ng-model="item.completed" ng-change="todo.toggleState(item,$index);">
            <label class="toggle" for="todo-{{ $index }}"></label>
            <p ng-dblclick="showEditField = true" ng-hide="showEditField" todo-autofocus="showEditField">{{item.title}} </p>
            <div ng-show="showEditField">
              <input type="text" ng-model="item.title" ng-blur="todo.updateTodo(item, $index);  showEditField = false"
                todo-autofocus="showEditField">
            </div>
            <a href="" ng-click="todo.removeToDo(item, $index)">&#215</a>
          </li>
          <p class="todo__remaining" ng-show="todo.remainingItems().length > 0">
            <span>
              You have to complete {{todo.remainingItems().length}} form {{todo.list.length}} to do!
            </span>
          </p>
          <p class="todo__remaining" ng-show="todo.remainingItems().length === 0"><span>You are awesome!</span></p>
        </ul>
      </div>`
    }
}
angular
    .module('app')
    .directive('todoApp', todoApp);
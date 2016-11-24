// JScript source code
var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function ($scope) {
    $scope.products = ["Samsung", "Nexus", "Motorola"];
    $scope.add = function () {
        $scope.errortext = "";
        if (!$scope.addNewItem) { return; }
        if ($scope.products.indexOf($scope.addNewItem) == -1) {
            $scope.products.push($scope.addNewItem);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.remove = function (product) {
        $scope.products.splice(product, 1);
    }
});

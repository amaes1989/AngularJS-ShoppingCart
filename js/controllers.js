var shoppingCartApp = angular.module('shoppingCartApp', []);

shoppingCartApp.controller('CartController', ['$scope', function($scope) {
    $scope.bill = {};

    $scope.items = [
        { title: 'Paint pots', quantity: 8, price: 3.95 },
        { title: 'Polka dots', quantity: 17, price: 12.95 },
        { title: 'Pebbles', quantity: 5, price: 6.95 }
    ];
    // $scope.remove = function(index) {
    //     $scope.items.splice(index, 1);
    // }

    $scope.totalCart = function() {
        var total = 0;
        for (var i = 0; i < $scope.items.length; i++) {
            total += $scope.items[i].price * $scope.items[i].quantity;
        }
        return total;
    };

    $scope.subtotal = function() {
        return $scope.totalCart() - $scope.discount;
    };

    function calculateDiscount(newValue, oldValue, scope) {
        $scope.bill.discount = newValue > 100 ? 10 : 0;
    }
    $scope.$watch($scope.totalCart, calculateDiscount);
}]);
import * as angular from 'angular';
import './css/styles.css';
// import countries from './countries';
import countriesList from './components/countriesList';

const app = angular.module('app', []);

app.component('list1', countriesList);
app.component('list2', countriesList);

app.controller('toggleButton', ['$scope', function ($scope) {
    $scope.display = 'none';
    $scope.toogle = function () {
        $scope.display === 'none' ? $scope.display = 'block' : $scope.display = 'none';
    }

}]);

// app.controller('addList', ['$scope', function ($scope) {
//     $scope.countries = countries;
//     $scope.print = function (name) {
//         $scope.countries = $scope.countries.filter((item) => item.name === name);
//     }
// }]);
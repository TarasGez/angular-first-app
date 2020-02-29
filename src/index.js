import * as angular from 'angular';
import './css/styles.css';
import countries from './countries';
import countries2 from './countries2';
import buttonToogle from './components/Button';
import countriesList from './components/CountriesList';

const app = angular.module('app', []);

app.component('buttonToogle', buttonToogle)
.constant('lister', [countries, countries2])
.component('buttonToogle2', buttonToogle)
.component('countriesList', countriesList);
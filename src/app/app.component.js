// Core
import * as angular from 'angular';

// Components
import './css/styles.css';
import countries from './countries';
import countries2 from './countries2';
import countrySelectButtonComponent from './country-select-button/country-select-button.component';
import countriesList from './countries-list/countries-list.component';

const app = angular.module('app', []);

app.component('countrySelectButton', countrySelectButtonComponent)
    .constant('lister', [{
            id: 'countriesList1',
            countries: countries
        },
        {
            id: 'countriesList2',
            countries: countries2
        }
    ])
    .component('countrySelectButton2', countrySelectButtonComponent)
    .component('countriesList', countriesList);
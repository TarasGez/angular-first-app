class CountrySelectButtonController {
    constructor(lister) {
        this.display = 'none';
        this.setList = () => {
            this.countries = (lister.find(item => item.id === this.id)).countries;
        };
        this.toogle = () => {
            this.display === 'none' ? this.display = 'block' : this.display = 'none';
        }
    }
};

const countrySelectButtonComponent = {
    bindings: {
        text: '@',
        id: '@'
    },
    template: require('./country-select-button.component.html'),
    controller: CountrySelectButtonController
};

export default countrySelectButtonComponent
class CountriesListController {
  constructor() {
    this.print = (name) => {
      this.countries = this.countries.filter((item) => item.name === name);
    };
  }
};

const countriesList = {
  bindings: {
    countries: '='
  },
  template: require('./countries-list.component.html'),
  controller: CountriesListController,
  controllerAs: '$ctrl'
};

export default countriesList
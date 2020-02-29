class CountriesCtrl {
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
  template: require('./countriesList.html'),
  controller: CountriesCtrl,
  controllerAs: '$ctrl'
};

export default countriesList
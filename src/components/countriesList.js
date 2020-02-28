import countries from '../countries';

class CountriesCtrl {
  constructor() {
    this.countries = countries;
    this.print = (name) => {
      this.countries = this.countries.filter((item) => item.name === name);
      console.log(name);
    };
  }
}
;

const countriesList = {
  template: require('./countriesList.html'),
  controller: CountriesCtrl
};

export default countriesList
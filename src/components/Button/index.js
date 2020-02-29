class ToggleButton {
    constructor(lister) {
        this.display = 'none';
        this.setList = () => {
            const number = this.id.slice(4); /// id="list0" => 0
            this.countries = lister[number];
        };
        this.toogle = () => {
            this.display === 'none' ? this.display = 'block' : this.display = 'none';
        }
    }
};

const buttonToogle = {
    bindings: {
        text: '@',
        id: '@'
    },
    template: require('./buttonComponent.html'),
    controller: ToggleButton
};

export default buttonToogle
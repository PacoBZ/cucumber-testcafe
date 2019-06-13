const { Selector } = require('testcafe');

// Selectors


class GooglePage {
    constructor() {
        this.url = 'https://google.com/';
        this.searchBox = Selector('.gLFyf');
        this.searchButton = Selector('.gNO89b');
    }
}

module.exports = GooglePage;
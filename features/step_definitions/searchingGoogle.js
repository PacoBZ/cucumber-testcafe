const { Given, When, Then } = require('cucumber');
const Selector = require('testcafe').Selector;
const GooglePage = require ('../support/pages/google.page');
const google = new GooglePage();

Given('Im on google.com', async function () {
    await testController.navigateTo(google.url);
});

When('I write the {string} website name', async function (webname) {
    await testController.typeText(google.searchBox, webname);
});

Then('I click on search button', async function () {
    await testController.pressKey("enter");
});

Then('I should see that the first Google result is {string}', async function (text) {
    var firstLink = Selector('#rso').find('a').with({ boundTestRun: testController });
    await testController.expect(firstLink.innerText).contains(text);
});

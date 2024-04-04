import { Locator, Page } from "@playwright/test";

export class HomePageProf {
    page: Page;
    searchJob: Locator;
    searchCity: Locator;
    searchButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchJob = page.locator("#offerCriteriaSuggesterInputId");
        this.searchCity = page.locator("#regionSuggesterInputId");
        this.searchButton = page.locator("#offer-search-link");
    }

    async loginToPage () {
        await this.page.goto("https://www.profesia.sk/");
    }

    async searchJobinput () {
        await this.searchJob.fill("tester");
    }

    async searchCityinput () {
        await this.searchCity.fill("Bratislava");
    }

    async searchButtonClick () {
        await this.searchButton.click();
    }
}
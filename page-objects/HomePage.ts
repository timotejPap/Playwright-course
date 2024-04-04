import { Locator, Page } from "@playwright/test";

export class HomePage {
    page: Page;
    menu: Locator;
    title: Locator;
    item: Locator;
    backButton: Locator;
    cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menu = page.locator(".bm-burger-button");
        this.title = page.getByText("Products");
        this.item = page.locator("#item_4_title_link");
        this.backButton = page.locator(".inventory_details_back_button");
        this.cartBadge = page.locator(".fa-layers-counter shopping_cart_badge");
    }
    async clickOnMenu() {
        await this.menu.click();
    }

    async clickOnItem() {
        await this.item.click();
    }

    async clickBackButton() {
        await this.backButton.click();
    }
}
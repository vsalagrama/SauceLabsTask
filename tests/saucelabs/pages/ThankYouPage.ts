import { expect, Locator, type Page } from "@playwright/test";
import { testDataObject } from '../tests/testData'
export class ThankYouPage {





    readonly page: Page
    constructor(page: Page) {
        this.page = page;


    }
    async verifyOrderStatus() {
        await expect(this.page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
        await expect(this.page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');

        console.log('Successfully placed the order');
    }

}
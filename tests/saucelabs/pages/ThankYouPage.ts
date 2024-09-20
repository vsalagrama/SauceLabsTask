import { expect, Locator, type Page } from "@playwright/test";
import { testDataObject } from '../tests/testData'
export class ThankYouPage {


    private openMenu: Locator;
    private logoutButton: Locator;


    readonly page: Page
    constructor(page: Page) {
        this.page = page;
        this.openMenu = page.getByRole('button', { name: 'Open Menu' });
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]')

    }
    async verifyOrderStatus() {
        await expect(this.page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
        await expect(this.page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');

        console.log('Successfully placed the order');
    }
    async logout() {
        await this.openMenu.click();
        await this.logoutButton.click();
        console.log('Logged out successfully');
    }



}
import { test, expect } from '@playwright/test';
import { testDataObject } from './testData';

import { LandingPage } from '../pages/LandingPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ThankYouPage } from '../pages/ThankYouPage';

test('2. Login test with locked out user @regression @smoke', async ({ page, isMobile }) => {

    const landingPage = new LandingPage(page);

    //Login as standard user
    await landingPage.loginAsLockedOutUser();
  
});
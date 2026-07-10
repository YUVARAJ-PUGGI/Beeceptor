
import { test, expect } from '@playwright/test';



test('Login and save session', async ({ page }) => {
    
    await page.goto('https://app.beeceptor.com/login');
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();

    await page.pause();

    await page.context().storageState({ path: 'playwright/.auth/user.json' });
});
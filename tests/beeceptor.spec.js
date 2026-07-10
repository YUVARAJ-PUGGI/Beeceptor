import {test,expect} from "@playwright/test";
import 'dotenv/config';


test("Open Beeceptor Homepage",async({page})=>{
    
    await page.goto("https://app.beeceptor.com/login");
    await expect(page).toHaveURL(/app\.beeceptor\.com/);
});
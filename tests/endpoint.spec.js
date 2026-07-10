import {test,expect} from "@playwright/test";
import {EndpointPage} from "../pages/EndpointPage";
import { MockRulesPage } from "../pages/MockRulesPage";

test("Create Beeceptor Endpoint",async({page}) =>{
    await page.goto("https://app.beeceptor.com");
    const endpointName = `yuvi-${Date.now()}`;
    const endpointPage = new EndpointPage(page);
    await endpointPage.createEndpoint(endpointName);
     await expect(page).toHaveURL(
        new RegExp(`/console/${endpointName}$`)
    );
    const mockRulesPage = new MockRulesPage(page);
    await mockRulesPage.openCalloutRule();
});
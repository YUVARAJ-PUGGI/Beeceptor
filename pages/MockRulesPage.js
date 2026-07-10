export class MockRulesPage{
    constructor(page){
        this.page = page;
        this.mockRulesButton = page.locator('a[data-bs-target=".allRules"]');
        this.dropDownButton = page.locator("button.dropdown-toggle-split");
        this.newCallOutRule = page.getByText("New Callout Rule");
    }
    async openCalloutRule(){
        await this.mockRulesButton.click();
        await this.dropDownButton.click();
        await this.newCallOutRule.click();
    }
}
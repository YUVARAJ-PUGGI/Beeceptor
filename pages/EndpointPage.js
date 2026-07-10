export class EndpointPage {
    constructor(page) {
        this.page = page;
        this.endpointTextbox = page.getByRole("textbox");
        this.createMockServerButton = page.getByRole("button",{name:"Create Mock Server"})
    }
    async createEndpoint(endpointName){
         await this.endpointTextbox.fill(endpointName);
         await this.createMockServerButton.click();


    }
}
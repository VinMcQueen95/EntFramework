import {Page, expect} from "@playwright/test";

export default class HomePage {
    private readonly HomePageTextLocator = "My Dashboard";
    
    constructor(private page: Page){

    }

    async expectHomeTitleToBeVisible() {

         await expect(this.page.getByText(this.HomePageTextLocator)).toBeVisible({ timeout : 15000});

    }


}

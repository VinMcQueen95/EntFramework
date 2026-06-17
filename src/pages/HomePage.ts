import {Page, expect} from "@playwright/test";

export default class HomePage {
    private readonly HomePageTitleLocator = "Swag Labs";
    constructor(private page: Page){

    }

    async expectHomeTitleToBeVisible() {

        await expect(this.page.getByText(this.HomePageTitleLocator)).toBeVisible({ timeout : 15000});
    }


}
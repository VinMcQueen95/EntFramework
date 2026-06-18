import {Page, expect} from "@playwright/test";
import logger from "../utils/LoggerUtil";

export default class HomePage {
    private readonly HomePageTitleLocator = "Swag Labs";
    constructor(private page: Page){

    }

    async expectHomeTitleToBeVisible() {

        await expect(this.page.getByText(this.HomePageTitleLocator)).toBeVisible({ timeout : 15000}).catch((error) => {
            logger.error('error clicking login button: ${error');
            throw error;




        }).then(() => logger.info("Clicked login button"));

    }


}
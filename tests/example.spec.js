const {test, expect} = require('@playwright/test');
const MainPage = require('../pages/main-page');
const ArticlePage = require('../pages/article-page');
const LoginPage = require('../pages/login-page');
const PagesSettingFragment = require('../pages/fragments/pages-setting-fragment')


test('Guest click on first article and see it', async ({page}) => {
    await page.goto('/');
    await page.locator('[class=tm-articles-list__item] [class*=tm-title_h2]').first().click()
    await page.locator('[class*=article-formatted-body]').waitFor({state: "visible"})
})

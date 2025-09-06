import { expect, $ } from '@wdio/globals'
import LoginPage from '../screenObjects/login.page.js'

describe('login application', () => {
    it('should login with invalid credentials', async () => {
        await $('~Login Screen').click()
        await $('~username').setValue('wrongusername')
        await $('~password').setValue('test')
        await $('~loginBtn').click()
        await $('//*[@text="OK"]').click()
    })
    it('should login with valid credentials, and Logout', async () => {
        await $('~username').setValue('alice')
        await $('~password').setValue('mypassword')
        await $('~loginBtn').click()
        await $('~Logout').click()
    })
    it('should try to login without user or password', async () => {
        await $('~loginBtn').click()
        await $('//*[@text="OK"]').click()
        await $('~Navigate Up').click()
        await $('~Navigate Up').click()
        await $('~Navigate Up').click()
    })
})

describe('Usability features', () => {
    it('Picker wheels', async () => {
        await $('~Picker Demo').click()
        await $('~monthPicker').click()
        await $('//*[@text="March"]').click()
        await $('~dayPicker').click()
        await $('//*[@text="4"]').click()
        await $('~learnMore').click()
        await $('//*[@text="OK"]').click()
        await browser.pause(2000)
        await $('~Navigate Up').click()
    })
    it('Use webview to open appiumPro', async () => {
        await $('~Webview Demo').click()
        await $('~urlInput').setValue('https://appiumpro.com')
        await $('~navigateBtn').click()
        await $('~Navigate Up').click()
    })
    it('Use webview to open other website', async () => {
        await $('~Webview Demo').click()
        await $('~urlInput').setValue('https://google.com')
        await $('~navigateBtn').click()
        await $('//*[@text="OK"]').click()
    })
})

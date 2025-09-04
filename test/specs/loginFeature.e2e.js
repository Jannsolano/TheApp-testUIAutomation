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
    })
})

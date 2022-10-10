import { url, login_username, login_password } from "../../config"
import Navbar from "../page-objects/components/Navbar"
import LoginPage from "../page-objects/pages/LoginPage"

describe('Login fail', () => {

  before(() => {
    cy.visit(url)
    Navbar.clickSignIn()
  })

  it("try to login with invalid info", () => {
    LoginPage.login("invalid username", "invalid password")
  })

  it("should display error message", () => {
    LoginPage.displayErrorMessage()
  })

  it("should click forgot password", () => {
    LoginPage.clickForgotPassword()
  })

})

describe('Login success', () => {
  before(() => {
    cy.visit(url)
    Navbar.clickSignIn()
  })
  it("try to login with valid info", () => {
    LoginPage.login(login_username, login_password)
  })

})
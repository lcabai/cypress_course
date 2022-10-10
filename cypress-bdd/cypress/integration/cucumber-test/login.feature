Feature: Login to Application

    As an invalid user
    I cannot log into the Application
    As a valid user
    I want to log into Application

    Scenario: Invalid login
        Given I open login page
        When I fill username with "invalid username"
        And I fill password with "invalid password"
        And I want to wait 2000 miliseconds
        And I click on submit login
        Then I should see an error message

    # @focus to only run that test
    Scenario: Valid login
        Given I open login page
        When I fill username with 'username'
        And I fill password with 'password'
        And I click on submit login
        Then I should see homepage

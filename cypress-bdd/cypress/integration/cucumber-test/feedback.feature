Feature: Submit feedback
    As a customer
    I want to be able to submit feedback

    Scenario: Submit feedback form
        Given I navigate to feedback page
        When I fill feedback form
        And I click on submit
        Then I see "sendFeedback.html" in the url

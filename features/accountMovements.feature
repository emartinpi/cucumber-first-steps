@accountMovements
Feature: Account movements
  As a basic user I should be able to check my account movements

  Background: I login as a basic user
    Given I am on the login page
    When I introduce my valid credentials
    Then I should see the welcome page
    When I select Accounts on the menu
    Then I should see the accounts page

  Scenario: Check account movements
    When I select an account
    And the account has movements
    Then I check my account movements are displayed

  Scenario: Check account movements with and empty account
    When I select an account
    And the account has not movements
    Then I should receive a message like "This account has not movements"

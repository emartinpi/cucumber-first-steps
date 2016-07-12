@login
Feature: Welcome

  This feature describes welcome screen. This screen is displayed when a user

  Scenario: Login ok
    Given I am on the Login screen
    When I introduce my valid credentials
    Then I should see the welcome page

  Scenario: LoginDos ok
    Given I am on the LoginDos screen
    When I introduce my valid credentials
    Then I should see the welcome page

  Scenario: Login wrong
    Given I am on the Login screen
    When I introduce wrong credentials
    Then I should receive an error message

  Scenario: Login without user
  Given I am on the Login screen
    When I introduce password but not identifier
    Then I should not be allowed to log in

  Scenario: Login without password
    Given I am on the Login screen
    When I introduce identifier but not password
    Then I should not be allowed to log in

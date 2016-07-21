@login
Feature: Login screen

  This feature describes Login screen.

  Scenario: Successful login
    Given A user on the Login screen
    When  He introduces his valid credentials
    Then He should see the welcome page

  #Scenario: Wrong Login
   # Given A user on the Login screen
    #When He introduces wrong credentials
    #Then He should receive an error message

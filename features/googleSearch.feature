@search
Feature: Searching in Google

  This feature describes when I go to Google Seach page, and searh for an item, I expect so see some reference to that item

Scenario Outline:
	Given that I have gone to the Google page
	When I add <query> as to the search box
	And click the Search Button
	Then <query> should be mentioned in the results

    Examples:
        |  query   |  
        |  "cats"  |
        |  "dogs"  |   

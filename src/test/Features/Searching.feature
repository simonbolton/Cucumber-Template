#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
@search
Feature: Searching

  @search_terms
  Scenario Outline: Searching for items returns results
    Given I am at the "http://automationpractice.com" site
    When I enter "<search term>" in to the search box
    And I press search
    Then I should get "<result>" returned

    Examples: 
      | search term | result                     |
      | blouse      | 1 result has been found.   |
      | dress       | 7 results have been found. |
      | t-shirt     | 1 result has been found.   |
      | blah        | 0 results have been found. |

   @search_terms    
   Scenario: searching for items that return no results should show an error to the user
    Given I am at the "http://automationpractice.com" site
    When I enter "blah" in to the search box
    And I press search
    Then I should see "No results were found for your search "blah"" warning

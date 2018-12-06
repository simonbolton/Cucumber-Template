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
#Sample Feature Definition Template
@ContactUs
Feature: Contact Us message form
 
 Background:  
 		Given I am at the "http://automationpractice.com" site
 		And I click the ContactUs link
 	  Then I should be taken to the Customer Service Contact Us page

  Scenario: Successfully submitting a message to customer services
    Given I have filled in the form with valid data to "Customer service"
    When I press send
    Then I should see the success alert 

   
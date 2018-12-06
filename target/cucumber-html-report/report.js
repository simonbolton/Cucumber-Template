$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUs.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Contact Us message form",
  "description": "",
  "id": "contact-us-message-form",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@ContactUs"
    }
  ]
});
formatter.before({
  "duration": 5038611755,
  "status": "passed"
});
formatter.background({
  "line": 22,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 23,
  "name": "I am at the \"http://automationpractice.com\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click the ContactUs link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be taken to the Customer Service Contact Us page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com",
      "offset": 13
    }
  ],
  "location": "SearchesStepDefs.i_have_at_the_site(String)"
});
formatter.result({
  "duration": 4028681674,
  "status": "passed"
});
formatter.match({
  "location": "LandingPageStepDefs.i_click_the_ContactUs_link()"
});
formatter.result({
  "duration": 803899078,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefs.i_should_be_taken_to_the_Customer_Service_Contact_Us_page()"
});
formatter.result({
  "duration": 33104258,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Successfully submitting a message to customer services",
  "description": "",
  "id": "contact-us-message-form;successfully-submitting-a-message-to-customer-services",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I have filled in the form with valid data to \"Customer service\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I press send",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I should see the success alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer service",
      "offset": 46
    }
  ],
  "location": "ContactUsStepDefs.i_have_filled_in_the_form_with_valid_data_to(String)"
});
formatter.result({
  "duration": 363806004,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefs.i_press_send()"
});
formatter.result({
  "duration": 686600732,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsStepDefs.i_should_see_the_success_alert()"
});
formatter.result({
  "duration": 32249892,
  "status": "passed"
});
formatter.after({
  "duration": 635646267,
  "status": "passed"
});
});
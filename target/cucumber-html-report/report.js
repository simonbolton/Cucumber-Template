$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("basicTests.feature");
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
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 8578535980,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Sign in and sign out",
  "description": "",
  "id": "title-of-your-feature;sign-in-and-sign-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I sign in",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I sign out",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 12073871876,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_sign_in()"
});
formatter.result({
  "duration": 1292457328,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_sign_out()"
});
formatter.result({
  "duration": 948124,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat step_definitions.LoginTest.i_sign_out(LoginTest.java:41)\r\n\tat ✽.Then I sign out(basicTests.feature:27)\r\n",
  "status": "pending"
});
formatter.after({
  "duration": 529930024,
  "status": "passed"
});
});
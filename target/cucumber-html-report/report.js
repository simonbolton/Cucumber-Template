$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Searching.feature");
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
    }
  ],
  "line": 19,
  "name": "Searching",
  "description": "",
  "id": "searching",
  "keyword": "Feature",
  "tags": [
    {
      "line": 18,
      "name": "@search"
    }
  ]
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Searching for items returns results",
  "description": "",
  "id": "searching;searching-for-items-returns-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@search_terms"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter \"\u003csearch term\u003e\" in to the search box",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I press search",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should get \"\u003cresult\u003e\" returned",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "searching;searching-for-items-returns-results;",
  "rows": [
    {
      "cells": [
        "search term",
        "result"
      ],
      "line": 31,
      "id": "searching;searching-for-items-returns-results;;1"
    },
    {
      "cells": [
        "blouse",
        "1 result has been found."
      ],
      "line": 32,
      "id": "searching;searching-for-items-returns-results;;2"
    },
    {
      "cells": [
        "dress",
        "7 results have been found."
      ],
      "line": 33,
      "id": "searching;searching-for-items-returns-results;;3"
    },
    {
      "cells": [
        "t-shirt",
        "1 result has been found."
      ],
      "line": 34,
      "id": "searching;searching-for-items-returns-results;;4"
    },
    {
      "cells": [
        "blah",
        "0 results have been found."
      ],
      "line": 35,
      "id": "searching;searching-for-items-returns-results;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4754457850,
  "status": "passed"
});
formatter.background({
  "line": 21,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 22,
  "name": "I am at the \"http://automationpractice.com\" site",
  "keyword": "Given "
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
  "duration": 3804150143,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Searching for items returns results",
  "description": "",
  "id": "searching;searching-for-items-returns-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@search"
    },
    {
      "line": 24,
      "name": "@search_terms"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter \"blouse\" in to the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I press search",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should get \"1 result has been found.\" returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "blouse",
      "offset": 9
    }
  ],
  "location": "SearchesStepDefs.i_enter_in_to_the_search_box(String)"
});
formatter.result({
  "duration": 130502830,
  "status": "passed"
});
formatter.match({
  "location": "SearchesStepDefs.i_press_search()"
});
formatter.result({
  "duration": 909750971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 result has been found.",
      "offset": 14
    }
  ],
  "location": "SearchesStepDefs.i_should_get_returned(String)"
});
formatter.result({
  "duration": 36007335,
  "status": "passed"
});
formatter.after({
  "duration": 637022429,
  "status": "passed"
});
formatter.before({
  "duration": 3268408836,
  "status": "passed"
});
formatter.background({
  "line": 21,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 22,
  "name": "I am at the \"http://automationpractice.com\" site",
  "keyword": "Given "
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
  "duration": 3688486435,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Searching for items returns results",
  "description": "",
  "id": "searching;searching-for-items-returns-results;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@search"
    },
    {
      "line": 24,
      "name": "@search_terms"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter \"dress\" in to the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I press search",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should get \"7 results have been found.\" returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dress",
      "offset": 9
    }
  ],
  "location": "SearchesStepDefs.i_enter_in_to_the_search_box(String)"
});
formatter.result({
  "duration": 125065438,
  "status": "passed"
});
formatter.match({
  "location": "SearchesStepDefs.i_press_search()"
});
formatter.result({
  "duration": 940004019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7 results have been found.",
      "offset": 14
    }
  ],
  "location": "SearchesStepDefs.i_should_get_returned(String)"
});
formatter.result({
  "duration": 31267286,
  "status": "passed"
});
formatter.after({
  "duration": 639666176,
  "status": "passed"
});
formatter.before({
  "duration": 3264008197,
  "status": "passed"
});
formatter.background({
  "line": 21,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 22,
  "name": "I am at the \"http://automationpractice.com\" site",
  "keyword": "Given "
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
  "duration": 3745285812,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Searching for items returns results",
  "description": "",
  "id": "searching;searching-for-items-returns-results;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@search"
    },
    {
      "line": 24,
      "name": "@search_terms"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter \"t-shirt\" in to the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I press search",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should get \"1 result has been found.\" returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "t-shirt",
      "offset": 9
    }
  ],
  "location": "SearchesStepDefs.i_enter_in_to_the_search_box(String)"
});
formatter.result({
  "duration": 114060133,
  "status": "passed"
});
formatter.match({
  "location": "SearchesStepDefs.i_press_search()"
});
formatter.result({
  "duration": 837521427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 result has been found.",
      "offset": 14
    }
  ],
  "location": "SearchesStepDefs.i_should_get_returned(String)"
});
formatter.result({
  "duration": 28203480,
  "status": "passed"
});
formatter.after({
  "duration": 644275705,
  "status": "passed"
});
formatter.before({
  "duration": 3260430859,
  "status": "passed"
});
formatter.background({
  "line": 21,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 22,
  "name": "I am at the \"http://automationpractice.com\" site",
  "keyword": "Given "
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
  "duration": 3730410497,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Searching for items returns results",
  "description": "",
  "id": "searching;searching-for-items-returns-results;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@search"
    },
    {
      "line": 24,
      "name": "@search_terms"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter \"blah\" in to the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I press search",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should get \"0 results have been found.\" returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "blah",
      "offset": 9
    }
  ],
  "location": "SearchesStepDefs.i_enter_in_to_the_search_box(String)"
});
formatter.result({
  "duration": 130989289,
  "status": "passed"
});
formatter.match({
  "location": "SearchesStepDefs.i_press_search()"
});
formatter.result({
  "duration": 905067918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0 results have been found.",
      "offset": 14
    }
  ],
  "location": "SearchesStepDefs.i_should_get_returned(String)"
});
formatter.result({
  "duration": 29280414,
  "status": "passed"
});
formatter.after({
  "duration": 641379468,
  "status": "passed"
});
formatter.before({
  "duration": 3260901929,
  "status": "passed"
});
formatter.background({
  "line": 21,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 22,
  "name": "I am at the \"http://automationpractice.com\" site",
  "keyword": "Given "
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
  "duration": 3812934896,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "searching for items that return no results should show an error to the user",
  "description": "",
  "id": "searching;searching-for-items-that-return-no-results-should-show-an-error-to-the-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@search_terms"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I enter \"blah\" in to the search box",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I press search",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should see \"No results were found for your search \"blah\"\" warning",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "blah",
      "offset": 9
    }
  ],
  "location": "SearchesStepDefs.i_enter_in_to_the_search_box(String)"
});
formatter.result({
  "duration": 118818422,
  "status": "passed"
});
formatter.match({
  "location": "SearchesStepDefs.i_press_search()"
});
formatter.result({
  "duration": 791970727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No results were found for your search \"blah\"",
      "offset": 14
    }
  ],
  "location": "SearchesStepDefs.i_should_see_warning(String)"
});
formatter.result({
  "duration": 28339700,
  "status": "passed"
});
formatter.after({
  "duration": 646374288,
  "status": "passed"
});
});
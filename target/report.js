$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Sample.feature");
formatter.feature({
  "name": "Validating login function of Facebook application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.step({
  "name": "User is Facebook page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "used should click login Button",
  "keyword": "And "
});
formatter.step({
  "name": "user need to validate homescreen",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "WelcomeJavva",
        "java@welcome"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is Facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_Facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"WelcomeJavva\" and \"java@welcome\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "used should click login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.used_should_click_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user need to validate homescreen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_need_to_validate_homescreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is Facebook page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "used should click login Button",
  "keyword": "And "
});
formatter.step({
  "name": "user need to validate homescreen",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "WelcomeJavva",
        "java@welcome"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is Facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_Facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"WelcomeJavva\" and \"java@welcome\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "used should click login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.used_should_click_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user need to validate homescreen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_need_to_validate_homescreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User is Facebook page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "used should click login Button",
  "keyword": "And "
});
formatter.step({
  "name": "user need to validate homescreen",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "WelcomeJavva",
        "java@welcome"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test with invalid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is Facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_Facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"WelcomeJavva\" and \"java@welcome\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "used should click login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.used_should_click_login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user need to validate homescreen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_need_to_validate_homescreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
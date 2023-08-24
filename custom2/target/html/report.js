$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("web_login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Web Login",
  "description": "",
  "id": "login-functionality;web-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a \"\u003cBrowserType\u003e\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to the Zerosion Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"\u003cUserType\u003e\"\u0027s \"\u003cUserName\u003e\" username and \"\u003cPassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "access to Zerosion is \"\u003cAccess\u003e\" for the \"\u003cUserType\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-functionality;web-login;",
  "rows": [
    {
      "cells": [
        "BrowserType",
        "UserName",
        "Password",
        "Access",
        "UserType"
      ],
      "line": 12,
      "id": "login-functionality;web-login;;1"
    },
    {
      "cells": [
        "firefox",
        "Valid",
        "Valid",
        "granted",
        "Sr Executive"
      ],
      "line": 13,
      "id": "login-functionality;web-login;;2"
    },
    {
      "cells": [
        "chrome",
        "Valid",
        "Valid",
        "granted",
        "GTM Executive"
      ],
      "line": 14,
      "id": "login-functionality;web-login;;3"
    },
    {
      "cells": [
        "chrome",
        "Valid",
        "Valid",
        "granted",
        "Delivery Practitioner"
      ],
      "line": 15,
      "id": "login-functionality;web-login;;4"
    },
    {
      "cells": [
        "chrome",
        "Valid",
        "Valid",
        "granted",
        "Sector Sellers"
      ],
      "line": 16,
      "id": "login-functionality;web-login;;5"
    },
    {
      "cells": [
        "chrome",
        "Valid",
        "Valid",
        "granted",
        "Sr Executive"
      ],
      "line": 17,
      "id": "login-functionality;web-login;;6"
    },
    {
      "cells": [
        "firefox",
        "Valid",
        "Valid",
        "granted",
        "Sector Sellers"
      ],
      "line": 18,
      "id": "login-functionality;web-login;;7"
    },
    {
      "cells": [
        "firefox",
        "Valid",
        "Valid",
        "granted",
        "GTM Executive"
      ],
      "line": 19,
      "id": "login-functionality;web-login;;8"
    },
    {
      "cells": [
        "firefox",
        "Valid",
        "Valid",
        "granted",
        "Delivery Practitioner"
      ],
      "line": 20,
      "id": "login-functionality;web-login;;9"
    },
    {
      "cells": [
        "firefox",
        "Invalid",
        "NotSpecified",
        "not_granted",
        "GTM Executive"
      ],
      "line": 21,
      "id": "login-functionality;web-login;;10"
    },
    {
      "cells": [
        "firefox",
        "Valid",
        "Invalid",
        "not_granted",
        "Delivery Practitioner"
      ],
      "line": 22,
      "id": "login-functionality;web-login;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Web Login",
  "description": "",
  "id": "login-functionality;web-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a \"firefox\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to the Zerosion Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"Sr Executive\"\u0027s \"Valid\" username and \"Valid\" password",
  "matchedColumns": [
    1,
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "access to Zerosion is \"granted\" for the \"Sr Executive\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 14,
  "name": "Web Login",
  "description": "",
  "id": "login-functionality;web-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a \"chrome\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to the Zerosion Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"GTM Executive\"\u0027s \"Valid\" username and \"Valid\" password",
  "matchedColumns": [
    1,
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "access to Zerosion is \"granted\" for the \"GTM Executive\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 15,
  "name": "Web Login",
  "description": "",
  "id": "login-functionality;web-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a \"chrome\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to the Zerosion Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"Delivery Practitioner\"\u0027s \"Valid\" username and \"Valid\" password",
  "matchedColumns": [
    1,
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "access to Zerosion is \"granted\" for the \"Delivery Practitioner\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 16,
  "name": "Web Login",
  "description": "",
  "id": "login-functionality;web-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a \"chrome\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to the Zerosion Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"Sector Sellers\"\u0027s \"Valid\" username and \"Valid\" password",
  "matchedColumns": [
    1,
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "access to Zerosion is \"granted\" for the \"Sector Sellers\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "Web Login",
  "description": "",
  "id": "login-functionality;web-login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a \"chrome\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to the Zerosion Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"Sr Executive\"\u0027s \"Valid\" username and \"Valid\" password",
  "matchedColumns": [
    1,
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "access to Zerosion is \"granted\" for the \"Sr Executive\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "Web Login",
  "description": "",
  "id": "login-functionality;web-login;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a \"firefox\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to the Zerosion Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"Sector Sellers\"\u0027s \"Valid\" username and \"Valid\" password",
  "matchedColumns": [
    1,
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "access to Zerosion is \"granted\" for the \"Sector Sellers\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 19,
  "name": "Web Login",
  "description": "",
  "id": "login-functionality;web-login;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a \"firefox\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to the Zerosion Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"GTM Executive\"\u0027s \"Valid\" username and \"Valid\" password",
  "matchedColumns": [
    1,
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "access to Zerosion is \"granted\" for the \"GTM Executive\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 20,
  "name": "Web Login",
  "description": "",
  "id": "login-functionality;web-login;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a \"firefox\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to the Zerosion Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"Delivery Practitioner\"\u0027s \"Valid\" username and \"Valid\" password",
  "matchedColumns": [
    1,
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "access to Zerosion is \"granted\" for the \"Delivery Practitioner\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 21,
  "name": "Web Login",
  "description": "",
  "id": "login-functionality;web-login;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a \"firefox\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to the Zerosion Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"GTM Executive\"\u0027s \"Invalid\" username and \"NotSpecified\" password",
  "matchedColumns": [
    1,
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "access to Zerosion is \"not_granted\" for the \"GTM Executive\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "Web Login",
  "description": "",
  "id": "login-functionality;web-login;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open a \"firefox\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to the Zerosion Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter a \"Delivery Practitioner\"\u0027s \"Valid\" username and \"Invalid\" password",
  "matchedColumns": [
    1,
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "access to Zerosion is \"not_granted\" for the \"Delivery Practitioner\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
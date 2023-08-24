Feature: Login Functionality

  Scenario Outline: Web Login
    Given I open a "<BrowserType>" browser
    And I go to the Zerosion Home Page
    When I click the Login button
    And I enter a "<UserType>"'s "<UserName>" username and "<Password>" password
    And I click the Submit button
    Then access to Zerosion is "<Access>" for the "<UserType>"

    Examples: 
      | BrowserType | UserName | Password     | Access      | UserType              |
      | firefox     | Valid    | Valid        | granted     | Sr Executive          |
      | chrome      | Valid    | Valid        | granted     | GTM Executive         |
      | chrome      | Valid    | Valid        | granted     | Delivery Practitioner |
      | chrome      | Valid    | Valid        | granted     | Sector Sellers        |
      | chrome      | Valid    | Valid        | granted     | Sr Executive          |
      | firefox     | Valid    | Valid        | granted     | Sector Sellers        |
      | firefox     | Valid    | Valid        | granted     | GTM Executive         |
      | firefox     | Valid    | Valid        | granted     | Delivery Practitioner |
      | firefox     | Invalid  | NotSpecified | not_granted | GTM Executive         |
      | firefox     | Valid    | Invalid      | not_granted | Delivery Practitioner |
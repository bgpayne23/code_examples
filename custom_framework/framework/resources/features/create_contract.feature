# Precondition: The Opportunity ID, Credit Check ID, and Credit Process Number has been generate in ROME
Feature: Create a Contract in ADOPT

  Scenario Outline: Create a <Template> <Solution> Contract for <UserType>
    Given I enter ADOPT as a "<UserType>"
#    And I generate a Solution ID
#    And I save Site Information
#    And I save a "<Template>" Template
#    And I save a "<Solution>" Solution
#    When I generate a Contract
#    And I complete the Signatures
#    Then the Opportunity ID is verified in ADOPT
#    And the Credit Check ID is verified in ADOPT
#    And the Credit Process Number is verified in ADOPT
#    And the Solution ID is verified in ADOPT
#    And all Site Information is verified in ADOPT

    Examples: 
      | UserType      | Template    | Solution            |
      | RetailUser    | MIS         | DesignAndPricing    |
      | AllianceUser  | MIS         | Pricing             |
      | AllianceUser  | AVPN        | LifecycleAndPricing |
      | FederalUser   | AVPN        | Pricing             |
      | AllianceUser  | MISandBVOIP | DesignAndPricing    |
      | FederalUser   | MIS         | LifecycleAndPricing |
      | RetailUser    | MISandBVOIP | LifecycleAndPricing |
      | WholesaleUser | AVPN        | DesignAndPricing    |
      | WholesaleUser | MISandBVOIP | Pricing             |
      | RetailUser    | AVPN        | Pricing             |
      | FederalUser   | MISandBVOIP | DesignAndPricing    |
      | WholesaleUser | MIS         | LifecycleAndPricing |

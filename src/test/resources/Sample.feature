Feature: Validating login function of Facebook application

  @reg
  Scenario Outline: Test with invalid username and invalid password
    Given User is Facebook page
    When User enter "<username>" and "<password>"
    And used should click login Button
    Then user need to validate homescreen

    Examples: 
      | username     | password     |
      | WelcomeJavva | java@welcome |

  @smoke
  Scenario Outline: Test with invalid username and invalid password
    Given User is Facebook page
    When User enter "<username>" and "<password>"
    And used should click login Button
    Then user need to validate homescreen

    Examples: 
      | username     | password     |
      | WelcomeJavva | java@welcome |

  @sanity
  Scenario Outline: Test with invalid username and invalid password
    Given User is Facebook page
    When User enter "<username>" and "<password>"
    And used should click login Button
    Then user need to validate homescreen

    Examples: 
      | username     | password     |
      | WelcomeJavva | java@welcome |

  @E2E
  Scenario Outline: Test with invalid username and invalid password
    Given User is Facebook page
    When User enter "<username>" and "<password>"
    And used should click login Button
    Then user need to validate homescreen

    Examples: 
      | username     | password     |
      | WelcomeJavva | java@welcome |

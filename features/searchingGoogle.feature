Feature: Searching Websites on Google

    I want to find a Website on Google

    Background: Go to google website
        Given Im on google.com

    Scenario Outline: Looking for diferent Websites
        Given I write the <webname> website name
        When I click on search button
        Then I should see that the first Google result is <title>

        Examples:
            | webname     | title           |
            | "Xataka"    | "xataka.com"    |
            | "Vidaextra" | "vidaextra.com" |


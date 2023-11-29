Feature: Verify the signin functionality of Swag Lab website

        As a Swag Lab User
        I want to verify the signin functionality of Swag Lab website for valid and invalid user credentials
        
        Background:
                Given user launches the Swag Labs Application

        Scenario Outline: Verify the sign in functionality of the swag website

        Given user logs into Swag website with "LoggableUser" login "<username>"           
        Then user lands on "Swag Labs" screen
        
        Examples:
            | username               |
            | standard_user          |
            | problem_user           |
            | performance_glitch_user|
            | visual_user            |
            | performance_glitch_user|
            | error_user             |

        Scenario: Verify the sign in functionality of the swag website for Locked out user credentials
                       
        Given user logs into Swag website with "LockedUser" login
        | username               |
        | locked_out_user        |
        Then  user lands on error screen               
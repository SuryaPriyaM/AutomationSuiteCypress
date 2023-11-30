Feature: Creating a new order adding products to the cart with a Standard user login

        As a Swag Lab Standard user
        I want to create a new order with an Standard user login adding multiple products to the cart
        Verify the checkout process Checkout overview quantity Payment Information Price Total and Total price
        and Checkout Complete message on successful order creation

        Background:
                Given user launches the Swag Labs Application

        Scenario: New Order creation and validation using a Standard user login
        #SCENARIO_01
                #NEW_ORDERCREATION:Validate the New order creation with all the segments.
                Given user logs into Swag website with "StandardUser" login
                        | username      |
                        | standard_user |
                When user lands on "Products" screen
                And  user clicks on "Open Menu" button
                And  user verifies the menu item list
                |menu_item_list|
                |All Items|
                |About|
                |Logout|
                |Reset App State|
                Then user clicks on "Close Menu" button
                When user selects "Price (low to high)" in "Name (A to Z)" dropdown field
                And  user searches "Sauce Labs Bike Light" item
                And  user validates the item description
                And  user verifies the unit equivalent price
                And  verify the image of "Sauce Labs Bike Light" item
                Then user clicks on "Add to cart" button
                When user clicks on shopping cart link
                And  user lands on "Your Cart" screen
                And  user captures the Quantity of "Sauce Labs Bike Light" item 
                Then user clicks on "Checkout" button
                When user enters the Personal information details "First Name" and "Last Name" and "Zip/Postal Code"
                |firstname |lastname|postalcode|
                |Priya     |Kumar   |BD37BU    |
                And  clicks on continue button
                And  user lands on "Checkout: Overview" screen 
                And  user verifies the Payment Shipping Information
                And  user validates the Price Total with Tax 
                And  user clicks on "Finish" button
                Then user lands on "Checkout: Complete!" screen
                When user verifies the order successful icon 
                And  user verifies the "Thank you for your order!" message
                Then user clicks on "Back Home" button
                When user clicks on "Open Menu" button
                And  user clicks on logout link
                Then user gets logged out successfully               
        
        Scenario Outline: Add each item to the cart and create an order and validate all functionality
        #SCENARIO_02
                #NEW_ORDERCREATION:Add each item to the cart and create an order and validate end to end test functionality.
                Given user logs into Swag website with "StandardUser" login
                        | username      |
                        | standard_user |
                When user lands on "Products" screen
                And  user selects "Price (high to low)" in "Name (A to Z)" dropdown field
                And  user searches item "<productname>"
                And  user validates the item description
                And  user verifies the unit equivalent price
                And  verify the image of "<productname>" item
                Then user clicks on "Add to cart" button
                When user clicks on shopping cart link
                And  user validates the shopping cart badge
                Then user lands on "Your Cart" screen
                When user captures the Quantity of "<productname>" item 
                And  user clicks on "Checkout" button
                And  user enters the Personal information details "First Name" and "Last Name" and "Zip/Postal Code"
                |firstname |lastname|postalcode|
                |Priya     |Kumar   |BD37BU    |
                And  clicks on continue button
                Then user lands on "Checkout: Overview" screen 
                When user verifies the Payment Shipping Information
                And  user validates the Price Total with Tax 
                And  user clicks on "Finish" button
                And  user lands on "Checkout: Complete!" screen
                And  user verifies the "Thank you for your order!" message
                Then user clicks on "Back Home" button   

                Examples:
                     | productname                       |
                     | Sauce Labs Backpack               |
                     | Sauce Labs Bike Light             |
                     | Sauce Labs Bolt T-Shirt           |
                     | Sauce Labs Fleece Jacket          |
                     | Sauce Labs Onesie                 |
                     | Test.allTheThings() T-Shirt (Red) |

        Scenario: Create an an order by adding all the products to cart and checkout 
        #SCENARIO_03
                #NEW_ORDERCREATION:Create an an order by adding all the products to cart and checkout and finish the order.
                Given user logs into Swag website with "StandardUser" login
                        | username      |
                        | standard_user |
                When user lands on "Products" screen
                And  user selects "Name (Z to A)" in "Name (A to Z)" dropdown field
                And  user adds multiple item
                     | productname                       |
                     | Sauce Labs Backpack               |
                     | Sauce Labs Bike Light             |
                     | Sauce Labs Bolt T-Shirt           |
                     | Sauce Labs Fleece Jacket          |
                     | Sauce Labs Onesie                 |
                     | Test.allTheThings() T-Shirt (Red) |
                And  user clicks on shopping cart link
                Then user lands on "Your Cart" screen
                When user clicks on "Checkout" button
                And  user enters the Personal information details "First Name" and "Last Name" and "Zip/Postal Code"
                |firstname |lastname|postalcode|
                |Priya     |Kumar   |BD37BU    |
                And  clicks on continue button
                Then user lands on "Checkout: Overview" screen 
                When user verifies the Payment Shipping Information
                And  user validates the Price Total with Tax 
                And  user clicks on "Finish" button
                And  user lands on "Checkout: Complete!" screen
                And  user verifies the "Thank you for your order!" message
                Then user clicks on "Back Home" button     

                Scenario: Editing the order by removing some of the item from cart 
                #SCENARIO_04
                #NEW_ORDERCREATION:Editing the order by removing some of the item from cart and editing personal information.
                Given user logs into Swag website with "StandardUser" login
                        | username      |
                        | standard_user |
                When user lands on "Products" screen
                And  user selects "Price (low to high)" in "Name (A to Z)" dropdown field
                And  user selects "Name (A to Z)" in "Name (A to Z)" dropdown field
                And  user searches "Sauce Labs Bike Light" item
                And  user validates the item description
                And  user verifies the unit equivalent price
                And  verify the image of "Sauce Labs Bike Light" item
                Then user clicks on "Add to cart" button
                When user clicks on "Back to products" button
                And  user clicks on shopping cart link
                And  user clicks on "Checkout" button
                And  user clicks on "Cancel" button
                And  user clicks on "Remove" button
                Then user clicks on "Continue Shopping" button
                When user searches "Sauce Labs Onesie" item
                And  user clicks on "Add to cart" button
                And  user clicks on shopping cart link
                Then user lands on "Your Cart" screen
                When user captures the Quantity of "Sauce Labs Onesie" item 
                And  user clicks on "Checkout" button                
                And  user enters the Personal information details "First Name" and "Last Name" and "Zip/Postal Code"
                |firstname |lastname|postalcode|
                |Priya     |Kumar   |BD37BU    |
                And  clicks on continue button
                Then user clicks on "Cancel" button
                When user clicks on shopping cart link
                Then user clicks on "Checkout" button
                And  user enters the Personal information details "First Name" and "Last Name" and "Zip/Postal Code" 
                |firstname |lastname|postalcode|
                |Surya     |Priya   |BD57BU    |
                And  clicks on continue button
                Then user lands on "Checkout: Overview" screen 
                When user verifies the Payment Shipping Information
                And  user validates the Price Total with Tax 
                And  user clicks on "Finish" button
                And  user lands on "Checkout: Complete!" screen
                And  user verifies the "Thank you for your order!" message
                Then user clicks on "Back Home" button              
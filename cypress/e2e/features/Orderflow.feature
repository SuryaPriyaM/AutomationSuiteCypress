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
                And  user verifies the "Thank you for your order!" message
                Then user clicks on "Back Home" button              
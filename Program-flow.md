Display welcome screen
(Wait for user authn via RFID)
    Get user's account balance
    Prompt user for selection
    (User makes a selection)
        Get item price
        Display item price and account balance
        (User has enough money)
            Display "Buy" and "Cancel" buttons
            (User selects Buy)
                Tell server about purchase
                Vend item
                Display thankyou screen briefly
                go to start
                
            (User selects Cancel)
                go to start
                
        (User does not have enough money)
            Display "Cancel" button only
            (User selects Cancel)
                go to start
                
    (User waits too long)
        go to start
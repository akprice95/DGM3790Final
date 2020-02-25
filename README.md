DGM3790_Aaron_Price_Fortnite_CRUD_Server

# Welcome to the beta fortnite API where you can enter in your fotnite stats and make it available on the non-official Fortnite server!

## GET Requests

### To GET A LIST OF CURRENT PLAYERS AND STATS please do a GET rquest to the following endpoint on Postman: https://glacial-mesa-06401.herokuapp.com/admin/getAllStats

### To SEARCH OUT A SPECIFIC PLAYER AND THEIR STATS please hit the following endpoint on Postman: https://glacial-mesa-06401.herokuapp.com/admin/Stats. Please note: In the body of the GET request make sure the setting x-www-urlencoded is selected, and enter the playerId ad the "Key" and the \_ID as the "Value" to pull up the specific player you are looking for. The ID can be found when listing getAllStats and IDs can be saved to use for later

## PUT Requests

### TO EDIT YOUR'S, OR ANOTHER'S STATS please do a PUT request to the following endpoint: https://glacial-mesa-06401.herokuapp.com/admin/edit-Stats. In the body of the PUT request make sure the option x-www-urlencoded is selected. Please make sure you have the "playerId"(key) value entered, and please enter in the new key values of: platform, gamerTag, matchesPlayed, and KD.

## POST Requests

### TO ADD YOUR PLAYER AND STATS please sent a POST request to the following endpoint: https://glacial-mesa-06401.herokuapp.com/admin/add-gamer. Please make sure the option x-www-urlencoded is selected, and enter in the key values of: platform, gamerTag, matchesPlayed, and KD. Once added a "playerId" will be assigned to the new gamer

### TO DELETE A PLAYER AND THEIR STATS please send a DELETE request to the following endpoint: https://glacial-mesa-06401.herokuapp.com/admin/delete-product. Please enter the productId value of the specific user you would like to remove.

## Thanks for visiting our little API

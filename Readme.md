# Usage
# To use this collection:

# Import the collection into Postman:

- Open Postman, click on "Import" and then select "Raw text".
Copy and paste the above JSON content into the text area and click "Import".
Testing the API:

- Register User: Make a POST request to /api/users/register with the JSON body for user registration. You'll see a response indicating successful registration.
- Get User by ID: Make a GET request to /api/users/{id} (replace {id} with the actual user ID).
- Create Transaction: Make a POST request to /api/transactions with the JSON body for creating a transaction. You can specify the userId, cryptoCurrency, amount, and type.
- Get Transactions by User ID: Make a GET request to /api/transactions/{userId} (replace {userId} with the actual user ID) to list all transactions for the user.

# Ensure the server is running on http://localhost:5000 before testing the API.
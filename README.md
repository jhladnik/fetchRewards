# Fetch Rewards Sign Up

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### This webpage is a user creation form that has the following fields:
- Full Name
- Email
- Password
- Occupation (dropdown entries direct from https://frontend-take-home.fetchrewards.com/form which returns data in a JSON body format)
- State (dropdown entries direct from https://frontend-take-home.fetchrewards.com/form which returns data in a JSON body format)

#### After filling out the fields and clicking "Submit":
- The information is submitted to endpoint https://frontend-take-home.fetchrewards.com/form with a JSON body format of:
⋅{ "name": "???", "email": "???", "password": "???", "occupation": "???", "state": "???"}
- The endpoint will return a 201 status code and an alert will pop up stating that the form was submitted
- The console will also show the information being submitted, console logs should be deleted before deployment and are marked as such
- The form will not allow submission without all fields being filled in
- The form should clear the fields after submission

### Note:
- The "Login" button is not functional and only presented for asthetics.  The code is written for future implementation but authentication methods will need to still be added

## Additional dependencies added:
- react-router-dom
- axios (used for wide browser support, automatic JSON transformation, and potential security benefits since we are dealing with personal info)

## This project also uses:
- Bootstrap loaded through cdn link

## Scripts

In the project directory, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


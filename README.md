
# Good Grounds!
A website for all of the Coffeeholics of the world! If you love coffee, this is a place where you can show off your skills in creating an exquisite cup of coffee. Or if you just have a favorite way to prepare your coffee in the morning, you can share your methods about that too! The website will allow users to post about different coffees they like to make and how they make it. (Kind of like a recipe book, but strictly for coffee.) I came up with the idea because I love making different coffees at home, and thought it would be nice if there was an app for people like me to share the creative ideas we've come up with over the years.


## Relevant Links:
[API Deployed] (https://secret-mesa-20835.herokuapp.com/)  </br>
[API Repo] (https://github.com/faithfitts/Good-Grounds) </br>
[Client Deployed] (https://faithfitts.github.io/Good-grounds-client/)


## WireFrames:
![Wireframes](https://i.imgur.com/wlqvJpe.png "Wireframes")

## User Stories:

1. As a user, I want to be able to add details about how I made my recipe (ingredients used, brewing method, if a recipe is best served hot or cold (description), etc.)
2. As a user, I want to be able to see recipes that I've created as well as recipes that other users have created.
3. As a user, I want to be able to edit and/or delete past recipes if I no longer what them featured
4. As a user, I do not want other users to be able to edit/delete my recipes
5. As a user, I want to be able to see a search for specific recipes


## Technology Used:

- HTML </br>
- CSS & Bootstrap  </br>
- JavaScript  </br>
- jQuery </br>
- AJAX

## Development Process

### Planning:
I began the client side by creating a wireframe to get a general idea of the user interface. I knew that I would have to use hide/unhide functions to make certain features visible at certain times. I made a detailed list of what aspects should show when each button was clicked. Moreover, I made a sketch to get an idea of where forms and text areas should appear.

### Implementation:
I started with the authentication process and created all of the necessary buttons, event listeners, and api calls. As for the UI, at this point I only had the MVP. Once that was completed, I created forms for my CRUD actions in my HTML. I made event listeners and API calls for each action as well. Again, my UI only consisted of Success and Failure responses at this point. After I was able to verify that all of the functionality was properly working, I begin implementing hide/unhide functionality. I did this by creating separate buttons for each CRUD action and then created a function to either hide/unhide each feature. Lastly, I revisited my HTML and used the textarea tag so I had better control over the sizing of the input boxes.

### Styling:
I knew that I wanted to have a dark background, so I chose an image of coffee beans to go with my theme. I made the font light colors (white and yellow) for better visability; however, in future iterations, I plan to make the background image darker so the text can be easily read.

### Image Source:
Mike Kenneally on unsplash.com
https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mike-kenneally-TD4DBagg2wE-unsplash.jpg


## Problem Solving Stratgies:
The biggest challenge I faced was getting the buttons and forms to be visible at the appropriate time. I was able to solve this by first writing the psuedo-code for each button and what features should appear when that button is clicked. By doing this I was able to methodically go down the list of each feature and decide if it was the appropriate time for it to appear.

## What Else Could Be Added For Future Iterations:
Make the code more DRY with less hide/unhide functions

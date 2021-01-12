![Wireframes](https://i.imgur.com/wlqvJpe.png "Wireframes")

USER STORIES:

1. As a user, I want to be able to add details about how I made my recipe (ingredients used, brewing method, if a recipe is best served hot or cold (description), etc.)
2. As a user, I want to be able to see recipes that I've created as well as recipes that other users have created.
3. As a user, I want to be able to edit and/or delete past recipes if I no longer what them featured
4. As a user, I do not want other users to be able to edit/delete my recipes
5. As a user, I want to be able to see a search for specific recipes


TECHNOLOGY USED:

HTML
CSS (bootstrap)
JavaScript
jQuery
AJAX

DEVELOPMENT PROCESS:

PLANNING: I began the client side by creating a wireframe to get a general idea of the user interface. I knew that I would have to use hide/unhide functions to make certain features visible at certain times. I made a detailed list of what aspects should show when each button was clicked. Moreover, I made a sketch to get an idea of where forms and text areas should appear.

IMPLEMENTATION: I started with the authentication process and created all of the necessary buttons, event listeners, and api calls. As for the UI, at this point I only had the MVP. Once that was completed, I created forms for my CRUD actions in my HTML. I made event listeners and API calls for each action as well. Again, my UI only consisted of Success and Failure responses at this point. After I was able to verify that all of the functionality was properly working, I begin implementing hide/unhide functionality. I did this by creating separate buttons for each CRUD action and then created a function to either hide/unhide each feature. Lastly, I revisited my HTML and used the textarea tag so I had better control over the sizing of the input boxes.

STYLING: I knew that I wanted to have a dark background, so I chose an image of coffee beans to go with my theme. I made the font light colors (white and yellow) for better visability; however, in future iterations, I plan to make the background image darker so the text can be easily read.

IMAGE SOURCE: Mike Kenneally on unsplash.com  
url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mike-kenneally-TD4DBagg2wE-unsplash.jpg')

PROBLEM SOLVING STRATEGIES: The biggest challenge I faced was getting the buttons and forms to be visible at the appropriate time. I was able to solve this by first writing the psuedo-code for each button and what features should appear when that button is clicked. By doing this I was able to methodically go down the list of each feature and decide if it was the appropriate time for it to appear.

WHAT ELSE COULD BE ADDED TO FUTURE ITERATIONS:
Make the code more DRY with less hide/unhide functions

https://github.com/class-b-coding-academy-by-orange/DOM
 
## Advanced Part (No help and for your benifit)
## Exercise #9 (11): Labyrinth game

Make a game where the user (player) needs to find her way out from a labyrinth. The user controls a character (your choosing of hero) with the keyboard arrows. Follow the steps below. Use the starter files [exercise9.html](exercise9.html), [labyrinth.class.js](labyrinth.class.js), and [game.js](game.js).

### Step 1

  - The map of the labyrinth is given as a 2-dimensional array (1 represent walls 0 represent empty space). Implement a printConsole() method inside the [Labyrinth class](labyrinth.class.js) that prints the map on the browser console. Use `*` for walls and spaces for empty space.
   - Add the printConsole() method to the Labyrinth class.
   - Write JS code in [game.js](game.js) that creates a Labyrinth object and call the printConsole() when the page loads.

![Exercise9/1](images/exercise9_1.png)

### Step 2

  - Implement a printDisplay(id) method that draws the labyrinth on the screen, inside the element with the provided id.
  - Call this method from `game.js` on the `map` div (instead of calling printConsole()).
  - Set the size of the parent (`map`) div according to the size of the labyrinth and apply a solid border around it.
  - Represent cells as rectangles (divs) with grey background for walls and white background for spaces. The `CELL_SIZE` global variable specifies the size (width and height) of rectangles.
  - You can use absolute positioning within the parent (`map`) div (but don't forget to set the positioning of the parent to non-static).

![Exercise9/2](images/exercise9_2.png)

### Step 3

  - Extend the class with constants that specify the start and end (destination) coordinates of the character. Initially, the character stands at the start position.
  - Display the character on the map. You can use a div with a different background color or an image. Also, indicate the destination cell with a different background color or image.
  - Allow the user to move the character up, down, left, and right using the respective keys. For each move, check if the character would (i) move out of the map or (ii) move on a wall, and perform the actual move if there is an empty space to move to.
  - Display an alert window with "Congratulations!" if the character reaches the end (destination) cell.

![Exercise9/3](images/exercise9_3.png)

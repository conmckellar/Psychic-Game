# Psychic-Game

Use this game to test your psychic abilities!

The game's functions are as follows...

Generate a random letter from a to z
Record the turn number the player is on. Start it on 10
Provide the player with a way to guess what the letter is.
Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
Next, check whether it is the correct letter.

If it is correct:
  Increment the win counter by 1
  Generate another random letter.
If it is wrong and the player has turns left:
  Allow them to enter another guess.
  Increment the turn number by -1.
If it is wrong and the player has no turns left:
  Increment the loss counter by 1.
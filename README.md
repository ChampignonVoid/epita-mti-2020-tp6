1. write a new saga called `gameSaga`, this saga must react to `GAME_START_REQUESTED` events and change the game state accordingly.

2. add a new reducer called `targets`, and change `GameLayout`, to render `<Target>` elements for each item in this state (hint: use a default state)

3. Add a button to stop the game. When the game is stopped, it must be reset.

4. implement these rules in using sagas:

- when a target is clicked, it is destroyed,
- when a target is destroyed, the score is incremented by 1,
- when a target dies by itself, the lives are decremented by 1.

5. update your gameSaga:

- every seconds, one target is spawned
- after 5 killed targets, two are spawned every second
- after 15 killed targets, three are spawned

each time a target is spawned, its coordinates are randomly chosen (but bound to the size of the game layout)

5. Make this game fun.
   (all bonii must be listed when you deliver your game to your bored teacher)

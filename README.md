# Pokemon Starter Sub
Just a little practice project. Outputs a list of possible alternatives for the starter trio typing (Fire/Grass/Water).

## Details
app.js - code written by me <br/>
scott.js - code written by Scott Sauyet <a>https://stackoverflow.com/questions/69978723/created-a-script-to-output-possible-pokemon-starter-elements-alternatives-fire</a> <br/>
test.js - just some playground script to test out some functions <br/>
types.json - json object for type strenghts, weaknesses and immunities courtesy of filipkess <a>https://github.com/filipekiss/pokemon-type-chart/blob/master/types.json</a> <br/>
<br/>
Time complexity is O(n^3), and I believe that is the fastest possible time for this particular case. We could make it O(1) by writing the resultant output into a file, but the initial readout will always be O(n^3). We might be wrong (I hope I am), so let me know if a better performance is achievable!

### Expected Output
The scripts should return a plain array of all alternatives starter typings.

## How to Run
`node app` <br/>
`node scott` <br/>
You know the drill!

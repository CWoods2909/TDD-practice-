const FriendlyDragon = require('./classes/friendly-dragon.js');
const EvilDragon = require('./classes/evil-dragon.js');
const { getDragons } = require('./classes/dragon.js');

const falkor = new FriendlyDragon("Falkor", 'white', [ "save Atreyu from the swamp", "save Atreyu from the Nothing","scare the local bullies into a dumpster"], "Bastian");
const smaug = new EvilDragon("Smaug","black", ["take over your mountain kingdom", "steal all your dwarven gold","burn down your floating village"], "Dwarf King");

const allDragons = getDragons(falkor, smaug)
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = {
    falkor,
    smaug,
    allDragons
  };
} catch {
  module.exports = null;
}
const { supportsEsModules } = require('mocha/lib/utils.js');
const Dragon = require('./dragon.js');

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner() {
        this.evilDoings.map((evil) => {
            console.log(`${this.name} will ${evil}`)
        })
    }

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }
}

module.exports = EvilDragon;

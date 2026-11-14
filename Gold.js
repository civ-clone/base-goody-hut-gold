"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gold = void 0;
const PlayerTreasuryRegistry_1 = require("@civ-clone/core-treasury/PlayerTreasuryRegistry");
const Action_1 = require("@civ-clone/core-goody-hut/Action");
const Gold_1 = require("@civ-clone/base-city-yield-gold/Gold");
/**
 * The hut gives the unit's player `amount` gold, 50 unless a ruleset says otherwise.
 *
 * Tagged `GoldGoodyHut`: three packages declare a class called `Gold`, and a
 * save records a class by name. See `base-city-yield-gold`.
 */
class Gold extends Action_1.default {
    constructor(goodyHut, unit, playerTreasuryRegistry = PlayerTreasuryRegistry_1.instance, amount = 50) {
        super(goodyHut, unit);
        this._amount = amount;
        this._playerTreasuryRegistry = playerTreasuryRegistry;
    }
    amount() {
        return this._amount;
    }
    perform() {
        const playerTreasury = this._playerTreasuryRegistry.getByPlayerAndType(this.unit().player(), Gold_1.default);
        playerTreasury.add(new Gold_1.default(this._amount));
    }
}
exports.Gold = Gold;
Gold.type = 'GoldGoodyHut';
Gold.transient = ['_playerTreasuryRegistry'];
exports.default = Gold;
//# sourceMappingURL=Gold.js.map
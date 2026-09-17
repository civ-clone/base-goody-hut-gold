"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gold = void 0;
const PlayerTreasuryRegistry_1 = require("@civ-clone/core-treasury/PlayerTreasuryRegistry");
const Action_1 = require("@civ-clone/core-goody-hut/Action");
const Gold_1 = require("@civ-clone/base-city-yield-gold/Gold");
/**
 * Tagged `GoldGoodyHut`: three packages declare a class called `Gold`, and a
 * save records a class by name. See `base-city-yield-gold`.
 */
class Gold extends Action_1.default {
    constructor(goodyHut, unit, playerTreasuryRegistry = PlayerTreasuryRegistry_1.instance) {
        super(goodyHut, unit);
        this._playerTreasuryRegistry = playerTreasuryRegistry;
    }
    perform() {
        const playerTreasury = this._playerTreasuryRegistry.getByPlayerAndType(this.unit().player(), Gold_1.default);
        playerTreasury.add(new Gold_1.default(50));
    }
}
exports.Gold = Gold;
Gold.type = 'GoldGoodyHut';
Gold.transient = ['_playerTreasuryRegistry'];
exports.default = Gold;
//# sourceMappingURL=Gold.js.map
"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _playerTreasuryRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gold = void 0;
const PlayerTreasuryRegistry_1 = require("@civ-clone/core-treasury/PlayerTreasuryRegistry");
const Action_1 = require("@civ-clone/core-goody-hut/Action");
const Gold_1 = require("@civ-clone/base-city-yield-gold/Gold");
class Gold extends Action_1.default {
    constructor(goodyHut, unit, playerTreasuryRegistry = PlayerTreasuryRegistry_1.instance) {
        super(goodyHut, unit);
        _playerTreasuryRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _playerTreasuryRegistry, playerTreasuryRegistry);
    }
    perform() {
        const playerTreasury = __classPrivateFieldGet(this, _playerTreasuryRegistry).getByPlayer(this.unit().player());
        playerTreasury.add(new Gold_1.Gold(50));
    }
}
exports.Gold = Gold;
_playerTreasuryRegistry = new WeakMap();
exports.default = Gold;
//# sourceMappingURL=Gold.js.map
"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Gold_playerTreasuryRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gold = void 0;
const PlayerTreasuryRegistry_1 = require("@civ-clone/core-treasury/PlayerTreasuryRegistry");
const Action_1 = require("@civ-clone/core-goody-hut/Action");
const Gold_1 = require("@civ-clone/base-city-yield-gold/Gold");
class Gold extends Action_1.default {
    constructor(goodyHut, unit, playerTreasuryRegistry = PlayerTreasuryRegistry_1.instance) {
        super(goodyHut, unit);
        _Gold_playerTreasuryRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _Gold_playerTreasuryRegistry, playerTreasuryRegistry, "f");
    }
    perform() {
        const playerTreasury = __classPrivateFieldGet(this, _Gold_playerTreasuryRegistry, "f").getByPlayerAndType(this.unit().player(), Gold_1.default);
        playerTreasury.add(new Gold_1.default(50));
    }
}
exports.Gold = Gold;
_Gold_playerTreasuryRegistry = new WeakMap();
exports.default = Gold;
//# sourceMappingURL=Gold.js.map
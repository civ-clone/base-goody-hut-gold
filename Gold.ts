import {
  PlayerTreasuryRegistry,
  instance as playerTreasuryRegistryInstance,
} from '@civ-clone/core-treasury/PlayerTreasuryRegistry';
import Action from '@civ-clone/core-goody-hut/Action';
import GoldYield from '@civ-clone/base-city-yield-gold/Gold';
import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import Unit from '@civ-clone/core-unit/Unit';

/**
 * The hut gives the unit's player `amount` gold, 50 unless a ruleset says otherwise.
 *
 * Tagged `GoldGoodyHut`: three packages declare a class called `Gold`, and a
 * save records a class by name. See `base-city-yield-gold`.
 */
export class Gold extends Action {
  static readonly type: string = 'GoldGoodyHut';

  static readonly transient = ['_playerTreasuryRegistry'];
  private _amount: number;
  private _playerTreasuryRegistry: PlayerTreasuryRegistry;

  constructor(
    goodyHut: GoodyHut,
    unit: Unit,
    playerTreasuryRegistry: PlayerTreasuryRegistry = playerTreasuryRegistryInstance,
    amount: number = 50
  ) {
    super(goodyHut, unit);

    this._amount = amount;
    this._playerTreasuryRegistry = playerTreasuryRegistry;
  }

  amount(): number {
    return this._amount;
  }

  perform(): void {
    const playerTreasury = this._playerTreasuryRegistry.getByPlayerAndType(
      this.unit().player(),
      GoldYield
    );

    playerTreasury.add(new GoldYield(this._amount));
  }
}

export default Gold;

import {
  PlayerTreasuryRegistry,
  instance as playerTreasuryRegistryInstance,
} from '@civ-clone/core-treasury/PlayerTreasuryRegistry';
import Action from '@civ-clone/core-goody-hut/Action';
import GoldYield from '@civ-clone/base-city-yield-gold/Gold';
import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import Unit from '@civ-clone/core-unit/Unit';

export class Gold extends Action {
  static readonly transient = ['_playerTreasuryRegistry'];
  private _playerTreasuryRegistry: PlayerTreasuryRegistry;

  constructor(
    goodyHut: GoodyHut,
    unit: Unit,
    playerTreasuryRegistry: PlayerTreasuryRegistry = playerTreasuryRegistryInstance
  ) {
    super(goodyHut, unit);

    this._playerTreasuryRegistry = playerTreasuryRegistry;
  }

  perform(): void {
    const playerTreasury = this._playerTreasuryRegistry.getByPlayerAndType(
      this.unit().player(),
      GoldYield
    );

    playerTreasury.add(new GoldYield(50));
  }
}

export default Gold;

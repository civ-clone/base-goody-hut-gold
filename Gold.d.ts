import { PlayerTreasuryRegistry } from '@civ-clone/core-treasury/PlayerTreasuryRegistry';
import Action from '@civ-clone/core-goody-hut/Action';
import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import Unit from '@civ-clone/core-unit/Unit';
/**
 * Tagged `GoldGoodyHut`: three packages declare a class called `Gold`, and a
 * save records a class by name. See `base-city-yield-gold`.
 */
export declare class Gold extends Action {
  static readonly type: string;
  static readonly transient: string[];
  private _playerTreasuryRegistry;
  constructor(
    goodyHut: GoodyHut,
    unit: Unit,
    playerTreasuryRegistry?: PlayerTreasuryRegistry
  );
  perform(): void;
}
export default Gold;

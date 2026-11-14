import { PlayerTreasuryRegistry } from '@civ-clone/core-treasury/PlayerTreasuryRegistry';
import Action from '@civ-clone/core-goody-hut/Action';
import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import Unit from '@civ-clone/core-unit/Unit';
/**
 * The hut gives the unit's player `amount` gold, 50 unless a ruleset says otherwise.
 *
 * Tagged `GoldGoodyHut`: three packages declare a class called `Gold`, and a
 * save records a class by name. See `base-city-yield-gold`.
 */
export declare class Gold extends Action {
  static readonly type: string;
  static readonly transient: string[];
  private _amount;
  private _playerTreasuryRegistry;
  constructor(
    goodyHut: GoodyHut,
    unit: Unit,
    playerTreasuryRegistry?: PlayerTreasuryRegistry,
    amount?: number
  );
  amount(): number;
  perform(): void;
}
export default Gold;

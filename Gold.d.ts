import { PlayerTreasuryRegistry } from '@civ-clone/core-treasury/PlayerTreasuryRegistry';
import Action from '@civ-clone/core-goody-hut/Action';
import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import Unit from '@civ-clone/core-unit/Unit';
export declare class Gold extends Action {
  #private;
  constructor(
    goodyHut: GoodyHut,
    unit: Unit,
    playerTreasuryRegistry?: PlayerTreasuryRegistry
  );
  perform(): void;
}
export default Gold;

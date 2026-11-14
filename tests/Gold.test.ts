import Action from '@civ-clone/core-goody-hut/Action';
import Gold from '../Gold';
import GoldYield from '@civ-clone/base-city-yield-gold/Gold';
import GoodyHut from '@civ-clone/core-goody-hut/GoodyHut';
import Player from '@civ-clone/core-player/Player';
import PlayerTreasury from '@civ-clone/core-treasury/PlayerTreasury';
import PlayerTreasuryRegistry from '@civ-clone/core-treasury/PlayerTreasuryRegistry';
import PlayerUnit from '@civ-clone/core-unit/Unit';
import { expect } from 'chai';

const setUp = () => {
  const player = new Player(),
    playerTreasuryRegistry = new PlayerTreasuryRegistry(),
    treasury = new PlayerTreasury(player, GoldYield),
    // Stand-ins: the action only asks the unit for its player.
    goodyHut = {} as unknown as GoodyHut,
    unit = { player: () => player } as unknown as PlayerUnit;

  playerTreasuryRegistry.register(treasury);

  return { goodyHut, playerTreasuryRegistry, treasury, unit };
};

describe('Gold', (): void => {
  it('is a goody-hut action, saved as GoldGoodyHut', (): void => {
    const { goodyHut, playerTreasuryRegistry, unit } = setUp();

    expect(new Gold(goodyHut, unit, playerTreasuryRegistry)).instanceOf(Action);
    expect(Gold.name).equal('Gold');
    expect(Gold.type).equal('GoldGoodyHut');
  });

  it("gives the unit's player 50 gold by default", (): void => {
    const { goodyHut, playerTreasuryRegistry, treasury, unit } = setUp(),
      action = new Gold(goodyHut, unit, playerTreasuryRegistry);

    expect(action.amount()).equal(50);

    action.perform();

    expect(treasury.value()).equal(50);
  });

  it('gives the amount a ruleset passes', (): void => {
    const { goodyHut, playerTreasuryRegistry, treasury, unit } = setUp(),
      action = new Gold(goodyHut, unit, playerTreasuryRegistry, 200);

    expect(action.amount()).equal(200);

    action.perform();
    action.perform();

    expect(treasury.value()).equal(400);
  });
});

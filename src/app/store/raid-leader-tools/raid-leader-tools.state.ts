import { Player } from '@app/shared/models/planner.models';

export interface RaidLeaderToolsState {
  isLoading: boolean;
  planner: {
    players: Player[];
    backup: Player[];
  };
}

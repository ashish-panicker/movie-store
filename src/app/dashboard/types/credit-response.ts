import { Cast } from '../../shared/types/cast';
import { Crew } from '../../shared/types/crew';

export interface CreditResponse {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

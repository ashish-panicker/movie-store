import { Crew } from "../../shared/types/crew";

export interface GroupedCrew {
    [key: string]: Crew[];
}
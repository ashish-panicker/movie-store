import { TrendingMoviesResponse } from "../trending"

export interface DashboardState {
  isLoading: boolean
  data: TrendingMoviesResponse | null
  error: any
}

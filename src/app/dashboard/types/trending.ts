import { Movie } from "../../shared/types/movie"

export interface TrendingMoviesResponse {
    page: number
    results: Movie[],
    total_pages: number,
    total_results: number
}
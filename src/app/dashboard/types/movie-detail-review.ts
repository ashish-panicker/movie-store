import { MovieDetail } from "../../shared/types/movie-detail";
import { ReviewDetail } from "../../shared/types/review-detail";

export interface MovieDetailReview {
    movie: MovieDetail,
    review: ReviewDetail
}
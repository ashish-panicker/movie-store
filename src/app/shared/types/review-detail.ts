import { Result } from "./result"

export interface ReviewDetail {
    id: number
    page: number
    results: Result[]
    total_pages: number
    total_results: number
  }
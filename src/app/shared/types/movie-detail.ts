import { Movie } from './movie';
import { Genre } from './genre';
import { ProductionCompany } from './production-company';
import { ProductionCountry } from './production-country';
import { SpokenLanguage } from './spoken-language';

export interface MovieDetail extends Movie {
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
}

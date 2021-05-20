export interface MovieBackdropInfo{
    id: number;
    title: string;
    voteAverage: string;
    releaseDate: string;
    poster: string;
    adult: boolean;
    overview: string;
}

export interface UpcomingBackdropInfo{
    id: number;
    title: string;
    releaseDate: string;
    poster: string;
}

export interface SearchPost {
    id: number;
    title: string;
    releaseDate: string;
    poster: string;
    voteAverage: number;
}


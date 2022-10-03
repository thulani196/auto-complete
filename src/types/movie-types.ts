// Movie Image Interface
export interface I {
    height: number;
    imageUrl: string;
    width: number;
}

export interface IMovie {
    i: I; // Image
    id: string;
    l: string; // Movie title field
    q: string;
    qid: string;
    rank: number;
    s: string; // Starring
    y: number;
}

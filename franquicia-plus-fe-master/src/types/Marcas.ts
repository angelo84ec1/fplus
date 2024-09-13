import { Results } from "./Results"

export type Marcas = {
    links: {
        next: string | null
        previous: string | null
    }
    total_pages: number,
    count: number,
    results: Results[],
}
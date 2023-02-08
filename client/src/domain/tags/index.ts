export interface ITags {
    get(): Promise<Tags.TItems[]>
}

export namespace Tags {
    export type TItems = {
        id: number
        name: string
    }
}
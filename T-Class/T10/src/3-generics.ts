
type APIResponse<T> = {
    data: T,
    success: boolean
}

let userResponse: APIResponse<{name: string, age: number}>;

let gameResponse: APIResponse<{health: number, agent: string, effects: string[]}>;
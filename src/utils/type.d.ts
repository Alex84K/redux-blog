export interface RootState {
    quote: string
}

export interface RootStateBlog {
    startState: any
}

export interface ReduxAction {
    type: string,
    payload: any
}

export interface BlogsAction {
    type: string,
    payload: any
}
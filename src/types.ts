export type FilloutQueryParams = {
    limit?: number
    afterDate?: string
    beforeDate?: string
    offset?: number
    status?: 'in_progress' | 'finished'
    includeEditLink?: boolean
    sort?: 'asc' | 'desc'
    filters?: FilterClauseType[]
}

export type FilterClauseType = {
    id: string
    condition: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than'
    value: number | string
}

export type Question = {
    id: string
    name: string
    type: string
    value: string
}

export type Submission = {
    submissionId: string
    submissionTime: Date
    lastUpdatedAt: Date
    questions: Question[]
    calculations: []
    urlParameters: []
    quiz: {}
    documents: []
}

export type FormSubmissions = {
    responses: Submission[]
    totalResponses: number
    pageCount: number
}
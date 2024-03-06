import { FilterClauseType, FormSubmissions, Question, Submission } from "./types"

function getQuestion(questions: Question[], filterId: string): Question | {value: number} {
    return questions.find(question => question.id === filterId) ?? {value: NaN}
}

export async function getFilteredResponses(formSubmissions: FormSubmissions, filters:  FilterClauseType[]): Promise<Submission[]> {
    let responses = formSubmissions.responses
    for (const filter of filters) {
        switch (filter.condition) {
            case 'does_not_equal':
                responses = responses.filter(response => getQuestion(response.questions, filter.id)?.value !== filter.value)
                break;
            case 'equals':
                responses = responses.filter(response => getQuestion(response.questions, filter.id)?.value === filter.value)
                break;
            case 'greater_than':
                responses = responses.filter(response => getQuestion(response.questions, filter.id)?.value > filter.value)
                break;
            case 'less_than':
                responses = responses.filter(response => getQuestion(response.questions, filter.id)?.value < filter.value)
                break;
          }
    }

    return responses 
}
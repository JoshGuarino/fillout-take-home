import { FilloutQueryParams, FormSubmissions } from "./types"

export async function getFormSubmissions(formId: string, queries: FilloutQueryParams): Promise<FormSubmissions> {
    let url = new URL(`https://api.fillout.com/v1/api/forms/${formId}/submissions`)
    for (const [key, value] of Object.entries(queries)) {
        if (key === 'limit' || key === 'offset') {
            continue
        }
        url.searchParams.append(key, value.toString())
    }
    const res = await fetch(url, { headers: { Authorization: `Bearer ${process.env.FILLOUT_API_KEY}` } })

    return res.json()
}
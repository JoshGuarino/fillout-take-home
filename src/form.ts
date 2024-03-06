import { FormSubmissions } from "./types"

export async function getFormSubmissions (formId: string, queries: object): Promise<FormSubmissions> {
    let url = new URL(`https://api.fillout.com/v1/api/forms/${formId}/submissions`)
    for (const [key, value] of Object.entries(queries)) {
        url.searchParams.append(key, value)                
    }
    const res = await fetch(url, { headers: {Authorization: `Bearer ${process.env.FILLOUT_API_KEY}`} })
    
    return res.json()
}
import { QuotesType } from "../types/quotes";



  export const getZenQuotes = async (): Promise<QuotesType | undefined> => {
    const response = await fetch('https://zenquotes.io/api/today')
    const responseBody = await response.json()
    console.log(response)
    if(!responseBody) return undefined;
    return responseBody
  }

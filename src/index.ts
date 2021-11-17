import { Meaning } from './interface/meaning.interface';
import axios from 'axios'

const getMeaning = async (query: string, locale: string = 'en'): Promise<Meaning[]> => {
    const resp = await axios({
        method: 'get',
        url: `https://${locale}.wiktionary.org/api/rest_v1/page/definition/${query}`,
        responseType: 'text'
    })
    return resp.data[locale]
}

export { getMeaning }

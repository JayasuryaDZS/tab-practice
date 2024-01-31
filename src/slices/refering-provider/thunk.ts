import axios from "axios";
import { isLoading, referingProviderData } from './reducer'

const apiDomain = 'https://seabreezedevapi.eclaimmanager.in/SeaBillingWebService'

export const getAllReferingProvider = () => async (dispatch: any) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha2hpbGVzaEBmcm9pZGVuLmNvbSIsInNjb3BlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwiaXNzIjoiaHR0cHM6Ly9uYWdhdGF0ZWNobm9sb2dpZXMuY29tLyIsImlhdCI6MTcwNjcwMDk5MSwiZXhwIjoxNzA2NzE4OTkxfQ.r_7DQKoJtZXzMUpWqQwtGjcDvieMzCfiEN-ei9nTglw'
        }
    }
    const companyID = 1;
    try {
        dispatch(isLoading())
        const response: any = await axios.get(apiDomain + `/referringprovider/getAll/${companyID}`, config)
        const { errors, responseCode, result } = response.data
        if (!errors && responseCode === '0') {
            dispatch(referingProviderData(result))
        } else {
            console.log('Error in the refering provider')
        }
    } catch (error) {
        console.log('Chatch section block')
    }
}
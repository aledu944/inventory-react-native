'use client'
import { useEffect, useState } from 'react'
import axios, { isAxiosError } from 'axios'


export function useFetch<T>(url: string){
    
    const [isLoading, setIsLoading] = useState(false);
    
    const [data, setData] = useState<T | undefined>(undefined);

    const [isError, setIsError] = useState({
        hasError: false,
        message: '',
    })

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const { data }= await axios.get(url);
            setData(data);
            setIsLoading(false);
            setIsError({
                hasError: false,
                message: '',
            })
        } catch (error) {
            if( isAxiosError(error) ){
                setIsError({
                    hasError: true,
                    message: error.response?.data.message ?? 'Error al solicitar los datos',
                })
            }
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        fetchData();
    }, [])
    

    
    
    return {
        data,
        isLoading,
        isError
    }
}

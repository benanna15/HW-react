import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, seterror] = useState();

    useEffect(() => {
        // etat de depart
        setLoading("loading")
        setData(null)
        seterror(null)

        axios.get(url)
            .then(res => {
                if (res.data.Table) {
                    setData(res.data.Table)
                } else {
                    seterror("il y'a un probleme")
                }

            })
            .catch(err => {
                console.log(err)
                seterror("il y'a un probleme")
            })

    }, [url]);

    return { data, loading , error}
}

export default useFetch
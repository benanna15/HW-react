import React, {useEffect} from 'react'

const useDocumentTItle = (title) => {
    useEffect(() => {
      
        const prevTitle = document.title ;

        document.title = title

        return () => {
            document.title = prevTitle
        }

    }, [title]);

}

export default useDocumentTItle

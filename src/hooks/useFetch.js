import React from 'react';

const useFetch = () => {

    const[content,setContent] = React.useState([]);
    const[isLoading,setIsLoading] = React.useState(false);

    const news = async (url) => {
        setContent([])
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setContent(data.articles);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    // React.useEffect(() => {
    //     news();
    //     setIsLoading(true)
    // },[url])

    return { content,news,setContent,isLoading }
}

export default useFetch

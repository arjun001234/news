import React from 'react';
import './styles/app.css';
import Card from './components/card';
import useFetch from './hooks/useFetch';
const key = `&apiKey=${process.env.REACT_APP_API_KEY}&sortBy=popularity&pageSize=10&page=`;
const url = 'https://newsapi.org/v2/everything?q=';
const searchUrl = 'https://newsapi.org/v2/top-headlines?country=in';

const App = () => {

    const[search,setSearch] = React.useState('');
    const[page,setPage] = React.useState(1);
    const[request,setRequest] = React.useState(`${searchUrl}${key}${page}`);

    const { content,news,setContent,isLoading } = useFetch(request);

    const handleChange = (e) => {
        setSearch(e.target.value);
        setPage(1)
    }

    React.useEffect(() => {
        if(search !== ''){
            setRequest(`${url}${search}${key}${page}`);
        }else{
            setRequest(`${searchUrl}${key}${page}`);
        }
        news(request);
    },[search,page])

    const handleNext = () => {
        if(page > 50) {
            setPage(1)
        } else {
            setPage(page + 1)
        }
    }

    const handlePrev = () => {
        if(page <= 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

    const handleRemove = (id) => {
        const remove = content.filter((item) => item.title != id)
        setContent(remove);
    }

    return (
        <div className="root">
            <div className="form">
                <h1 className="title">Search News</h1>
                <input className="input" type='text' value={search} onChange={handleChange} />
            </div>
            <div className="divstyle">
                <button className="buttonstyle" onClick={handlePrev}>Prev</button>
                <h3 className="page">{page}</h3>
                <button className="buttonstyle" onClick={handleNext} >Next</button>
            </div>
            <div className="cardContainer">
                {isLoading  &&  <h1 style={{position: 'absolute',width: '50%',top: '40%',left: '25%',textAlign: 'center'}}>Loading...</h1>}
                {content.length > 0 && content.map((item,index) => {
                    return <Card key={index} {...item} handleRemove={handleRemove}/>
                })}
                {!isLoading && content.length === 0 && <h1 style={{position: 'absolute',width: '50%',top: '40%',left: '25%',textAlign: 'center'}}>Not Found.</h1>}
            </div>
        </div>
    )
}

export default App;

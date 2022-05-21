import axios from "axios";
import {useEffect , useState} from "react";
import './style.css';


export default function Search_Recipe() {
    const [list, setList] = useState([])
    const [query , setQuery] = useState("");

  useEffect(()=>{
      getRespies();
    }, [])

    let url = `https://api.edamam.com/search?q=${query}&app_id=ef8db94c&app_key=ec6b16c0f07aea64026eb2a21fa4529d&from=0&to=8&calories=591-722&health=alcohol-free`

     function getRespies(){

    axios.get(url).then((res)=>{
    console.log(res.data?.hits, 'hits')
        setList(res.data?.hits)
})

    }

    const handleChange = e => {
        setQuery(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        getRespies()
    }

    return (
        <>
            <form onSubmit={onSubmit}>
        <input
            value={query}
            onChange = {handleChange}
            className="search"
        />
        <input type="submit" value="Search"/>
        </form>
            <div className="box">
                {list?.map((item)=>
                    <div className="container">
                        <h1>{item.recipe?.label}</h1>
                        <img src={item.recipe?.image}/>
                        <p>ingredientLines :</p>
                        <p>{item.recipe?.ingredientLines}</p>
                            <span className="details">mealType:</span>
                            <span>{item.recipe?.mealType}</span>

                    </div>)
                }
            </div>

            </>
    );

}

import { useEffect, useState } from "react"




export default function Product() {

    let [count, setCount] = useState(0);
    let [product, setProduct] = useState('Samsung');
    let [movies, setMovies] = useState([]);

    function changeCount() {
        setCount(Math.random())
        setMovies([1, 2, 3]);
    }

    // useEffect() use for component life cycle 
    useEffect(() => {
        // componentDidMount if the [] is empty 
        // componentDidMount is used to call API (Called Default)
    }, [])
    
    useEffect(() => {
        if (count === 0) return;
        // componentDidUpdate if the [] has a Value 
        // componentDidUpdate doesn't Work until the Count Value is changed
        // componentDidUpdate (Called Default) Without if condition
        console.log('componentDidUpdate');
    }, [count])
    
    useEffect(() => {
        // componentDidMount if the [] is empty && there is a fun in return
        // componentDidMount Called When the component is leaved or deleted
        return () => {
            console.log('componentWillUnMount');
        }
    }, [])
    
    return <>
        <h1>Product Component</h1>
        <h1>Count: {count}</h1>
        {/* {movies.map((ele) => <h5>{ele}</h5>)} */}
        <button className="btn btn-info" onClick={changeCount}>Change</button>
    </>
}

// اي hook بيكون اوله كلمة use..
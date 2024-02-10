import SearchBar from "material-ui-search-bar";
import { useEffect, useState } from 'react'; 
import Axios from 'axios';

export const SearchBarComponent = () => {

    const [input, setInput] = useState('');

    const fetchData = async () => {
        const response = await fetch(`https://fakestoreapi.com/products?title=${input}`);
        const data = await response.json();
        const results = data.filter((product) => {
            return product.title.toLowerCase().includes(input.toLowerCase());
        })
        console.log(results);
    };

    const handleChanges = async (newValue) => { 
        setInput(newValue);
        try {
            const response = await Axios.post("http://localhost:5173/", newValue); // Send newValue in the request body
            const language = response.data[0].language;
            console.log(language);
            if(language != 'en') {
                const response = await Axios.get("http://localhost:5173/translate", newValue);
                setInput(response.data);
            } // Assuming response.data is the expected data structure
            fetchData(); // Assuming fetchData function is defined elsewhere
        } catch (error) {
            console.error("Error:", error);
        }
     }

     useEffect(() => { 
        handleChanges(input);
      }, []);


    return (
        <SearchBar style={{borderRadius: "8px", padding: "8px", height: "40px", margin: "8px"}} value={input} onChange={handleChanges}  />
    )
}

export default SearchBarComponent;
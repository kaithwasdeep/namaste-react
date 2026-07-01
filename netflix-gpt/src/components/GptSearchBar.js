import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openai";

const GptSearchBar = () => {
    const configLang = useSelector(store => store.config.lang)
    const searchText = useRef(null);
    if(!configLang) return;

    const handleGptSearchClick = async () => {
        
        console.log(searchText.current.value);

        const userQuery = 'You are a Movie Recommendation system and suggest some movies based on the query: '+ searchText.current.value +'. Only give me names of 5 movies, comma separated like the example result given ahead. Example result: Golmaal, Hulchul, Gadar, Sholay, Koi Mil Gaya.'

        // const response = await client.chat.completions.create({
        //     model: 'gpt-3.5-turbo',
        //     messages: [{role: 'user', content: userQuery }]
        // });

        // console.log(response.choices);
    }

    return (
        <div className="pt-44 flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input type="text" ref={searchText} className="px-3 my-3 col-span-9 ml-4 rounded-sm" placeholder={lang[configLang].searchPlaceholder} />
                <button className="bg-red-600 text-white font-bold mx-4 my-3 px-5 py-2 rounded-sm col-span-3" onClick={handleGptSearchClick}>{lang[configLang].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;
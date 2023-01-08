import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/Api";
const MyContext = createContext();

const AppContext = ({ children }) => {
    const [loading, SetLoading] = useState(false);
    const [searchResults, SetSearchResults] = useState([]);
    const [selectCategories, SetSelectCategories] = useState("New");
    const [mobileMenu, SetMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategories(selectCategories)
    }, [selectCategories]);
    const fetchSelectedCategories = (query) => {
        SetLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents)
            SetSearchResults(contents)
            SetLoading(false)
        })

    }
    return (
        <MyContext.Provider
            value={{
                loading,
                SetLoading,
                searchResults,
                SetSearchResults,
                selectCategories,
                SetSelectCategories,
                mobileMenu,
                SetMobileMenu

            }}
        >
            {children}
        </MyContext.Provider>
    )
};
export { MyContext, AppContext }
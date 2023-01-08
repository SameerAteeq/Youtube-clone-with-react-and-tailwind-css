import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MyContext } from '../../context';
import { fetchDataFromApi } from '../../utils/Api';
import SearchResultVideo from '../searchresultVideo';
import Sidebar from '../sidebar';

const SearchResult = () => {
    const [result, setResult] = useState();
    const { searchQuery } = useParams();
    const { SetLoading } = useContext(MyContext);
    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
        fetchSearchResult();
    }, [searchQuery])
    const fetchSearchResult = () => {
        SetLoading(true);
        fetchDataFromApi(`search/?q=${searchQuery}`).then(({ contents }) => {
            setResult(contents);
            SetLoading(false);
        })
    }
    return (
        <div className='flex flex-row h-[calc(100%-56px)]'>
            <Sidebar />
            <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
                <div className='grid grid-cols-1 gap-2 p-5'>
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        return (
                            <SearchResultVideo
                                key={item?.video?.videoId}
                                video={item?.video}
                            />
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default SearchResult

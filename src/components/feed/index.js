import React, { useContext } from 'react'
import { MyContext } from '../../context';
import Sidebar from '../sidebar'
import VideoCard from '../video/videoCard';

const Feed = () => {
    const { loading, searchResults } = useContext(MyContext);
    return (
        <div className='flex flex-row h-[calc(100%-56px)]'>
            <Sidebar />
            <div className=' grow w-[calc(100%-240px)] h-full scrollbar scrollbar-w-2 scrollbar-rounded-[44px] scrollbar-h-5 scrollbar-thumb-[#303030] scrollbar-track-gray-100 overflow-y-auto bg-black'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
                    {!loading && searchResults &&
                        searchResults?.map((item) => {
                            if (item?.type !== "video") return false;
                            return (
                                <VideoCard
                                    key={item?.video?.videoId + Math.floor(Math.random() * 1000)}
                                    video={item?.video}
                                />
                            )
                        })}

                </div>
            </div>
        </div>
    )
}

export default Feed

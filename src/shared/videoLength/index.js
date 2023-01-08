import moment from 'moment/moment'
import React from 'react'

const VideoLength = ({ time }) => {
    const videoLengthInseconds = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss")
    return (
        <span className='absolute bottom-2 right-2 bg-black text-white py-1 px-2 text-xs rounded-md'>
            {videoLengthInseconds}
        </span>
    )
}

export default VideoLength
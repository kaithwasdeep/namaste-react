
const VideoTitle = ({title, overview}) => {
    
    return (
        <div className="pt-64 pl-20 pb-48 absolute bg-gradient-to-r from-black text-white w-screen aspect-video">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="w-1/4 ">{overview}</p>
            <div className="mt-4">
                <button className="bg-white px-6 py-2 rounded-md font-bold text-black hover:opacity-80"> Play </button>
                <button className="bg-gray-500 px-6 py-2 rounded-md font-bold text-white opacity-60 ml-3">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;
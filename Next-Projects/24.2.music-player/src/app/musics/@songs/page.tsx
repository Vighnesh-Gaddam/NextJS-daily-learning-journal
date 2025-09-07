/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import { Clock } from "lucide-react";

const SongsList = () => {

  const songs = [
    {
      id: 1,
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      time: "4:22",
    },
    {
      id: 2,
      title: "Channa Mereya",
      artist: "Arijit Singh",
      time: "4:49",
    },
    {
      id: 3,
      title: "Raabta",
      artist: "Arijit Singh",
      time: "4:03",
    },
    {
      id: 4,
      title: "Ae Dil Hai Mushkil",
      artist: "Arijit Singh",
      time: "4:29",
    },
    {
      id: 5,
      title: "Phir Le Aya Dil",
      artist: "Arijit Singh",
      time: "5:16",
    }
  ];


  return (
    <div className="w-[96%] mx-auto px-4">
      <h2 className="text-3xltext-white mt-8 font-bold mb-6">Songs Collection</h2>

      <ul className="space-y-4">
        {songs.map((song) => (
          <li key={song.id} className="flex justify-between items-center p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105">
            <div className="flex items-center gap-5">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&%20w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-16 w-16 rounded-md flex-shrink-0"/>

                <div>
                    <h3 className="text-white font-semibold">{song.artist}</h3>
                    <p className="text-sm text-gray-400">{song.title}</p>
                </div>
            </div>

            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{song.time}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SongsList
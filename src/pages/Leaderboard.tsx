import NavBar from "@/NavBar";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { useEffect } from "react";
import PlayListCard from "@/PlayListCard";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function Leaderboard(){
        type Playlist = {
            id: number;
            title: string;
            description: string;
            tags: string[];          // Array of strings
            spotify_url: string;
            votes: number;
            created_at: string;
            };
        const [playlists, setPlaylists] = useState<Playlist[]>([]);
        const [loading, setLoading] = useState(true);
        const [searchTerm, setSearchTerm] = useState("")
        const [sortBy, setSortBy] = useState("votes");

        const fetchPlaylists = async () => {
            setLoading(true);

            let query = supabase.from("playlists").select("*");

            if (searchTerm) {
              query = query.ilike("title", `%${searchTerm}%`);
            }

            if(sortBy === "votes"){
              query = query.order("votes", {ascending: false});
            }else if(sortBy === "title"){
              query = query.order("title", {ascending: true});
            }else if(sortBy === "newest"){
              query = query.order("newest", {ascending: false})
            }



            const { data, error } = await query;

            if (error) {
              console.error(error);
            } else {
              setPlaylists(data || []);
            }

            setLoading(false);
          };

  // Fetch on first load and whenever searchTerm changes
  useEffect(() => {
    fetchPlaylists();
  }, [searchTerm, sortBy]);

        return (
    <div className="min-h-screen bg-[url('blob-haikei.svg')] bg-cover text-white">
      <NavBar />
      <div className="max-w-4xl mx-auto p-6 flex flex-col gap-2 mt-8">
        <div className = "flex gap-2 justify-center">
          <Input type = "text" value = {searchTerm} onChange = {(e) => setSearchTerm(e.target.value)} placeholder = "Search playlists..." className = "flex-1 bg-gray-800/80 border-gray-600 text-white placeholder-gray-400 rounded-lg focus-visible:ring-2 focus-visible:ring-green-500"/>          
          <div className = "flex gap-2 items-center">
            <Select value = {sortBy} onValueChange = {setSortBy}>
              <SelectTrigger className = "w-[160px] bg-gray-800/80 border-gray-600 text-white rounded-lg focus:ring-green-500">
                  <SelectValue placeholder = "Sort By" className = ""/>
              </SelectTrigger>
              <SelectContent className = "bg-gray-900 text-white border border-gray-700">
                <SelectItem value = "votes">Most Votes</SelectItem>
                <SelectItem value = "newest">Newest</SelectItem>
                <SelectItem value = "title">Title (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick = {fetchPlaylists} className = "bg-green-600 hover:bg-green-700 rounded-lg shadow-md">Search</Button>

        </div>
        {loading && <p>Loading playlists...</p>}

        {playlists.map((playlist) => (
          <motion.div
            key={playlist.id}
            initial={{ height: 64 }}
            whileHover={{ height: "auto" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="overflow-hidden cursor-pointer bg-gray-900/50 rounded-lg shadow-md"
          >

            <div className="flex justify-between items-center px-4 h-16">
              <h3 className="text-white font-bold">{playlist.title}</h3>
              <p className="text-green-400">{playlist.votes} votes</p>
            </div>

            <div className="p-4">
              <PlayListCard
                id = {playlist.id}
                title={playlist.title}
                description={playlist.description}
                tags={playlist.tags}
                spotify_url={playlist.spotify_url}
                initialLikes={playlist.votes}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
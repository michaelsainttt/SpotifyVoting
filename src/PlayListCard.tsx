import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { Heart } from "lucide-react";
import { supabase } from "./lib/supabaseClient";
import { useEffect } from "react";

type PlayListCardProps = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  spotify_url: string;
  initialLikes?: number;
};

export default function PlayListCard({
  id,
  title,
  description,
  tags,
  spotify_url,
  initialLikes = 0,
}: PlayListCardProps) {

  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialLikes);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`playlist-${id}-liked`);
    if (savedLikes) {
      setLiked(JSON.parse(savedLikes));
    }

    const savedCount = localStorage.getItem(`playlist-${id}-count`);
    if (savedCount) {
      setCount(Number(savedCount));
    }
  }, [id]);

  const handleClick = async () => {
  const newLiked = !liked;
  const newCount = liked ? count - 1 : count + 1;
  setLiked(!liked);
  setCount(newCount);

  localStorage.setItem(`playlist-${id}-liked`, JSON.stringify(newLiked));
  localStorage.setItem(`playlist-${id}-count`, newCount.toString());

  // Update Supabase
  const { error } = await supabase
    .from("playlists")
    .update({ votes: newCount })
    .eq("id", id); // or use playlist ID if available

  if (error) console.error("Failed to update votes:", error);

};

  function getSpotifyEmbedUrl(url: string) {
  if (!url) return "";
  return url.replace("open.spotify.com/playlist/", "open.spotify.com/embed/playlist/");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="bg-gray-900/70 border border-green-700/40 rounded-2xl shadow-lg hover:shadow-green-600/30 transition">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-white">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-400 mt-2 text-sm md:text-base">
            {description}
          </CardDescription>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-full px-3 py-1 text-xs border-green-600 text-green-400"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="px-4 py-2">
          <div className="overflow-hidden rounded-xl shadow-md border border-green-800/40">
            <iframe
              src={getSpotifyEmbedUrl(spotify_url)}
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between pt-4">
          <Toggle
            pressed={liked}
            onPressedChange={handleClick}
            className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-green-800/30 transition"
          >
            <motion.div
              animate={{ scale: liked ? 1.2 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart
                className={`w-5 h-5 ${
                  liked ? "text-green-400 fill-green-400" : "text-gray-500"
                }`}
              />
            </motion.div>
            <span className="text-sm font-medium text-gray-300">{count}</span>
          </Toggle>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
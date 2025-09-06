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

type PlayListCardProps = {
  title: string;
  description: string;
  tags: string[];
  spotifyUrl: string;
  initialLikes?: number;
};

export default function PlayListCard({
  title,
  description,
  tags,
  spotifyUrl,
  initialLikes = 0,
}: PlayListCardProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialLikes);

  const handleClick = () => {
    setLiked((prev) => !prev);
    setCount((prev) => (liked ? prev - 1 : prev + 1));
  };

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

        <CardContent>
          {/* Spotify Embed */}
          <div className="mt-4 overflow-hidden rounded-xl shadow-md border border-green-800/40">
            <iframe
              src={spotifyUrl}
              className="w-full h-64"
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
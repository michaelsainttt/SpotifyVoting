import NavBar from "@/NavBar";
import PlayListCard from "@/PlayListCard";
import TextGrab from "./TextGrab";
import { Button } from "@/components/ui/button";
import TrendingPlaylists from "@/TrendingPlaylists";
import { motion } from "framer-motion";
import HowItWorks from "@/HowItWorks";

export default function LandingPage() {
  return (
    <div className="relative w-full">
      <div
        className="relative w-full h-screen bg-[url('/bg1.svg')] bg-cover bg-bottom bg-no-repeat"
      >
        <NavBar />
        <div className="flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-20 gap-8">
          <div className="flex-1 flex flex-col justify-center items-start text-center md:text-left">
            <TextGrab />
            <Button className="mt-6 w-40 md:w-48 h-12 bg-green-700 hover:bg-green-600 transition-transform hover:scale-105 cursor-pointer">
              Get Started
            </Button>
          </div>
          <div className="flex-1 flex justify-center md:justify-end items-center -translate-y-16">
            <PlayListCard
              title="My Current Gym Playlist!"
              description="Hard-hitting tracks to fuel your workout"
              tags={["#GymWorkout", "#RapMusic", "#TravisScott"]}
              spotifyUrl="https://open.spotify.com/playlist/69rS1swxTQ9irzSFgKV5mF?si=4124272a04364757"
              initialLikes={237}
            />
          </div>
        </div>
      </div>
      <section className="bg-black py-20">
        <h1 className="text-3xl text-white font-bold mb-8 text-center">
          Current Trending Playlists!
        </h1>
        <motion.div
            initial = {{
                opacity: 0,
                y:50
            }}
            whileInView={{
                opacity: 1,
                y:0
            }}
            viewport={{
                once: true, amount: 0.5
            }}
            transition= {{
                duration: 1, ease: "easeIn"
            }}>
            <TrendingPlaylists />
        </motion.div>
      </section>
      <section className = "bg-[url('/landingpage1.svg')] w-full h-screen bg-cover">
        <HowItWorks />
      </section>
    </div>
  );
}
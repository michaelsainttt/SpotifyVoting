import NavBar from "@/NavBar";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";


export default function Submit(){
    const [newTask, setNewTask] = useState({title : "",description: "", tags: [] as string[], spotify_url: "",
 })

 const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const {error} = await supabase.from("playlists").insert(newTask).single();

    if(error) {
        console.error("Error adding task", error.message);
    }

    navigate("/leaderboard");

 }

    return(
        <div className="bg-[url('/signinpagebg.svg')] bg-cover bg-center w-full min-h-screen">
            <NavBar/>
            <div>
                <h1 className = "flex justify-center translate-y-10 text-5xl font-extrabold text-white">Submit Playlist!</h1>
                <div className = "flex justify-center items-center min-h-screen">
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full sm:w-80 md:w-96 lg:w-[500px]"
                    >
                    <Card className = "bg-gray-900/70 border border-green-700/40 text-white w-full sm:w-80 md:w-96 lg:w-[500px] h-[500px] sm:h-[550px] md:h-[600px]">
                        <CardHeader>
                            <CardTitle>
                                Submit Your Playlist
                            </CardTitle>
                            <CardDescription className = "text-gray-400">
                                Share your favorite tracks and see how they stack up against others!
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className = "flex flex-col gap-5" onSubmit={handleSubmit}>
                                <div className = "grid gap-3">
                                    <Label className = "text-gray-300" htmlFor = "string">
                                        Playlist Title
                                    </Label>
                                    <Input className ="bg-gray-800/80 border border-gray-700" placeholder = "Enter Playlist Title" required onChange={(e) => setNewTask((prev) => ({...prev, title: e.target.value}))} ></Input>
                                </div>
                                <div className = "grid gap-3">
                                    <Label className = "text-gray-300">
                                        Description
                                    </Label>
                                    <Input className ="bg-gray-800/80 border border-gray-700" placeholder = "Enter Description" required onChange= {(e) => setNewTask((prev) => ({...prev, description: e.target.value})) }/>
                                </div>
                                <div className = "grid gap-3">
                                    <Label className = "text-gray-300" htmlFor = "website">
                                        Spotify Playlist Link
                                    </Label>
                                    <Input id = "website" type = "url" required className ="bg-gray-800/80 border border-gray-700" placeholder = "Enter Playlist URL" onChange = {(e) => setNewTask((prev) => ({...prev, spotify_url: e.target.value}))}></Input>
                                </div>
                                <div className = "grid gap-3">
                                    <Label className = "text-gray-300" htmlFor = "string">
                                        Tags/Hashtags
                                    </Label>
                                    <Input className ="bg-gray-800/80 border border-gray-700" placeholder = "Add Tags Here (Put a comma in between each one)" onChange={e => setNewTask(prev => ({ ...prev, tags: e.target.value.split(",").map(tag => tag.trim()) }))}/>
                                </div>
                                <Button className = "bg-green-600 "type = "submit">
                                    Submit Playlist
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
                </div>
            </div>
        </div>
    );
}
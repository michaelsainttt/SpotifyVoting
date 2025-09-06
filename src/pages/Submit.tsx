import NavBar from "@/NavBar";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Submit(){
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
                            <form className = "flex flex-col gap-5">
                                <div className = "grid gap-3">
                                    <Label className = "text-gray-300" htmlFor = "string">
                                        Playlist Title
                                    </Label>
                                    <Input className ="bg-gray-800/80 border border-gray-700" placeholder = "Enter Playlist Title" required></Input>
                                </div>
                                <div className = "grid gap-3">
                                    <Label className = "text-gray-300">
                                        Description
                                    </Label>
                                    <Input className ="bg-gray-800/80 border border-gray-700" placeholder = "Enter Description" required/>
                                </div>
                                <div className = "grid gap-3">
                                    <Label className = "text-gray-300" htmlFor = "website">
                                        Spotify Playlist Link
                                    </Label>
                                    <Input id = "website" type = "url" required className ="bg-gray-800/80 border border-gray-700" placeholder = "Enter Playlist URL"></Input>
                                </div>
                                <div className = "grid gap-3">
                                    <Label className = "text-gray-300" htmlFor = "string">
                                        Tags/Hashtags
                                    </Label>
                                    <Input className ="bg-gray-800/80 border border-gray-700" placeholder = "Add Tags Here"/>
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
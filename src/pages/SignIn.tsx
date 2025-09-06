import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export function SignIn() {
  return (
    <div className = "relative w-full min-h-screen bg-[url('/layered-waves-haikei.svg')] bg-cover bg-center flex items-center justify-center"
    >
        <div className = "absolute left-30 top-8 flex gap-3">
            <img className = "size-10"src="public/dicerythmrank.png"></img>
            <h1 className="text-green-500 text-3xl font-bold">RhythmRank</h1>
        </div>
        <motion.div
        initial = {{
            opacity: 0, y:20
        }}
        animate= {{opacity: 1, y:0}}
        transition = {{duration: 0.3}}
        className = "w-full max-w-sm">
            <Card className="w-full bg-gray-900/70 border border-green-700/40 rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-green-700 transition duration-300 ease-in-out">
                <CardHeader>
                    <CardTitle className = "text-white">
                        Sign In
                    </CardTitle>
                    <CardDescription className = "text-gray-400">
                        Please enter your email and password to continue!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className ="flex flex-col gap-6">
                        <div className = "grid gap-2">
                            <Label htmlFor="email" className = "text-gray-300">
                                Email
                            </Label>
                            <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className = "bg-gray-800/80 border-gray-700 text-white placeholder-gray-500 shadow-xl" />
                        </div>
                        <div className = "grid gap-2">
                            <Label htmlFor="password" className = "text-gray-300">
                                Password 
                            </Label>
                            <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            className = "bg-gray-800/80 border-gray-700 text-white placeholder-gray-500 shadow-xl"/>
                        </div>
                        <Button type = "submit" className = "w-full bg-green-600 hover:bg-green-700">
                            Sign In
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className = "flex justify-center">
                    <p className = "text-sm text-gray-400">
                        Don't have an account?{""}
                        <Button variant = "link" className = "text-green-400 hover: text-green-300">
                            Sign Up
                        </Button>
                    </p>
                </CardFooter>
            </Card>
        </motion.div>
    </div>
  );
}
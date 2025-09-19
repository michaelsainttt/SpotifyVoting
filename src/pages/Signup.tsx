"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert("Account created! Please check your email to confirm.");
      // Optionally redirect to Sign In page
    }

    setLoading(false);
  };

  return (
    <div className="relative w-full min-h-screen bg-[url('/layered-waves-haikei.svg')] bg-cover bg-center flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-sm"
      >
        <Card className="w-full bg-gray-900/70 border border-green-700/40 rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-green-700 transition duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="text-white">Sign Up</CardTitle>
            <CardDescription className="text-gray-400">
              Create an account to start submitting playlists and voting!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-6" onSubmit={handleSignUp}>
              {error && <p className="text-red-500">{error}</p>}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800/80 border-gray-700 text-white placeholder-gray-500 shadow-xl"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-gray-300">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-800/80 border-gray-700 text-white placeholder-gray-500 shadow-xl"
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                {loading ? "Creating account..." : "Sign Up"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Button variant="link" className="text-green-400 hover:text-green-300">
                Sign In
              </Button>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
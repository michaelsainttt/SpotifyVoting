import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "./lib/supabaseClient";
import { Link } from "react-router-dom";
import logo from "./assets/dicerythmrank.png";


export default function NavBar() {

    const [session, setSession] = useState<any>(null);


  useEffect(() => {
    supabase.auth.getSession().then(({data: {session} } ) => {
      setSession(session);
    });

    const {data: listener} = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    })
    return () => {
    listener.subscription.unsubscribe();
  }

  }, []);


   const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  const navigate = useNavigate();
  return (
 <div className="bg-black/50 p-8 position:sticky flex justify-between items-center w-full font-bold px-30">
  <div className = "flex space-x-3">
    <img className = "size-10"src={logo}></img>
    <h1 className="text-green-500 text-3xl font-bold">RhythmRank</h1>
  </div>

  <NavigationMenu>
        <NavigationMenuList className="flex space-x-8">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className="text-white hover:text-green-500 transition-colors hover:bg-gray-900">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/submit" className="text-white hover:text-green-500 transition-colors hover:bg-gray-900">
                Submit Playlist
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/leaderboard" className="text-white hover:text-green-500 transition-colors hover:bg-gray-900">
                Leaderboard
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  {session ? (
       <Button onClick = {handleLogout} className = "px-6 hover:text-green-500 transition-colors cursor-pointer">Logout</Button>
    ) : (
      <Button className = "px-6 hover:text-green-500 transition-colors cursor-pointer" onClick = {() => navigate("/signin")}>Sign In</Button>
    )
  }
</div>
  );
}
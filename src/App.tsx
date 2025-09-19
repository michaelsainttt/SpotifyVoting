import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import { SignIn } from './pages/SignIn'
import Submit from "./pages/Submit";
import Leaderboard from "./pages/Leaderboard";
import SignUp from "./pages/Signup";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "./lib/supabaseClient";
import { Navigate } from "react-router-dom";

function App() {

  const[session, setSession] = useState<any>(null)
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (loading) {
    // Wait until we know the session status
    return <div>Loading...</div>;
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/submit"
          element={session ? <Submit /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/leaderboard"
          element={session ? <Leaderboard /> : <Navigate to="/signin" replace />}
        />
      </Routes>
    </Router>
  )
}

export default App

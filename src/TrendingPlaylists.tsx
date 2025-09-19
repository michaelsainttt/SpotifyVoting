import PlayListCard from "./PlayListCard";

const playlists = [
  {
    id: 1,
    title: "Gym Hits",
    description: "Hard-hitting tracks to fuel your workout",
    tags: ["#GymWorkout", "#RapMusic"],
    spotifyUrl: "https://open.spotify.com/playlist/69rS1swxTQ9irzSFgKV5mF?si=4124272a04364757",
  },
  {
    id: 2,
    title: "Chill Vibes",
    description: "Relax and focus",
    tags: ["#Chill", "#LoFi"],
    spotifyUrl: "https://open.spotify.com/playlist/6OWvxo7F5ciuJzF8tQ8vVj?si=0156b4bee5a84c4d",
  },
  {
    id: 3,
    title: "Top Hits 2025",
    description: "The biggest tracks this year",
    tags: ["#Pop", "#TopHits"],
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
  },
];

export default function TrendingPlaylists() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
      {playlists.map((pl, idx) => (
        <PlayListCard
          id={pl.id} 
          key={idx}
          title={pl.title}
          description={pl.description}
          tags={pl.tags}
          spotify_url={pl.spotifyUrl}
        />
      ))}
    </div>
  );
}
import { useState } from "react";

const TEAMS = [
  {
    id: 1,
    name: "Stamina R6M",
    tag: "STM",
    region: "Europe",
    founded: 2025,
    game: "Rainbow Six Mobile",
    color: "#e63946",
    wins: 0,
    losses: 0,
    players: [
      { id: 1, name: "Exo", real: "…….", age: 17, region: "🇬🇧 UK", role: "Anchor / IGL", achievements: [], joined: "2025" },
      { id: 2, name: "Mygod", real: "…….", age: 22, region: "🇵🇹 Portugal", role: "Support / Entry", achievements: [], joined: "2025" },
    ]
  },
];

export default function App() {
  const [view, setView] = useState("teams");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const openTeam = (team) => { setSelectedTeam(team); setSelectedPlayer(null); setView("team"); };
  const openPlayer = (player) => { setSelectedPlayer(player); setView("player"); };
  const goBack = () => {
    if (view === "player") { setView("team"); setSelectedPlayer(null); }
    else { setView("teams"); setSelectedTeam(null); }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0c0c0c; color: #f0f0f0; font-family: 'DM Sans', sans-serif; min-height: 100vh; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .card { transition: transform 0.2s, box-shadow 0.2s; }
        .card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(230,57,70,0.15); }
        .player-row { transition: background 0.15s; }
        .player-row:hover { background: rgba(230,57,70,0.07) !important; cursor: pointer; }
        .back-btn:hover { color: #e63946 !important; }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#0c0c0c" }}>
        {/* Header */}
        <div style={{ borderBottom: "1px solid #1a1a1a", padding: "0 32px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {view !== "teams" && (
                <button onClick={goBack} className="back-btn" style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 13, fontFamily: "inherit", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: 6, transition: "color 0.2s", marginRight: 8 }}>
                  ← Back
                </button>
              )}
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: "0.15em", color: "#fff" }}>ESPORTS</span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: "0.15em", color: "#e63946" }}>ROSTER</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#e63946", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#e63946", display: "inline-block", animation: "pulse 2s infinite" }} />
              Live Season
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 32px", animation: "fadeUp 0.4s ease" }}>

          {/* TEAMS VIEW */}
          {view === "teams" && (
            <div>
              <div style={{ marginBottom: 36 }}>
                <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, letterSpacing: "0.1em", lineHeight: 1 }}>TEAMS</h1>
                <p style={{ color: "#555", fontSize: 14, marginTop: 6 }}>{TEAMS.length} registered teams · Season 4</p>
              </div>
              <div style={{ display: "grid", gap: 16 }}>
                {TEAMS.map(team => (
                  <div key={team.id} className="card" onClick={() => openTeam(team)} style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 6, padding: "24px 28px", cursor: "pointer", borderLeft: `3px solid ${team.color}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                        <div style={{ width: 52, height: 52, borderRadius: 4, background: team.color + "18", border: `1px solid ${team.color}33`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: "0.1em", color: team.color }}>
                          {team.tag}
                        </div>
                        <div>
                          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, letterSpacing: "0.1em" }}>{team.name}</div>
                          <div style={{ fontSize: 12, color: "#555", marginTop: 2 }}>{team.region} · {team.game} · Est. {team.founded}</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: "#e63946" }}>{team.wins}</div>
                          <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" }}>Wins</div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: "#444" }}>{team.losses}</div>
                          <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" }}>Losses</div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: "#fff" }}>{team.players.length}</div>
                          <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" }}>Players</div>
                        </div>
                        <div style={{ color: "#333", fontSize: 18 }}>→</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TEAM VIEW */}
          {view === "team" && selectedTeam && (
            <div>
              <div style={{ marginBottom: 36, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 11, color: "#e63946", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>{selectedTeam.region} · {selectedTeam.game}</div>
                  <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56, letterSpacing: "0.1em", lineHeight: 1 }}>{selectedTeam.name}</h1>
                  <p style={{ color: "#444", fontSize: 13, marginTop: 6 }}>Est. {selectedTeam.founded} · {selectedTeam.players.length} players</p>
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                  {[{ l: "Wins", v: selectedTeam.wins, c: "#e63946" }, { l: "Losses", v: selectedTeam.losses, c: "#333" }, { l: "Win Rate", v: Math.round(selectedTeam.wins / (selectedTeam.wins + selectedTeam.losses) * 100) + "%", c: "#fff" }].map(s => (
                    <div key={s.l} style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 4, padding: "14px 20px", textAlign: "center" }}>
                      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 30, color: s.c }}>{s.v}</div>
                      <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ fontSize: 11, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Roster</div>
              <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 6, overflow: "hidden" }}>
                {selectedTeam.players.map((player, i) => (
                  <div key={player.id} className="player-row" onClick={() => openPlayer(player)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: i < selectedTeam.players.length - 1 ? "1px solid #161616" : "none", background: "transparent" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ width: 42, height: 42, borderRadius: 3, background: "#e63946" + "18", border: "1px solid #e6394633", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: "#e63946" }}>
                        {player.name[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: "0.03em" }}>{player.name}</div>
                        <div style={{ fontSize: 12, color: "#555", marginTop: 2 }}>{player.real}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                      <div style={{ fontSize: 12, color: "#888" }}>{player.region}</div>
                      <div style={{ background: "#e63946" + "18", border: "1px solid #e6394633", borderRadius: 2, padding: "3px 10px", fontSize: 11, color: "#e63946", letterSpacing: "0.1em" }}>{player.role}</div>
                      <div style={{ color: "#333", fontSize: 16 }}>→</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PLAYER VIEW */}
          {view === "player" && selectedPlayer && (
            <div style={{ animation: "fadeUp 0.3s ease" }}>
              <div style={{ display: "flex", gap: 28, alignItems: "flex-start", marginBottom: 40, flexWrap: "wrap" }}>
                <div style={{ width: 80, height: 80, borderRadius: 6, background: "#e6394618", border: "2px solid #e63946", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: "#e63946", flexShrink: 0 }}>
                  {selectedPlayer.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#e63946", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>{selectedPlayer.role}</div>
                  <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52, letterSpacing: "0.1em", lineHeight: 1 }}>{selectedPlayer.name}</h1>
                  <div style={{ fontSize: 14, color: "#555", marginTop: 6 }}>{selectedPlayer.real} · Joined {selectedPlayer.joined}</div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginBottom: 32 }}>
                {[
                  { label: "Real Name", value: selectedPlayer.real },
                  { label: "Age", value: selectedPlayer.age + " years old" },
                  { label: "Region", value: selectedPlayer.region },
                  { label: "Role", value: selectedPlayer.role },
                ].map(s => (
                  <div key={s.label} style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 4, padding: "16px 18px" }}>
                    <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>{s.label}</div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>{s.value}</div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: 11, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14 }}>Achievements</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {selectedPlayer.achievements.map((a, i) => (
                  <div key={i} style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 4, padding: "14px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ color: "#e63946", fontSize: 16 }}>🏆</span>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

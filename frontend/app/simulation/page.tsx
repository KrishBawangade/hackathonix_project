"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Play,
  StopCircle,
  RadioTower,
  Bug,
  ShieldAlert,
  Radar
} from "lucide-react";

export default function SimulationPage() {

  const [simulation, setSimulation] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:5000/simulation";

  async function fetchStatus() {
    try {
      const res = await axios.get(`${API}/status`);
      setSimulation(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function startAttack(type: string) {

    setLoading(true);

    try {

      if (type === "ddos")
        await axios.post(`${API}/start-ddos`);

      if (type === "port-scan")
        await axios.post(`${API}/start-port-scan`);

      if (type === "brute-force")
        await axios.post(`${API}/start-brute-force`);

      fetchStatus();

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  async function stopAttack() {

    try {
      await axios.post(`${API}/stop`);
      fetchStatus();
    } catch (err) {
      console.error(err);
    }

  }

  useEffect(() => {

    fetchStatus();

    const interval = setInterval(() => {
      fetchStatus();
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-white">
        Network Simulation Center
      </h1>


      {/* ================= STATUS METRICS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Metric
          title="Active Attack"
          value={simulation?.attackType || "None"}
          color="text-red-400"
        />

        <Metric
          title="Attack Status"
          value={simulation?.running ? "Running" : "Idle"}
          color={simulation?.running ? "text-red-400" : "text-green-400"}
        />

        <Metric
          title="Target Device"
          value={simulation?.target || "N/A"}
          color="text-cyan-400"
        />

      </div>


      {/* ================= ATTACK CONTROLS ================= */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <AttackCard
          icon={<RadioTower className="text-cyan-400"/>}
          title="DDoS Attack"
          description="Floods the network with massive traffic requests."
          action={() => startAttack("ddos")}
        />

        <AttackCard
          icon={<Radar className="text-yellow-400"/>}
          title="Port Scan Attack"
          description="Simulates attacker scanning open ports on servers."
          action={() => startAttack("port-scan")}
        />

        <AttackCard
          icon={<Bug className="text-red-400"/>}
          title="Brute Force Attack"
          description="Simulates repeated login attempts against authentication systems."
          action={() => startAttack("brute-force")}
        />

      </div>


      {/* ================= CONTROL PANEL ================= */}

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex justify-between items-center">

        <div>

          <p className="text-slate-400 text-sm">
            Simulation Engine
          </p>

          <h2 className="text-xl text-white font-semibold">
            {simulation?.running ? "Attack Running" : "System Idle"}
          </h2>

        </div>

        <button
          onClick={stopAttack}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2 text-white"
        >
          <StopCircle size={16}/>
          Stop Attack
        </button>

      </div>


      {/* ================= EVENT LOG ================= */}

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

        <h3 className="text-lg font-semibold text-white mb-4">
          Simulation Event Log
        </h3>

        {simulation?.logs?.length === 0 ? (

          <p className="text-slate-400">
            No events yet.
          </p>

        ) : (

          <div className="space-y-3">

            {simulation?.logs?.map((log: string, i: number) => (

              <div
                key={i}
                className="bg-slate-800 p-3 rounded-lg text-sm text-slate-300"
              >
                {log}
              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );
}


function Metric({title,value,color}:any){

  return(

    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className={`text-2xl font-bold ${color}`}>
        {value}
      </h2>

    </div>

  )

}


function AttackCard({icon,title,description,action}:any){

  return(

    <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4">

      <div className="flex items-center gap-3">

        {icon}

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

      </div>

      <p className="text-slate-400">
        {description}
      </p>

      <button
        onClick={action}
        className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg flex items-center gap-2 text-black font-semibold"
      >
        <Play size={16}/>
        Run Simulation
      </button>

    </div>

  )

}
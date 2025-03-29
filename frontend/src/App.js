import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState("Cargando...");

  useEffect(() => {
    axios
      .get("http://localhost:5000/status")
      .then((response) => {
        setStatus(response.data.status); // Aquí deberías recibir { status: "active" }
      })
      .catch((error) => {
        console.error("Error al obtener el estado:", error);
        setStatus("Error al conectar con el backend");
      });
  }, []);

  return (
    <div>
      <h1>Estado del backend: {status}</h1>
    </div>
  );
}

export default App;


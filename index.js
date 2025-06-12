import { useState } from 'react';

const blocks = [
  { name: "Building A - Management", ip: "192.168.1.10" },
  { name: "Building A - HR", ip: "192.168.2.0" },
  { name: "Building A - Finance", ip: "192.168.3.0" },
  { name: "Building A - Business", ip: "192.168.4.0" },
  { name: "Building B - E&C", ip: "192.168.5.0" },
  { name: "Building B - Art & Design", ip: "192.168.6.0" },
  { name: "Building C - Student Lab", ip: "192.168.7.0" },
  { name: "Building C - Web Server", ip: "192.168.8.0" },
  { name: "Building C - FTP Server", ip: "192.168.9.0" },
  { name: "Smaller Campus - Staff", ip: "192.168.9.0" },
  { name: "Smaller Campus - Students", ip: "192.168.10.0" },
  { name: "Small Building", ip: "192.168.11.0" },
];

export default function Home() {
  const [selectedBlock, setSelectedBlock] = useState(null);

  return (
    <div className="container">
      <h1>University Network Blocks</h1>
      <div className="grid">
        {blocks.map((block, idx) => (
          <div key={idx} className="card" onClick={() => setSelectedBlock(block)}>
            {block.name}
          </div>
        ))}
      </div>

      {selectedBlock && (
        <div className="modal" onClick={() => setSelectedBlock(null)}>
          <div className="modal-content">
            <h2>{selectedBlock.name}</h2>
            <p>IP Address: {selectedBlock.ip}</p>
            <button onClick={() => setSelectedBlock(null)}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          padding: 2rem;
          font-family: sans-serif;
          text-align: center;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 2rem;
        }
        .card {
          padding: 1.5rem;
          background: #f5f5f5;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.3s;
        }
        .card:hover {
          background: #e0e0e0;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

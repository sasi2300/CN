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

const grid = document.getElementById("blocks");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("block-title");
const modalIp = document.getElementById("block-ip");
const modalClose = document.getElementById("modal-close");

blocks.forEach(block => {
  const div = document.createElement("div");
  div.className = "block";
  div.innerText = block.name;
  div.onclick = () => {
    modalTitle.innerText = block.name;
    modalIp.innerText = `IP Address: ${block.ip}`;
    modal.style.display = "flex";
  };
  grid.appendChild(div);
});

modalClose.onclick = () => {
  modal.style.display = "none";
};

window.onclick = function(e) {
  if (e.target === modal) modal.style.display = "none";
};

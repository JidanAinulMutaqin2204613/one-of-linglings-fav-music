const lyrics = [
  "SUBMIT TO ME",
  "COME GET DOWN ON ONE KNEE",
  "I'M YOUR SAVIOR AND I'LL GIVE YOU EVERYTHING THAT YOU NEED",
  "(THAT YOU NEED)",
  "SUBMIT TO ME \nCOME GET DOWN ON ONE KNEE",
  "I'M YOUR SAVIOR AND ",
  "I'LL GIVE YOU EVERYTHING THAT YOU NEED"
];

const container = document.getElementById("lyrics-container");
const playBtn = document.getElementById("playBtn");
const music = document.getElementById("bg-music");

let index = 0;

function showLine() {
  if (index < lyrics.length) {
    const line = document.createElement("div");
    line.classList.add("lyric-line");
    line.textContent = lyrics[index];
    container.appendChild(line);

    setTimeout(() => line.classList.add("show"), 100);
    setTimeout(() => {
      line.classList.remove("show");
      setTimeout(() => {
        container.removeChild(line);
        index++;
        showLine(); // tampilkan baris berikutnya
      }, 1000);
    }, 2500);
  } else {
    // Reset dan ulang dari awal setelah semua lirik tampil
    index = 0;
    setTimeout(() => showLine(), 2000); // delay 2 detik sebelum ulang
  }
}

// Jalankan hanya setelah tombol Play diklik
playBtn.addEventListener("click", () => {
  music.play();         // mainkan musik
  playBtn.style.display = "none"; // sembunyikan tombol
  showLine();           // tampilkan lirik
});

// Partikel tetap langsung jalan saat load
window.onload = () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#ff4d6d" },
      shape: {
        type: "circle",
      },
      opacity: { value: 1 },
      size: { value: 6, random: true },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    }
  });
};


function createRain() {
  const rainContainer = document.querySelector('.rain');
  const numberOfDrops = 100;

  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.classList.add('rain-drop');
    drop.style.left = Math.random() * window.innerWidth + 'px';
    drop.style.animationDuration = 0.5 + Math.random() * 1.5 + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    rainContainer.appendChild(drop);
  }
}

window.onload = () => {
  // Inisialisasi partikel
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#ff4d6d" },
      shape: { type: "circle" },
      opacity: { value: 1 },
      size: { value: 6, random: true },
      move: { enable: true, speed: 1.5, direction: "none", out_mode: "out" }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    }
  });

  // Inisialisasi hujan
  createRain();
};

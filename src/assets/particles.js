const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const genRanHex = () => {
  let h = 360 * Math.random(), s = 50 + 50 * Math.random(), l = 80 + 10 * Math.random();
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

const getRandomHoverMode = () => {
  let random = randomIntFromInterval(0,1);
  if (random === 0) return "grab"
  if (random === 1) return "repulse"
}

const getRandomShape = () => {
  let random = randomIntFromInterval(0,4);
  if (random === 0) return "circle"
  if (random === 1) return "edge"
  if (random === 2) return "triangle"
  if (random === 3) return "polygon"
  if (random === 4) return "star"
}

const getRandomDirection = () => {
  let random = randomIntFromInterval(0,3);
  if (random === 0) return "top-right"
  if (random === 1) return "top-left"
  if (random === 2) return "bottom-right"
  if (random === 3) return "bottom-left"
}

const color = genRanHex();

const config = {
    "particles": {
      "number": {
        "value": randomIntFromInterval(80,85),
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": color
      },
      "shape": {
        "type": getRandomShape(),
        "stroke": {
          "width": 0,
          "color": color
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": Math.random() < 0.5,
          "speed": 1,
          "opacity_min": 0.4,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": Math.random() < 0.5,
        "distance": 150,
        "color": color,
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": randomIntFromInterval(5,7),
        "direction": getRandomDirection(),
        "random": Math.random() < 0.5,
        "straight": false,
        "out_mode": "out",
        "bounce": Math.random() < 0.5,
        "attract": {
          "enable": Math.random() < 0.5,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 659.3406593406594,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  } 

  export default config;
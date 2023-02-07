import { useEffect, useState, useRef } from "react";

const Sketch = async (p) => {
  var cols;
  var rows;
  var resX;
  var resY;
  var beta;
  var goldenRatio;

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    var resolution = (window.innerWidth * 1.0) / (window.innerHeight * 1.0);

    p.colorMode(p.HSB, 1.0, 1.0, 1.0, 1.0);
    cols = 60;
    rows = Math.round(cols / resolution);
    resX = window.innerWidth / cols;
    resY = window.innerHeight / rows;
    beta = 0;
    goldenRatio = 1 + p.sqrt(5) / 2;
  };

  p.draw = () => {
    p.background(0, 0, 0);

    var gamma = 0;
    for (var i = 0; i < cols; i++) {
      var eta = 0;
      for (var j = 0; j < rows; j++) {
        var sinAngle =
          (beta + p.sin(i * 0.1 + gamma) + p.sin(j * 0.1 + eta)) * p.HALF_PI;
        var hue = p.noise(
          (i + gamma) * 0.25,
          (j + eta) * 0.15,
          p.frameCount * 0.01
        );
        var x = i * resX;
        var y = j * resY;
        var center = p.createVector(x + resX / 2, y + resY / 2);
        var turbulence = p.createVector(
          center.x + (p.cos(sinAngle) * resX) / 2,
          center.y + (p.sin(sinAngle) * resX) / 2
        );

        p.noStroke();
        p.fill(hue, 0.5 + hue, hue, 1.0);
        p.ellipse(
          turbulence.x,
          turbulence.y,
          resX * p.pow(hue, 2.5),
          resY * p.pow(hue, 2.5)
        );
        eta += 0.15;
      }
      gamma += 0.15;
    }
    beta += goldenRatio * 0.01;
  };
};

const BrightLights = () => {
  const ref = useRef(null);
  const [set, getSet] = useState(false);

  useEffect(() => {
    if (!set) setup();
  }, [set]);

  async function setup() {
    getSet(true);
    const p5 = (await import("p5")).default;
    new p5(Sketch, ref.current);
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        ref={ref}
        style={{
          // opacity: set ? 0.6 : 0,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "red",
          backdropFilter: "blur(10px)",
        }}
      />
    </div>
  );
};

export default BrightLights;

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, Container } from "tsparticles-engine";
import { useCallback } from "react";

const ParticleBg = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "#0d47a1",
        //   },
        // },
        fpsLimit: 120,
        interactivity: {
          events: {
            // onClick: {
            //   enable: true,
            //   mode: "repulse",
            // },
            onHover: {
              enable: true,
              mode: "attract",
            },
            resize: true,
          },
          //   modes: {
          //     push: {
          //       quantity: 4,
          //     },
          //     repulse: {
          //       distance: 20,
          //       duration: 0.1,
          //     },
          //   },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          // links: {
          //   color: "#ffffff",
          //   distance: 150,
          //   enable: true,
          //   opacity: 0.5,
          //   width: 1,
          // },
          // collisions: {
          //   enable: true,
          // },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1440,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: { min: 0.5, max: 1.5 },
          },
        },
      }}
    />
  );
};

export default ParticleBg;

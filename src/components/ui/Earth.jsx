'use client';
import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { cn } from '@/lib/utils';
const Earth = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.4, 0.6509, 1],
  markerColor = [128 / 255, 0 / 255, 128 / 255],
  glowColor = [0.2745, 0.5765, 0.898],
}) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();
    let phi = 0;
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: theta,
      dark: dark,
      scale: scale,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [
        { location: [25.276987,55.296249 ], size: 0.08 }, //dubai
        { location: [51.509865,-0.118092 ], size: 0.08 }, //uk
        { location: [28.65195,77.23149 ], size: 0.08 }, //india
        { location: [38.9072,77.0369 ], size: 0.08 }, //us
        { location: [45.4215,75.6972 ], size: 0.08 }, //canada
        { location: [52.5200,13.4050 ], size: 0.08 }, //genrmany
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });
    return () => {
      globe.destroy();
    };
  }, []);
  return (
    <div
      className={cn(
        'flex items-center justify-center z-[10] w-full max-w-[400px] mx-auto',
        className
      )}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          aspectRatio: '1',
        }}
      />
    </div>
  );
};
export default Earth;

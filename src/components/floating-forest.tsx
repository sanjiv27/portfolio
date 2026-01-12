"use client";

import { useState, useEffect } from "react";


interface ForestCreature {
  id: number;
  type: "tiger" | "monkey" | "snowflake" | "bear";
  x: number;
  y: number;
  direction: number;
  speed: number;
  size: number;
  color: string;
  opacity: number;
  animationPhase: number;
}

const tigerColors = ["#FF8C00", "#FF7F00", "#FF6347"];
const monkeyColors = ["#8B4513", "#A0522D", "#CD853F"];
const bearColors = ["#654321", "#8B4513", "#A0522D"];

interface FloatingForestProps {
  isActive: boolean;
}

export const FloatingForest = ({ isActive }: FloatingForestProps) => {
  const [creatures, setCreatures] = useState<ForestCreature[]>([]);

  useEffect(() => {
    if (!isActive) {
      setCreatures([]);
      return;
    }

    // Create initial creatures
    const initialCreatures: ForestCreature[] = Array.from({ length: 35 }, (_, i) => {
      const creatureType = i < 6 ? "tiger" : i < 9 ? "monkey" : i < 12 ? "bear" : "snowflake";
      return {
        id: i,
        type: creatureType,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        direction: Math.random() * 360,
        speed: creatureType === "snowflake" ? 0.3 + Math.random() * 0.5 : 
               creatureType === "bear" ? 0.3 + Math.random() * 0.7 :
               0.5 + Math.random() * 1,
        size: creatureType === "snowflake" ? 8 + Math.random() * 12 : 
              creatureType === "bear" ? 30 + Math.random() * 20 :
              20 + Math.random() * 25,
        color: creatureType === "tiger" 
          ? tigerColors[Math.floor(Math.random() * tigerColors.length)]
          : creatureType === "monkey"
          ? monkeyColors[Math.floor(Math.random() * monkeyColors.length)]
          : creatureType === "bear"
          ? bearColors[Math.floor(Math.random() * bearColors.length)]
          : "#FFFFFF",
        opacity: creatureType === "snowflake" ? 0.4 + Math.random() * 0.4 : 0.7 + Math.random() * 0.3,
        animationPhase: Math.random() * Math.PI * 2,
      };
    });

    setCreatures(initialCreatures);

    // Animation loop
    const animate = () => {
      if (!isActive) return;

      setCreatures(prev => prev.map(creature => {
        const radians = (creature.direction * Math.PI) / 180;
        let newX = creature.x + Math.cos(radians) * creature.speed;
        let newY = creature.y + Math.sin(radians) * creature.speed;
        let newDirection = creature.direction;

        // Special behavior for snowflakes (fall down)
        if (creature.type === "snowflake") {
          newY = creature.y + creature.speed;
          newX = creature.x + Math.sin(creature.animationPhase) * 0.5;
          
          // Reset snowflake at top when it reaches bottom
          if (newY > window.innerHeight + 20) {
            newY = -20;
            newX = Math.random() * window.innerWidth;
          }
        } else {
          // Bounce off walls for tigers and monkeys
          if (newX <= 0 || newX >= window.innerWidth) {
            newDirection = 180 - newDirection;
            newX = Math.max(0, Math.min(window.innerWidth, newX));
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newDirection = -newDirection;
            newY = Math.max(0, Math.min(window.innerHeight, newY));
          }

          // Random direction changes
          if (Math.random() < 0.02) {
            newDirection += (Math.random() - 0.5) * 60;
          }
        }

        return {
          ...creature,
          x: newX,
          y: newY,
          direction: newDirection,
          animationPhase: creature.animationPhase + 0.1,
        };
      }));

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isActive]);

  const renderCreature = (creature: ForestCreature) => {
    const style = {
      position: "fixed" as const,
      left: `${creature.x}px`,
      top: `${creature.y}px`,
      transform: `translate(-50%, -50%) rotate(${creature.direction}deg)`,
      opacity: creature.opacity,
      zIndex: 1000,
      pointerEvents: "none" as const,
    };

    if (creature.type === "tiger") {
      return (
        <div key={creature.id} style={style}>
          <svg
            width={creature.size}
            height={creature.size * 0.7}
            viewBox="0 0 60 42"
            fill={creature.color}
          >
            {/* Tiger body */}
            <ellipse cx="30" cy="25" rx="25" ry="10" fill={creature.color} />
            {/* Tiger head */}
            <ellipse cx="45" cy="18" rx="12" ry="10" fill={creature.color} />
            {/* Tiger stripes on body */}
            <ellipse cx="20" cy="25" rx="2" ry="8" fill="#000" />
            <ellipse cx="25" cy="25" rx="2" ry="8" fill="#000" />
            <ellipse cx="30" cy="25" rx="2" ry="8" fill="#000" />
            <ellipse cx="35" cy="25" rx="2" ry="8" fill="#000" />
            <ellipse cx="40" cy="25" rx="2" ry="8" fill="#000" />
            {/* Tiger stripes on head */}
            <ellipse cx="42" cy="15" rx="1" ry="6" fill="#000" />
            <ellipse cx="46" cy="15" rx="1" ry="6" fill="#000" />
            <ellipse cx="50" cy="15" rx="1" ry="6" fill="#000" />
            {/* Tiger legs */}
            <ellipse cx="15" cy="32" rx="3" ry="8" fill={creature.color} />
            <ellipse cx="22" cy="32" rx="3" ry="8" fill={creature.color} />
            <ellipse cx="38" cy="32" rx="3" ry="8" fill={creature.color} />
            <ellipse cx="45" cy="32" rx="3" ry="8" fill={creature.color} />
            {/* Tiger tail */}
            <ellipse cx="8" cy="22" rx="8" ry="4" fill={creature.color} />
            <ellipse cx="4" cy="20" rx="2" ry="3" fill="#000" />
            <ellipse cx="8" cy="22" rx="2" ry="3" fill="#000" />
            {/* Tiger ears */}
            <ellipse cx="40" cy="10" rx="3" ry="4" fill={creature.color} />
            <ellipse cx="50" cy="10" rx="3" ry="4" fill={creature.color} />
            <ellipse cx="40" cy="10" rx="1" ry="2" fill="#000" />
            <ellipse cx="50" cy="10" rx="1" ry="2" fill="#000" />
            {/* Tiger eyes */}
            <ellipse cx="42" cy="16" rx="2" ry="3" fill="white" />
            <ellipse cx="48" cy="16" rx="2" ry="3" fill="white" />
            <ellipse cx="42" cy="16" rx="1" ry="2" fill="black" />
            <ellipse cx="48" cy="16" rx="1" ry="2" fill="black" />
            {/* Tiger nose */}
            <ellipse cx="52" cy="20" rx="1" ry="1.5" fill="black" />
          </svg>
        </div>
      );
    } else if (creature.type === "bear") {
      return (
        <div key={creature.id} style={style}>
          <svg
            width={creature.size}
            height={creature.size * 0.8}
            viewBox="0 0 50 40"
            fill={creature.color}
          >
            {/* Bear body */}
            <ellipse cx="25" cy="25" rx="20" ry="12" fill={creature.color} />
            {/* Bear head */}
            <ellipse cx="35" cy="15" rx="10" ry="8" fill={creature.color} />
            {/* Bear ears */}
            <circle cx="30" cy="8" r="4" fill={creature.color} />
            <circle cx="40" cy="8" r="4" fill={creature.color} />
            <circle cx="30" cy="8" r="2" fill="#8B4513" />
            <circle cx="40" cy="8" r="2" fill="#8B4513" />
            {/* Bear legs */}
            <ellipse cx="12" cy="32" rx="4" ry="6" fill={creature.color} />
            <ellipse cx="20" cy="32" rx="4" ry="6" fill={creature.color} />
            <ellipse cx="30" cy="32" rx="4" ry="6" fill={creature.color} />
            <ellipse cx="38" cy="32" rx="4" ry="6" fill={creature.color} />
            {/* Bear paws */}
            <ellipse cx="12" cy="36" rx="3" ry="2" fill="#000" />
            <ellipse cx="20" cy="36" rx="3" ry="2" fill="#000" />
            <ellipse cx="30" cy="36" rx="3" ry="2" fill="#000" />
            <ellipse cx="38" cy="36" rx="3" ry="2" fill="#000" />
            {/* Bear snout */}
            <ellipse cx="42" cy="18" rx="4" ry="3" fill="#DEB887" />
            {/* Bear eyes */}
            <circle cx="32" cy="13" r="2" fill="white" />
            <circle cx="38" cy="13" r="2" fill="white" />
            <circle cx="32" cy="13" r="1" fill="black" />
            <circle cx="38" cy="13" r="1" fill="black" />
            {/* Bear nose */}
            <ellipse cx="44" cy="17" rx="1.5" ry="1" fill="black" />
          </svg>
        </div>
      );
    } else if (creature.type === "monkey") {
      return (
        <div key={creature.id} style={style}>
          <svg
            width={creature.size}
            height={creature.size}
            viewBox="0 0 30 35"
            fill={creature.color}
          >
            {/* Monkey body */}
            <ellipse cx="15" cy="20" rx="8" ry="10" />
            {/* Monkey head */}
            <circle cx="15" cy="10" r="7" />
            {/* Monkey arms */}
            <ellipse cx="8" cy="18" rx="3" ry="8" />
            <ellipse cx="22" cy="18" rx="3" ry="8" />
            {/* Monkey legs */}
            <ellipse cx="12" cy="28" rx="3" ry="6" />
            <ellipse cx="18" cy="28" rx="3" ry="6" />
            {/* Monkey tail */}
            <path d="M7 25 Q2 30 5 35" stroke={creature.color} strokeWidth="3" fill="none" />
            {/* Monkey face */}
            <ellipse cx="15" cy="12" rx="5" ry="4" fill="#DEB887" />
            {/* Monkey eyes */}
            <circle cx="12" cy="9" r="1.5" fill="white" />
            <circle cx="18" cy="9" r="1.5" fill="white" />
            <circle cx="12" cy="9" r="0.8" fill="black" />
            <circle cx="18" cy="9" r="0.8" fill="black" />
            {/* Monkey ears */}
            <circle cx="9" cy="7" r="2" fill={creature.color} />
            <circle cx="21" cy="7" r="2" fill={creature.color} />
          </svg>
        </div>
      );
    } else {
      // Snowflake
      return (
        <div key={creature.id} style={style}>
          <svg
            width={creature.size}
            height={creature.size}
            viewBox="0 0 20 20"
            fill={creature.color}
          >
            {/* Snowflake pattern */}
            <g stroke={creature.color} strokeWidth="1" fill="none">
              <line x1="10" y1="2" x2="10" y2="18" />
              <line x1="2" y1="10" x2="18" y2="10" />
              <line x1="5" y1="5" x2="15" y2="15" />
              <line x1="15" y1="5" x2="5" y2="15" />
              {/* Snowflake decorations */}
              <line x1="8" y1="4" x2="12" y2="4" />
              <line x1="8" y1="16" x2="12" y2="16" />
              <line x1="4" y1="8" x2="4" y2="12" />
              <line x1="16" y1="8" x2="16" y2="12" />
            </g>
          </svg>
        </div>
      );
    }
  };

  return (
    <>
      {/* Floating Forest Creatures */}
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {creatures.map(renderCreature)}
        </div>
      )}
    </>
  );
};
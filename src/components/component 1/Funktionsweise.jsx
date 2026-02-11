import React from "react";

export function Funktionsweise() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      
      <rect width="800" height="500" fill="transparent" />

      <defs>
       
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        </pattern>

      
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

    
        <linearGradient id="signalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: "#EF7B00", stopOpacity: 0 }}
          />
          <stop
            offset="50%"
            style={{ stopColor: "#EF7B00", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#EF7B00", stopOpacity: 0 }}
          />
        </linearGradient>
      </defs>

      <rect width="800" height="500" fill="url(#grid)" />

      <g transform="translate(150, 250)">
        <circle cx="0" cy="0" r="15" fill="#EF7B00">
          <animate
            attributeName="r"
            values="15;18;15"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0.8;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="0"
          y="35"
          fontFamily="Arial, sans-serif"
          fontSize="14"
          fill="#EF7B00"
          textAnchor="middle"
          letterSpacing="2"
          fontWeight="bold"
        >
          SENDER
        </text>
      </g>

      <path
        d="M 150 250 Q 400 150 550 250"
        fill="none"
        stroke="url(#signalGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0"
        filter="url(#glow)"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0, 500; 500, 0; 0, 500"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="4s"
          repeatCount="indefinite"
          keyTimes="0;0.5;1"
        />
      </path>

      <g transform="translate(550, 250)">
        
        <circle cx="40" cy="-60" r="10" fill="#9ca3af" opacity="0.5" />
        <circle cx="60" cy="30" r="10" fill="#9ca3af" opacity="0.5" />
        <circle cx="-30" cy="50" r="10" fill="#9ca3af" opacity="0.5" />

        <g filter="url(#glow)">
          <circle cx="0" cy="0" r="15" fill="#162A6B">
            
            <animate
              attributeName="fill"
              values="#555555;#27357e;#555555"
              dur="4s"
              begin="1.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="15;18;15"
              dur="4s"
              begin="1.8s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        
        <text
          x="0"
          y="35"
          fontFamily="Arial, sans-serif"
          fontSize="14"
          fill="#162A6B"
          textAnchor="middle"
          letterSpacing="2"
          fontWeight="bold"
        >
          <animate
            attributeName="fill"
            values="#555555;#27357e;#555555"
            dur="4s"
            begin="1.8s"
            repeatCount="indefinite"
          />
          EMPFÄNGER
        </text>
      </g>


      <line
        x1="165"
        y1="250"
        x2="535"
        y2="250"
        stroke="#c07a50"
        strokeWidth="2"
        strokeDasharray="370"
        strokeDashoffset="370"
        filter="url(#glow)"
        opacity="0.6"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="370; 0; 370"
          dur="4s"
          begin="1.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0; 0.6; 0"
          dur="4s"
          begin="1.8s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
}
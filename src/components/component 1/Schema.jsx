import React from "react";

export function Schema() {
  return (
    <svg
      viewBox="0 0 800 500"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }} 
    >
      <rect width="800" height="500" fill="#f6f7fa" opacity="0.1" /> 
  

      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#222222"
            strokeWidth="1"
            opacity="0.1" 
          />
        </pattern>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "rgb(100,100,100)", stopOpacity: 0.8 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(0,0,0)", stopOpacity: 0 }}
          />
        </linearGradient>
      </defs>


      <rect width="800" height="500" fill="url(#grid)" />

 
      <g transform="translate(200, 150)">
        <path d="M 0 0 L -40 120 L 40 120 Z" fill="url(#grad1)" opacity="0.3" />
        <circle cx="0" cy="0" r="12" fill="#555555" />
      </g>


      <g transform="translate(600, 200)">
        <path d="M 0 0 L -30 100 L 50 100 Z" fill="url(#grad1)" opacity="0.3" />
        <circle cx="0" cy="0" r="12" fill="#555555" />
      </g>


      <g transform="translate(500, 380)">
        <path d="M 0 0 L -50 110 L 30 110 Z" fill="url(#grad1)" opacity="0.3" />
        <circle cx="0" cy="0" r="12" fill="#555555" />
      </g>


      <g transform="translate(150, 400)">
        <path d="M 0 0 L -40 100 L 40 100 Z" fill="url(#grad1)" opacity="0.3" />
        <circle cx="0" cy="0" r="12" fill="#555555" />
      </g>

      <g transform="translate(400, 250)">
        <circle
          cx="0"
          cy="0"
          r="60"
          fill="none"
          stroke="#EF7B00" 
          strokeWidth="2"
          opacity="0.8"
        >
          <animate
            attributeName="r"
            from="0"
            to="250"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>


        <circle
          cx="0"
          cy="0"
          r="60"
          fill="none"
          stroke="#EF7B00"
          strokeWidth="1"
          opacity="0.5"
        >
          <animate
            attributeName="r"
            from="0"
            to="250"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>


        <circle cx="0" cy="0" r="15" fill="#EF7B00" />

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
          YOU
        </text>
      </g>
    </svg>
  );
}
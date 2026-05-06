
export default function Logo() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative flex items-center justify-center">
        {/* Animated Glow effect on hover */}
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
        
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
        >
          {/* Nest Base - Overlapping strokes */}
          <path
            d="M5 25C5 25 10 32 20 32C30 32 35 25 35 25"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-primary/60"
          />
          <path
            d="M8 28C8 28 12 34 20 34C28 34 32 28 32 28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-secondary/60"
          />
          
          {/* Basket/Nest "Shell" */}
          <path
            d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20V24H10V20Z"
            fill="url(#logo-gradient)"
            className="drop-shadow-md"
          />
          
          {/* Handle - Nest Arch */}
          <path
            d="M14 10C14 6.68629 16.6863 4 20 4C23.3137 4 26 6.68629 26 10"
            stroke="url(#logo-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient
              id="logo-gradient"
              x1="10"
              y1="4"
              x2="30"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-primary)" />
              <stop offset="1" stopColor="var(--color-secondary)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <span
        className="font-bold tracking-tight text-2xl bg-clip-text text-transparent 
        bg-linear-to-r from-primary via-secondary to-primary bg-[length:200%_auto]
        animate-gradient-x transition-all duration-300 group-hover:tracking-wider"
      >
        ShopNest
      </span>
    </div>
  );
}

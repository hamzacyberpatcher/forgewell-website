export const AnimatedIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "shield":
      return (
        <div className="relative w-5 h-5 flex items-center justify-center">
          <style>{`
            @keyframes scan {
              0% { transform: translateY(-2px); opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              100% { transform: translateY(20px); opacity: 0; }
            }
            .group:hover .animate-scan {
              animation: scan 1.5s linear infinite;
            }
          `}</style>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-primary opacity-0 animate-scan z-10 shadow-[0_2px_4px_rgba(0,100,255,0.5)]" />

          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 relative z-0">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      );

    case "gear":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          className="w-5 h-5 transition-transform duration-500 ease-mechanical group-hover:rotate-90">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );

    case "bulb":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 relative">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 18h6M10 21h4M9 15c0-1.5-1.5-2.5-2.5-4a5.5 5.5 0 1 1 11 0c-1 1.5-2.5 2.5-2.5 4v3H9v-3z"
          />
          <path
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 1v2M20 4l-1.5 1.5M23 10h-2M4 4l1.5 1.5M1 10h2"
          />
        </svg>
      );

    case "wrench":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 origin-center">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );

    default:
      return null;
  }
};
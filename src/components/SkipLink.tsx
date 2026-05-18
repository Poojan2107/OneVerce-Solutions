export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:bg-white focus:text-black focus:rounded-xl focus:font-bold focus:uppercase focus:tracking-widest focus:text-xs"
    >
      Skip to main content
    </a>
  );
}

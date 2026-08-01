export default function Logo() {
  return (
    <div className="flex items-center gap-3 px-5 py-6">
      <img
        src="/logo.png"
        alt="PetroTrack"
        className="h-10 w-10"
      />

      <div>
        <h1 className="text-lg font-bold tracking-wide text-white">
          PETROTRACK
        </h1>

        <p className="text-xs text-slate-300">
          Compliance System
        </p>
      </div>
    </div>
  );
}
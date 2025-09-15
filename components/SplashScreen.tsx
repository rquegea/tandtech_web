// components/SplashScreen.tsx

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pb-12 pointer-events-none">
      {/* 1. Usamos la nueva clase font-lora */}
      {/* 2. Quitamos 'uppercase' y escribimos el texto como queremos */}
      <h1 className="text-6xl text-center md:text-8xl font-normal text-white tracking-normal select-none font-cormorant">
        Truco & Trufa
      </h1>
    </div>
  );
}
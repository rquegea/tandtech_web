export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Repsol Card */}
          <div className="group cursor-pointer">
            <div className="relative h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300/80 via-red-400/60 to-pink-400/40">
                {/* Abstract flowing shapes */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl transform rotate-45"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/15 rounded-full blur-lg"></div>
                <div className="absolute top-1/2 right-1/3 w-40 h-20 bg-white/10 rounded-full blur-2xl transform -rotate-12"></div>
              </div>

              {/* Repsol Logo */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-orange-500 rounded"></div>
                </div>
                <div className="text-white">
                  <div className="font-bold text-lg">Repsol</div>
                  <div className="text-sm opacity-80">ENERGY & INDUSTRIAL</div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
              CONFLUENCE OF ENERGIES
            </h3>
          </div>

          {/* YouTube Card */}
          <div className="group cursor-pointer">
            <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
              <img src="/person-wearing-black-youtube-tv-jersey-with-youtub.jpg" alt="YouTube TV jersey" className="w-full h-full object-cover" />

              {/* YouTube Logo */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
                </div>
                <div className="text-white">
                  <div className="font-bold text-lg">YouTube</div>
                  <div className="text-sm opacity-80">TECHNOLOGY</div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
              TAKING THE TUBE OUT OF YOUTUBE
            </h3>
          </div>

          {/* Bank Card */}
          <div className="group cursor-pointer">
            <div className="relative h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-teal-200 via-cyan-300 to-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100/60 via-cyan-200/40 to-blue-100/60">
                {/* Geometric pattern */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 border-4 border-white/40 rounded-lg rotate-45"></div>
                  <div className="absolute inset-2 border-2 border-white/60 rounded rotate-45"></div>
                </div>
              </div>

              {/* Bank Logo */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
                <div className="text-teal-800">
                  <div className="font-bold text-lg">Bank</div>
                  <div className="text-sm opacity-80">FINANCIAL</div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
              YOUR WORLD, YOUR BANK
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between p-4 sm:p-6 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-black text-lg sm:text-xl font-bold tracking-wider">SAFFRON</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto">
          <a
            href="/work"
            className="text-black text-xs font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-black whitespace-nowrap"
          >
            WORK
          </a>
          <a
            href="#"
            className="text-black/60 hover:text-black text-xs font-medium transition-colors duration-200 whitespace-nowrap"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-black/60 hover:text-black text-xs font-medium transition-colors duration-200 whitespace-nowrap hidden sm:block"
          >
            JOURNAL
          </a>
          <a
            href="#"
            className="text-black/60 hover:text-black text-xs font-medium flex items-center gap-1 transition-colors duration-200 whitespace-nowrap"
          >
            CAREERS
            <span className="w-4 h-4 bg-black text-white rounded-full text-[10px] flex items-center justify-center">
              3
            </span>
          </a>
          <a
            href="#"
            className="text-black/60 hover:text-black text-xs font-medium transition-colors duration-200 whitespace-nowrap"
          >
            CONTACT
          </a>
          <a
            href="#"
            className="text-black/60 hover:text-black text-xs font-medium transition-colors duration-200 whitespace-nowrap hidden lg:block"
          >
            SEARCH
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-8 sm:py-12">
        {/* Work Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 lg:mb-16 gap-6 lg:gap-4">
          <div className="flex items-baseline gap-2 sm:gap-4">
            <h1 className="text-6xl sm:text-8xl lg:text-[120px] font-bold text-black leading-none tracking-tight">
              WORK
            </h1>
            <span className="text-lg sm:text-2xl text-black/60 font-light">57</span>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <span className="text-sm text-black font-medium">FILTER:</span>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <select className="px-3 py-2 sm:px-4 bg-black text-white text-xs sm:text-sm rounded-full border-none outline-none cursor-pointer min-w-[80px]">
                <option>Region</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Asia</option>
              </select>
              <select className="px-3 py-2 sm:px-4 bg-black text-white text-xs sm:text-sm rounded-full border-none outline-none cursor-pointer min-w-[80px]">
                <option>Industry</option>
                <option>Technology</option>
                <option>Energy</option>
                <option>Finance</option>
              </select>
              <select className="px-3 py-2 sm:px-4 bg-black text-white text-xs sm:text-sm rounded-full border-none outline-none cursor-pointer min-w-[80px]">
                <option>Service</option>
                <option>Branding</option>
                <option>Digital</option>
                <option>Strategy</option>
              </select>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* AlphaSense Project */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
              <img
                src="/urban-billboard-advertisement-showing-alphasense-a.jpg"
                alt="AlphaSense billboard advertisement in urban setting"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-lg">AI</span>
                </div>
                <div className="text-white">
                  <div className="text-lg font-semibold">AlphaSense</div>
                  <div className="text-sm opacity-80">TECHNOLOGY</div>
                </div>
              </div>
            </div>
          </div>

          {/* Repsol Project */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-orange-300 to-red-400 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-red-400 to-pink-400 rounded-full blur-2xl opacity-40"></div>
              </div>
              <div className="absolute bottom-6 left-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                </div>
                <div className="text-white">
                  <div className="text-lg font-semibold">Repsol</div>
                  <div className="text-sm opacity-80">ENERGY & INDUSTRIAL</div>
                </div>
              </div>
            </div>
          </div>

          {/* VRT Project */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-56 bg-gray-700 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                  <div className="absolute inset-4 bg-gradient-to-b from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Touché</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold text-sm">VRT</span>
                </div>
                <div className="text-white">
                  <div className="text-lg font-semibold">VRT</div>
                  <div className="text-sm opacity-80">CULTURE & MEDIA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

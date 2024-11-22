import { clubInfo } from '@/data/clubInfo'

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {Object.values(clubInfo.colors.google).map((color, i) => (
                <span key={i} className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
              ))}
            </div>
            <h1 className="text-xl font-bold text-gray-900 ">{clubInfo.shortName}</h1>
          </div>
          {/* <Button variant="ghost" size="icon">
            <IoMenu className="h-6 w-6" />
          </Button> */}
        </div>
      </div>
    </header>
  )
}

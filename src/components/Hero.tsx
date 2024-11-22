import { Button } from '@/components/ui/button';
import { clubInfo } from '@/data/clubInfo';

export function Hero() {
  return (
    <div className='bg-gradient-to-r from-[#4285F4] to-[#0F9D58] text-white py-16'>
      <div className='max-w-4xl mx-auto text-center px-4'>
        <h1 className='text-4xl font-bold mb-4'>{clubInfo.name}</h1>
        <p className='text-xl mb-4'>{clubInfo.semester}</p>
        <p className='text-lg mb-8'>{clubInfo.description}</p>
        {/* <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="secondary"
            onClick={() => window.open(clubInfo.links.gdg, '_blank')}
          >
            Join GDG Community
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.open(clubInfo.links.mason360, '_blank')}
          >
            Mason360 Page
          </Button>
        </div> */}
        <div className='flex justify-center  space-x-6 mt-8'>
          {Object.entries(clubInfo.links).map(([platform, url]) => (
            <Button
              key={platform}
              variant='secondary'
              onClick={() => window.open(url, '_blank')}
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

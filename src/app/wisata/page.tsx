import Image from 'next/image';
import Link from 'next/link';

export default function WisataPage() {
  return (
    <div>
      <div className="relative bg-black">
        <div className="bg-gray-900">
          <div className="relative isolate overflow-hidden pt-14">
            <Image 
              src="/assets/page-1.jpeg" 
              alt="Background"
              fill
              className="absolute inset-0 -z-10 size-full object-cover"
            />
            <div className="bg-black opacity-[.7] absolute inset-0 -z-10 size-full"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 z-20">
              <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                  <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">Wisata Kabupaten Pemalang</h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">Jelajahi keindahan alam dan budaya Kabupaten Pemalang. Temukan berbagai destinasi wisata menarik yang menawarkan pengalaman tak terlupakan bagi para pengunjung.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Destinasi Wisata</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Temukan tempat wisata menarik di Pemalang</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Pantai Widuri',
                location: 'Pemalang',
                description: 'Pantai dengan pasir putih dan pemandangan matahari terbenam yang indah',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Curug Sibedil',
                location: 'Pemalang',
                description: 'Air terjun yang indah dengan suasana alam yang asri',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Kebun Teh Pagilaran',
                location: 'Pemalang',
                description: 'Perkebunan teh dengan pemandangan hijau yang menyejukkan',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              }
            ].map((destination, index) => (
              <article key={index} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    width={400}
                    height={300}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">{destination.location}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {destination.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{destination.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Kategori Wisata</h2>
            <p className="mt-2 text-lg leading-8 text-gray-400">Temukan destinasi wisata berdasarkan kategori yang Anda minati</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Wisata Alam',
                description: 'Destinasi wisata yang menawarkan keindahan alam',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Wisata Budaya',
                description: 'Tempat-tempat bersejarah dan budaya di Pemalang',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Wisata Kuliner',
                description: 'Tempat-tempat kuliner khas Pemalang',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              }
            ].map((category, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={400}
                    height={300}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <h3 className="mt-8 text-lg font-semibold leading-6 text-white">
                    {category.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-400">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
import Image from 'next/image';
import Link from 'next/link';

export default function TentangPage() {
  return (
    <div>
      <div className="relative bg-black">
        <div className="">
          <div className="relative overflow-hidden">
            <div className="relative pb-16 pt-6 sm:pb-24 lg:pb-32">
              <main className="mx-auto mt-16 max-w-7xl px-4 px-6 sm:mt-24 lg:mt-16 grid grid-row-2 md:grid-cols-2 items-center text-white text-left">
                <div>
                  <p className="mt-2 max-w-3xl text-base font-medium">Tentang Kami!</p>
                  <h3 className="max-w-3xl text-5xl font-bold">Mengenal lebih dekat Organisasi. Sejarah, Visi dan Misi Kami.</h3>
                </div>
                <p className="mt-2 max-w-3xl text-base font-normal">Di halaman ini, Anda akan menemukan informasi penting mengenai sejarah, visi, misi, dan struktur organisasi kami. Mari jelajahi lebih dalam untuk memahami tujuan dan nilai-nilai yang kami pegang.</p>
              </main>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Sejarah Terbentuk</h2>
              <p className="mt-4 text-gray-400">(HIPMI) didirikan pada 10 Juni 1972. Pendirian organisasi ini dilandasi semangat untuk menumbuhkan wirausaha di kalangan pemuda, karena pada saat itu tidak banyak kaum muda yang bercita-cita menjadi pengusaha.</p>
              <p className="mt-4 text-gray-400">HIPMI Kota Pemalang sebagai organisasi pengusaha muda terbesar di Kota Pemalang yang senantiasa melahirkan inovasi dan kreasi melalui unit usaha para anggotanya ingin memulai suatu pergerakan untuk mendukung implementasi Semangat Pengusaha Muda dalam menghadapi pandemi in dengan mencanangkan suatu semangat dan kiat-kiat membuat inovasi terdepan dalam mempertahankan bisnisnya. Sebuah visi dimana Pemalang meniadi garda terdepan perkembangan ekonomi kreatif Indonesia walaupun adanya pandemi.</p>
              <div className="mt-8 flex items-center gap-x-6">
                <Link href="#" className="mt-3 w-full border border-transparent bg-gray-800 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:mt-0 sm:inline-flex sm:w-auto sm:shrink-0 sm:items-center">Gabung</Link>
              </div>
            </div>
            <div className="mx-auto grid w-full items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <Image 
                src="https://images.pexels.com/photos/3931549/pexels-photo-3931549.jpeg" 
                alt="Organization History"
                width={600}
                height={400}
                className="h-auto w-full object-contain object-left"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-black py-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Visi & Misi</h2>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl">Visi</h2>
              <p className="mt-2 text-gray-400">Mewujudkan Ekosistem Bisnis yang Kolaboratif, Berkelanjutan, dan Inovatif untuk Kemajuan Pemalang.</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl">Misi</h2>
              <ol className="mt-2 ml-4 list-decimal list-outside text-gray-400">
                <li>Membangun Kolaborasi Bisnis yang Kuat</li>
                <li>Mendorong Ekonomi Kreatif dan Ekonomi Hijau sebagai Katalis Pertumbuhan</li>
                <li>Membawa Semangat Baru bagi Pengusaha Muda</li>
                <li>Mewujudkan Pemalang yang Lebih Maju melalui Kewirausahaan</li>
                <li>Mempercepat Digitalisasi Bisnis</li>
              </ol>
            </div>
            <div className="mx-auto grid w-full items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <Image 
                src="https://images.pexels.com/photos/3931549/pexels-photo-3931549.jpeg" 
                alt="Vision and Mission"
                width={600}
                height={400}
                className="h-auto w-full object-contain object-left"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Struktur Organisasi</h2>
          </div>
          <ul role="list" className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {[
              { name: 'Leslie Alexander', position: 'Ketua Umum' },
              { name: 'Leslie Alexander', position: 'Wakil Ketua Umum' },
              { name: 'Leslie Alexander', position: 'Sekretaris Umum' },
              { name: 'Leslie Alexander', position: 'Bendahara Umum' },
              { name: 'Leslie Alexander', position: 'Ketua Bidang 1' },
              { name: 'Leslie Alexander', position: 'Ketua Bidang 2' },
              { name: 'Leslie Alexander', position: 'Ketua Badan Otonom PMP' },
              { name: 'Leslie Alexander', position: 'Ketua Badan Otonom HIPMI Peduli' },
            ].map((person, index) => (
              <li key={index}>
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt={person.name}
                  width={400}
                  height={400}
                  className="aspect-[14/13] w-full rounded-sm object-cover"
                />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-white">{person.name}</h3>
                <p className="text-base/7 text-gray-300">{person.position}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 
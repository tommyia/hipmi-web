import Image from 'next/image';

export default function BeritaPage() {
  return (
    <div>
      <div className="relative bg-black">
        <div className="bg-black">
					<div className="relative isolate overflow-hidden">
						<div className="mx-auto max-w-7xl px-6 lg:px-8 z-20">
							<div className="mx-auto max-w-4xl py-32">
								<div className="text-center">
									<h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">Temukan Berita Terbaru dan Menarik disini</h1>
									<p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">Setiap berita berasal dari sumber terpercaya.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Berita Terbaru</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Informasi terkini seputar Kabupaten Pemalang</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'HIPMI Pemalang Gelar Workshop Digital Marketing',
                description: 'Workshop ini diikuti oleh 50 pengusaha muda dari berbagai sektor di Pemalang.',
                date: '18 April 2024',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Pameran UMKM Pemalang Sukses Digelar',
                description: 'Pameran ini menampilkan produk-produk unggulan dari 100 UMKM di Pemalang.',
                date: '15 April 2024',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'HIPMI Pemalang Raih Penghargaan',
                description: 'Organisasi pengusaha muda ini mendapatkan penghargaan sebagai organisasi teraktif.',
                date: '12 April 2024',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              }
            ].map((article, index) => (
              <article key={index} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={article.date} className="text-gray-500">
                      {article.date}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {article.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{article.description}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Kategori Berita</h2>
            <p className="mt-2 text-lg leading-8 text-gray-400">Temukan berita berdasarkan kategori yang Anda minati</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Bisnis & Ekonomi',
                description: 'Berita seputar perkembangan bisnis dan ekonomi di Pemalang',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'UMKM & Kewirausahaan',
                description: 'Informasi terkini seputar UMKM dan dunia kewirausahaan',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Event & Kegiatan',
                description: 'Jadwal dan informasi kegiatan di Kabupaten Pemalang',
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
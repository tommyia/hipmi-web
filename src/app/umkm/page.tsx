import Image from 'next/image';

export default function UmkmPage() {
  return (
    <div>
      <div className="relative bg-black">
        <div className="bg-black">
					<div className="relative isolate overflow-hidden">
						<div className="mx-auto max-w-7xl px-6 lg:px-8 z-20">
							<div className="mx-auto max-w-4xl py-32">
								<div className="text-center">
									<h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">Temukan Produk UMKM Asli Pemalang Disini</h1>
									<p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">Jelajahi berbagai pilihan produk yang kami tawarkan, mulai dari kebutuhan sehari-hari hingga oleh-oleh yang nikmat. Setiap produk dirancang untuk memberikan kenangan tak terlupakan.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">UMKM Unggulan</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Produk-produk terbaik dari UMKM Pemalang</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Keripik Tempe',
                business: 'UMKM Sari Tempe',
                description: 'Keripik tempe dengan berbagai varian rasa yang lezat dan renyah',
                price: 'Rp 15.000 - 25.000',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Batik Tulis',
                business: 'UMKM Batik Pemalang',
                description: 'Batik tulis dengan motif khas Pemalang yang indah',
                price: 'Rp 150.000 - 500.000',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Kerajinan Bambu',
                business: 'UMKM Bambu Kreatif',
                description: 'Berbagai produk kerajinan dari bambu berkualitas',
                price: 'Rp 50.000 - 300.000',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              }
            ].map((product, index) => (
              <article key={index} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">{product.business}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{product.description}</p>
                    <p className="mt-2 text-sm font-semibold text-gray-900">{product.price}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Kategori UMKM</h2>
            <p className="mt-2 text-lg leading-8 text-gray-400">Temukan UMKM berdasarkan kategori yang Anda minati</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Makanan & Minuman',
                description: 'Berbagai produk makanan dan minuman khas Pemalang',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Kerajinan',
                description: 'Produk kerajinan tangan yang unik dan kreatif',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Fashion',
                description: 'Produk fashion lokal yang berkualitas',
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
import Image from 'next/image';

export default function LokerPage() {
  return (
    <div>
      <div className="relative bg-black">
        <div className="bg-black">
					<div className="relative isolate overflow-hidden">
						<div className="mx-auto max-w-7xl px-6 lg:px-8 z-20">
							<div className="mx-auto max-w-4xl py-32">
								<div className="text-center">
									<h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">Temukan Lowongan Kerja Terbaru Disini</h1>
									<p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">Temukan berbagai informasi lowongan kerja terbaru di Kabupaten Pemalang dan sekitarnya. Dapatkan pekerjaan yang sesuai dengan keahlian yang dimiliki.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lowongan Terbaru</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Temukan pekerjaan yang sesuai dengan keahlian Anda</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Digital Marketing Specialist',
                company: 'PT. Kazee Digital Indonesia',
                location: 'Pemalang',
                type: 'Full Time',
                salary: 'Rp 5.000.000 - 7.000.000',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Sales Executive',
                company: 'PT. Food Merpati Indonesia',
                location: 'Pemalang',
                type: 'Full Time',
                salary: 'Rp 4.000.000 - 6.000.000',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Web Developer',
                company: 'PT. Tekik Pesona Industri',
                location: 'Pemalang',
                type: 'Full Time',
                salary: 'Rp 6.000.000 - 8.000.000',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              }
            ].map((job, index) => (
              <article key={index} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={job.image}
                    alt={job.title}
                    width={400}
                    height={300}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">{job.type}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">{job.location}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {job.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{job.company}</p>
                    <p className="mt-2 text-sm font-semibold text-gray-900">{job.salary}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Kategori Pekerjaan</h2>
            <p className="mt-2 text-lg leading-8 text-gray-400">Temukan pekerjaan berdasarkan kategori yang Anda minati</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Teknologi & IT',
                description: 'Lowongan di bidang teknologi informasi dan digital',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Marketing & Sales',
                description: 'Peluang karir di bidang pemasaran dan penjualan',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
              },
              {
                title: 'Administrasi',
                description: 'Lowongan pekerjaan di bidang administrasi',
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
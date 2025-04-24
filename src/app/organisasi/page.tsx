import Image from 'next/image';
import Link from 'next/link';

export default function OrganisasiPage() {
  return (
    <div>
      <div className="relative bg-black">
        <div className="bg-gray-900">
          <div className="relative isolate overflow-hidden">
            <Image 
              src="https://ik.imagekit.io/9ceqtmg8a7b/client/hipmipml/IMG_4799_xFU3hUjnD.JPEG?updatedAt=1745457228725" 
              alt="Background"
              fill
              className="absolute inset-0 -z-10 size-full object-cover"
            />
            <div className="bg-black opacity-[.7] absolute inset-0 -z-10 size-full"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 z-20">
              <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                  <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">Bergabunglah dengan Komunitas Kami yang Inspiratif</h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">Jadilah bagian dari komunitas yang mendukung dan saling menginspirasi. Dapatkan manfaat dari peluang networking, pembinaan bisnis, serta dukungan untuk mengembangkan potensi kewirausahaanmu. Kita bangun masa depan bisnis yang tangguh dan berdampak positif.</p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link 
                      href="https://forms.gle/uNmp3vcEnkqADWcD9" 
                      target="_blank" 
                      className="bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                    >
                      Daftar Menjadi Anggota
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="mt-0 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Manfaat Menjadi Anggota Kami</h2>
              <p className="mt-4 text-gray-400">keanggotaan kami memberikan akses ekslusif kepada seluruh anggota untuk masuk kedalam ekosistem bisnis kami.</p>
              <div className="mt-6 grid grid-cols-2 gap-16">
                <div>
                  <h3 className="mt-2 text-base font-bold tracking-tight text-gray-100 sm:text-xl">Keuntungan Utama</h3>
                  <p className="mt-2 text-gray-400">Dapatkan manfaat dari peluang networking dan pembinaan bisnis.</p>
                </div>
                <div>
                  <h3 className="mt-2 text-base font-bold tracking-tight text-gray-100 sm:text-xl">Cara Bergabung</h3>
                  <p className="mt-2 text-gray-400">Daftar secara online dan nikmati semua keuntungan keanggotaan.</p>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-x-6">
                <Link 
                  href="https://forms.gle/uNmp3vcEnkqADWcD9" 
                  target="_blank" 
                  className="mt-3 w-full border border-transparent bg-gray-800 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:mt-0 sm:inline-flex sm:w-auto sm:shrink-0 sm:items-center"
                >
                  Gabung Sekarang!
                </Link>
              </div>
            </div>
            <div className="mx-auto grid w-full items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <Image 
                src="https://images.pexels.com/photos/3931549/pexels-photo-3931549.jpeg" 
                alt="Membership Benefits"
                width={600}
                height={400}
                className="h-auto w-full object-contain object-left"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-24 lg:max-w-7xl items-center lg:px-8">
          <div className="mx-auto flex flex-col items-center text-center max-w-3xl">
            <h2 className="font-medium text-yellow-500">Keanggotaan</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cara Menjadi Anggota Kami
            </p>
            <p className="mt-4 max-w-xl text-gray-500">
              Menjadi anggota kami sangat mudah! Ikuti langkah-langkah berikut untuk bergabung dan nikmati berbagai manfaat ekslusif.
            </p>
          </div>

          <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {[
              {
                title: '1. Daftar Secara Online',
                description: 'Kunjungi halaman pendaftaran dan isi formulir yang tersedia.',
                image: '/assets/online.png'
              },
              {
                title: '2. Seleksi Administrasi',
                description: 'Seleksi dilakukan setiap 10 hari pendaftaran.',
                image: '/assets/administrasi.png'
              },
              {
                title: '3. Sesi Wawancara',
                description: 'Sesi wawancara setelah lulus seleksi administrasi.',
                image: '/assets/wawancara.png'
              },
              {
                title: '4. Verifikasi Lapangan',
                description: 'Verifikasi lapangan setelah lulus sesi wawancara.',
                image: '/assets/confirmation.png'
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col-reverse">
                <div className="mt-6">
                  <h3 className="text-xl font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-balance text-gray-500">{step.description}</p>
                </div>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={100}
                  height={100}
                  className="aspect-[1/1] w-1/5 h-1/5 rounded-lg object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-black py-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Syarat Keanggotaan</h2>
              <ol className="mt-8 ml-4 list-decimal list-outside text-gray-400">
                <li>Warga negara Republik Indonesia</li>
                <li>Pemilik / Penanggung Jawab Usaha</li>
                <li>Berusia 17-40th</li>
                <li>Usaha harus memiliki badan hukum berbentuk PT, CV maupun PT perorangan</li>
                <li>Pemilik atau usaha berdomisili di wilayah Kota Pemalang</li>
                <li>Membayar iuran keanggotaan dan biaya administrasi</li>
                <li>Bersedia mematuhi tata tertib, anggaran dasar dan anggaran rumah tangga organisasi.</li>
              </ol>
            </div>
            <div className="mx-auto grid w-full items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <Image 
                src="https://images.pexels.com/photos/3931549/pexels-photo-3931549.jpeg" 
                alt="Membership Requirements"
                width={600}
                height={400}
                className="h-auto w-full object-contain object-left"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
				<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
					<h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Pertanyaan Umum</h2>
					<dl className="mt-20 divide-y divide-gray-900/10">
						<div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
							<dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">Siapakah Ketua Umum BPC HIPMI Kota Pemalang saat ini?</dt>
							<dd className="mt-4 lg:col-span-7 lg:mt-0">
								<p className="text-base/7 text-gray-600">Ketua adalah Meta Agulegistin, S.H., M.Kn</p>
							</dd>
						</div>
						<div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
							<dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">Seperti apa syarat dan ketentuan pendaftaran HIPMI BPC Kota Pemalang?</dt>
							<dd className="mt-4 lg:col-span-7 lg:mt-0">
								<ol className="ml-4 list-decimal list-outside text-gray-600">
									<li>Warga negara Republik Indonesia</li>
									<li>Pemilik / Penanggung Jawab Usaha</li>
									<li>Berusia 17-40th</li>
									<li>Usaha harus memiliki badan hukum berbentuk PT, CV maupun PT perorangan</li>
									<li>Pemilik atau usaha berdomisili di wilayah Kota Pemalang</li>
									<li>Membayar iuran keanggotaan dan biaya administrasi</li>
									<li>Bersedia mematuhi tata tertib, anggaran dasar dan anggaran rumah tangga organisasi.</li>
								</ol>
							</dd>
						</div>
						<div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
							<dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">Apa saja benefit yang akan didapatkan setelah bergabung dengan HIPMI BPC Kota Pemalang?</dt>
							<dd className="mt-4 lg:col-span-7 lg:mt-0">
								<ol className="ml-4 list-decimal list-outside text-gray-600">
									<li>Jaringan Bisnis lebih dari 100 anggota HIPMI Kota Pemalang</li>
									<li>Jaringan pengusaha di seluruh Indonesia</li>
									<li>E Katalog HIPMI</li>
									<li>Diskon khusus belanja di bisnis anggota HIPMI</li>
									<li>Ratusan program pemberdayaan anggota HIPMI Kota Pemalang</li>
								</ol>
							</dd>
						</div>
						<div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
							<dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">Sampai kapan pendaftaran HIPMI BPC Kota Pemalang dibuka?</dt>
							<dd className="mt-4 lg:col-span-7 lg:mt-0">
								<p className="text-base/7 text-gray-600">Pendaftaran anggota HIPMI Pemalang dibuka mulai tanggal 1 Maret 2025 - 1 April 2025, ikuti sosial media kami untuk mendapatkan informasi pendaftaran anggota di batch berikutnya.</p>
							</dd>
						</div>
						<div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
							<dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">Dimana saya bisa melihat informasi pendaftaran HIPMI BPC Kota Pemalang?</dt>
							<dd className="mt-4 lg:col-span-7 lg:mt-0">
								<ol className="ml-4 list-decimal list-outside text-gray-600">
									<li>Melalui akun instagram resmi HIPMI Pemalang (<Link className="text-yellow-500" href="https://www.instagram.com/hipmipemalang/" target="_blank">@hipmipemalang</Link>)</li>
									<li>Media eksternal - Radio 99ers, Dahlia - Koran Gala - Media center</li>
									<li>Instagram Anggota HIPMI</li>
								</ol>
							</dd>
						</div>
						<div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
							<dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">Kapan seleksi akan dilaksanakan?</dt>
							<dd className="mt-4 lg:col-span-7 lg:mt-0">
								<p className="text-base/7 text-gray-600">Pelaksanaan dapat dimulai setiap 10 hari pendaftaran agar bisa berjalan paralel dengan wawancara.</p>
							</dd>
						</div>
						<div className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
							<dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">Bagaimana selanjutnya jika sudah dinyatakan lolos seleksi?</dt>
							<dd className="mt-4 lg:col-span-7 lg:mt-0">
								<p className="text-base/7 text-gray-600">Setelah anda dinyatakan lolos seleksi anggota HIPMI Pemalang maka selanjutnya akan diadakan acara seremonial anggota baru HIPMI Pemalang untuk memberikan Kartu Tanda Anggota HIPMI Pemalang.</p>
							</dd>
						</div>
					</dl>
				</div>
			</div>
    </div>
  );
} 
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative bg-black">
        <div className="absolute inset-0 h-screen w-full"></div>
        <div>
          <header className="relative">
            <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="border-b border-transparent px-4 pb-14 sm:px-0 sm:pb-0">
                <div className="flex h-24 items-center justify-between">
                  <div className="flex flex-1">
                    <Link href="/" className="-ml-6 flex items-center">
                      <Image
                        className="h-20 w-auto"
                        src="/assets/logo HIPMI PML.png"
                        alt="HIPMI PML Logo"
                        width={80}
                        height={80}
                      />
                      <span className="mt-1 -ml-2 text-sm md:text-xl font-bold text-white leading-6">
                        BPC HIPMI<br />KAB PEMALANG
                      </span>
                    </Link>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                    <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                      <Link
                        href="/"
                        className="flex items-center text-sm font-medium text-gray-200 hover:text-yellow-500"
                      >
                        Hipmi for PML
                      </Link>
                      <Link
                        href="#kontak"
                        className="flex items-center text-sm font-medium text-gray-200 hover:text-yellow-500"
                      >
                        Kontak
                      </Link>
                      <Link
                        href="/memberships"
                        className="flex items-center text-sm font-medium text-gray-200 hover:text-yellow-500"
                      >
                        Organisasi
                      </Link>
                      <Link
                        href="/about"
                        className="flex items-center text-sm font-medium text-gray-200 hover:text-yellow-500"
                      >
                        Sejarah
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-end">
                    <Link
                      href="#"
                      className="p-1 text-gray-100 hover:text-yellow-500"
                    >
                      <span className="sr-only">Search</span>
                      <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17.636 7h.012"/>
                      </svg>
                    </Link>

                    <div className="pb-0.5 ml-4 flow-root bg-yellow-400 hover:bg-yellow-500">
                      <Link href="#" className="px-6 py-4 -m-2 flex items-center font-bold">
                        Join Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>

        <div className="relative overflow-hidden">
          <div className="relative pb-16 pt-6 sm:pb-24 lg:pb-32">
            <main className="mx-auto mt-16 max-w-7xl px-4 px-6 sm:mt-24 lg:mt-16 flex flex-col items-center text-white text-center">
              <h3 className="max-w-3xl text-5xl font-bold">Membangun Kewirausahaan untuk Masa Depan Bersama</h3>
              <p className="mt-8 max-w-3xl text-base font-normal">
                HIPMI Pemalang adalah organisasi yang mewadahi, mengembangkan, dan memberdayakan pengusaha muda di Kabupaten Pemalang. Berfokus pada penguatan jaringan bisnis, peningkatan kapasitas kewirausahaan, dan kolaborasi antaranggota, HIPMI Pemalang berperan aktif dalam mendorong pertumbuhan ekonomi daerah serta mencetak generasi pengusaha muda yang inovatif, tangguh, dan berdaya saing.
              </p>
              <div className="mt-8 flex space-x-6">
                <Link href="#" className="px-6 py-3 -m-2 bg-yellow-500 hover:bg-yellow-600 flex items-center font-bold text-gray-900">
                  Gabung
                </Link>
                <Link href="#" className="px-6 py-3 -m-2 bg-gray-900 hover:bg-gray-800 flex items-center font-bold text-gray-200">
                  Pelajari
                </Link>
              </div>
              <Image
                className="mt-20 h-auto w-full rounded-md"
                src="/assets/page 1-1.jpg"
                alt="HIPMI PML Hero Image"
                width={1200}
                height={600}
              />
            </main>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-24 lg:max-w-7xl items-center lg:px-8">
          <div className="mx-auto flex flex-col items-center text-center max-w-3xl">
            <h2 id="features-heading" className="font-medium text-yellow-500">
              HIPMI for Pemalang
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              HIPMI Pemalang untuk Mendorong Pertumbuhan Bisnis Anda
            </p>
            <p className="mt-4 text-gray-500">
              HIPMI Super Platform,menyediakan informasi UMKM, Wisata, Lowongan Pekerjaan hingga berita terkini seputar kabupaten Pemalang.
            </p>
          </div>

          <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            <Link href="/umkm" className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-balance font-medium text-gray-900">UMKM Pemalang</h3>
                <p className="mt-2 text-balance text-gray-500">
                  Temukan berbagai produk UMKM Pemalang yang kreatif dan inovatif.
                </p>
              </div>
              <Image
                src="https://images.pexels.com/photos/3213283/pexels-photo-3213283.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="UMKM Pemalang"
                width={600}
                height={400}
                className="aspect-[16/9] w-full h-full rounded-lg bg-gray-100 object-cover"
              />
            </Link>
            <Link href="/berita" className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-balance font-medium text-gray-900">Berita Pemalang</h3>
                <p className="mt-2 text-balance text-gray-500">
                  Berita terkini seputar Kabupaten Pemalang dari sumber terpercaya.
                </p>
              </div>
              <Image
                src="https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Berita Pemalang"
                width={600}
                height={400}
                className="aspect-[16/9] w-full h-full rounded-lg bg-gray-100 object-cover"
              />
            </Link>
            <Link href="/wisata" className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-balance font-medium text-gray-900">Wisata Pemalang</h3>
                <p className="mt-2 text-balance text-gray-500">
                  Jelajahi berbagai destinasi wisata di Kabupaten Pemalang.
                </p>
              </div>
              <Image
                src="https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Wisata Pemalang"
                width={600}
                height={400}
                className="aspect-[16/9] w-full h-full rounded-lg bg-gray-100 object-cover object-right"
              />
            </Link>
            <Link href="/loker" className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-balance font-medium text-gray-900">Loker Pemalang</h3>
                <p className="mt-2 text-balance text-gray-500">
                  Dapatkan informasi lowongan pekerjaan terbaru di Pemalang.
                </p>
              </div>
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Loker Pemalang"
                width={600}
                height={400}
                className="aspect-[16/9] w-full h-full rounded-lg bg-gray-100 object-cover"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-black py-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 id="features-heading" className="font-medium text-yellow-500">
                Bergabunglah
              </h2>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                Manfaat Bergabung dengan HIPMI Pemalang
              </h2>
              <p className="mt-4 text-gray-400">
                Bergabung dengan HIPMI Pemalang membuka peluang jaringan yang luas dan akses ke berbagai sumber daya. Dapatkan dukungan dan bimbingan untuk mengembangkan usaha Anda secara maksimal.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <Link
                  href="#"
                  className="mt-3 w-full border border-transparent bg-gray-800 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:mt-0 sm:inline-flex sm:w-auto sm:shrink-0 sm:items-center"
                >
                  Gabung
                </Link>
              </div>
            </div>
            <div className="mx-auto grid w-full items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <Image
                className="h-auto w-full object-contain object-left"
                src="https://images.pexels.com/photos/3931549/pexels-photo-3931549.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Join HIPMI"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="teams" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-yellow-500">Anggota</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl capitalize">
              ANGGOTA HIPMI KAB PEMALANG
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-500">
              Bersama membangun masa depan yang lebih baik.
            </p>
          </div>
          <ul role="list" className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-4 lg:mx-0 lg:max-w-none lg:gap-8">
            {[
              {
                name: "PT. Kazee Digital Indonesia",
                role: "Teknologi",
                description: "Perusahaan Informasi dan Komunikasi",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQw96ZAtfSTc2UF0OXvIiXWkXYIFlP8GuHA&s"
              },
              {
                name: "PT. Food Merpati Indonesia",
                role: "FnB",
                description: "Perusahaan makanan dan minuman",
                image: "https://deerdesigner.com/wp-content/uploads/good-food-logo-opt-1.png"
              },
              {
                name: "PT. Tekik Pesona Industri",
                role: "Teknologi",
                description: "Perusahaan Informasi dan Komunikasi",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFxdn28iG5oz1Kx3EEdxiV9W7faBLFxi_sA&s"
              },
              {
                name: "PT. Loop You Selalu",
                role: "Teknologi",
                description: "Perusahaan Informasi dan Komunikasi",
                image: "https://marketplace.canva.com/EAFvMagh96A/2/0/1600w/canva-colorful-modern-infinity-technology-free-logo-pUhZOkMnsk8.jpg"
              },
              {
                name: "PT. Plat Be Jakarta",
                role: "Teknologi",
                description: "Perusahaan Informasi dan Komunikasi",
                image: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162631/1831.png"
              },
              {
                name: "PT. Budaya Pembangunan Mase",
                role: "Konstruksi & Pembangunan",
                description: "Perusahaan Informasi dan Komunikasi",
                image: "https://marketplace.canva.com/EAF3hoQADdU/2/0/1600w/canva-green-and-blue-building-icon-construction-logo-WAi6evUuIlg.jpg"
              },
              {
                name: "PT. Budaya Pembangunan Mase",
                role: "Agensi Kreatif",
                description: "Perusahaan Informasi dan Komunikasi",
                image: "https://images-platform.99static.com//YAHgkKJd5CK9ZeGM3fLUHtnTv9Y=/383x209:1111x937/fit-in/500x500/99designs-contests-attachments/100/100423/attachment_100423962"
              },
              {
                name: "PT. Indo Karya Maksimal",
                role: "Fashion & Tekstil",
                description: "Perusahaan Manufaktur Tekstil",
                image: "https://t4.ftcdn.net/jpg/02/99/47/49/360_F_299474985_7Bhcx5fcDEs4L0L3HLFB53ZYdo8OQpKO.jpg"
              }
            ].map((member, index) => (
              <li key={index} className="flex flex-col gap-4 pt-12">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="bg-white w-full h-auto aspect-[1/1] flex-none object-cover"
                />
                <div className="max-w-xl flex-auto text-center">
                  <h3 className="text-lg font-bold leading-10 tracking-tight text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-lg leading-6 text-yellow-500">{member.role}</p>
                  <p className="mt-2 text-lg leading-6 text-gray-400">
                    {member.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className="px-6 py-3 mt-24 max-w-max mx-auto bg-yellow-500 hover:bg-yellow-600 flex items-center font-bold text-gray-900"
          >
            Daftar Perusahaan Lainnya
          </Link>
        </div>
      </div>

      <footer id="kontak" className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bergabunglah dengan HIPMI Pemalang
            </p>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-400">
              Dapatkan informasi terbaru dan bergabung dengan komunitas bisnis yang dinamis di Pemalang.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="#"
                className="bg-yellow-500 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                Daftar
              </Link>
            </div>
          </div>
          <div className="mt-24 border-t border-white/10 items-start pt-12 xl:grid xl:grid-cols-3 xl:gap-8">
            <div>
              <Link href="#" className="-ml-6 -mt-2 flex items-center text-xl font-bold">
                <Image
                  className="h-20 w-auto"
                  src="/assets/logo HIPMI PML.png"
                  alt="HIPMI PML Logo"
                  width={80}
                  height={80}
                />
                <span className="mt-0.5 -ml-2 text-white">
                  BPC HIPMI<br />KAB PEMALANG
                </span>
              </Link>
            </div>
            <div className="text-gray-100">
              <h3 className="font-medium">Alamat:</h3>
              <h3 className="font-medium text-gray-400">
                Kantor notaris & PPAT Meta Agulegistin, S.H., M.Kn
              </h3>
              <p className="font-medium text-gray-400">
                Kel Jl. Pemuda No.50, Mulyoharjo, Kec. Pemalang, Kabupaten Pemalang, Jawa Tengah 52313
              </p>
            </div>
            <div className="text-gray-100">
              <h3 className="font-medium">Email:</h3>
              <p className="font-medium text-gray-400">
                bpchipmikabpemalang@gmail.com
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="order-2 flex gap-x-6 md:order-3">
              <Link href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">X</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">YouTube</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="order-1 md:order-2 flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
              <Link
                href="#"
                className="flex items-center text-sm font-medium text-gray-200 hover:text-yellow-500"
              >
                Hipmi for PML
              </Link>
              <Link
                href="#"
                className="flex items-center text-sm font-medium text-gray-200 hover:text-yellow-500"
              >
                Kontak
              </Link>
              <Link
                href="#"
                className="flex items-center text-sm font-medium text-gray-200 hover:text-yellow-500"
              >
                Organisasi
              </Link>
              <Link
                href="#"
                className="flex items-center text-sm font-medium text-gray-200 hover:text-yellow-500"
              >
                Sejarah
              </Link>
            </div>
            <p className="order-3 md:order-1 mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-0">
              &copy; 2025 Idwar Halid, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

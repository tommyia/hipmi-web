import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative bg-black">
        <div className="absolute inset-0 h-screen w-full"></div>

        <div className="relative overflow-hidden">
          <div className="relative pb-16 pt-6 sm:pb-24 lg:pb-32">
            <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 lg:mt-16 flex flex-col items-center text-white text-center">
              <h3 className="max-w-3xl text-5xl font-bold">Membangun Kewirausahaan untuk Masa Depan Bersama</h3>
              <p className="mt-8 max-w-3xl text-base font-normal">
                HIPMI Pemalang adalah organisasi yang mewadahi, mengembangkan, dan memberdayakan pengusaha muda di Kabupaten Pemalang. Berfokus pada penguatan jaringan bisnis, peningkatan kapasitas kewirausahaan, dan kolaborasi antaranggota, HIPMI Pemalang berperan aktif dalam mendorong pertumbuhan ekonomi daerah serta mencetak generasi pengusaha muda yang inovatif, tangguh, dan berdaya saing.
              </p>
              <div className="mt-8 flex flex-row">
                <Link href="https://forms.gle/uNmp3vcEnkqADWcD9" target="_blank" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 flex items-center font-bold text-gray-900">
                  Gabung
                </Link>
                <Link href="/organisasi" className="px-6 py-3 bg-gray-900 hover:bg-gray-800 flex items-center font-bold text-gray-200">
                  Pelajari
                </Link>
              </div>
              <Image
                className="mt-20 h-auto w-full rounded-md"
                src="https://ik.imagekit.io/9ceqtmg8a7b/client/hipmipml/IMG_4799_xFU3hUjnD.JPEG?updatedAt=1745457228725"
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
                src="/assets/umkm.png"
                alt="UMKM Pemalang"
                width={100}
                height={100}
                className="aspect-[1/1] w-1/5 h-1/5 rounded-lg object-center"
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
                src="/assets/berita.png"
                alt="Berita Pemalang"
                width={100}
                height={100}
                className="aspect-[1/1] w-1/5 h-1/5 rounded-lg object-center"
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
                src="/assets/wisata.png"
                alt="Wisata Pemalang"
                width={600}
                height={400}
                className="aspect-[1/1] w-1/5 h-1/5 rounded-lg object-center"
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
                src="/assets/loker.png"
                alt="Loker Pemalang"
                width={600}
                height={400}
                className="aspect-[1/1] w-1/5 h-1/5 rounded-lg object-center"
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
                   href="https://forms.gle/uNmp3vcEnkqADWcD9" target="_blank"
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
    </div>
  );
}

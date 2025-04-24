import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
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
									href="/organisasi"
									className="flex items-center text-sm font-medium text-gray-200 hover:text-yellow-500"
								>
									Organisasi
								</Link>
								<Link
									href="/tentang"
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
								<Link href="https://forms.gle/uNmp3vcEnkqADWcD9" target="_blank" className="px-6 py-4 -m-2 flex items-center font-bold text-gray-900">
									Gabung Sekarang
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
  );
}
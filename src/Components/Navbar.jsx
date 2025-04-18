import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import AboutPart from '../Components/AboutPart' 

const navigation = [
  { name: 'Home', href: '#Home', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Services', href: '#ServicesPart', current: false },
  { name: 'Contact', href: '#FooterPart', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="pt-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="flex sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Logo and Title */}
              <div className="flex items-center pl-5">
                <img
                  className="h-8 w-auto"
                  src="./Logo.png"
                  alt="SynapTek Logo"
                />
                <span className="ml-4 text-3xl font-bold text-white">
                  SynapTek InfoTech
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center sm:space-x-4 ml-auto">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-white text-black'
                        : 'text-white hover:bg-white hover:text-black',
                      'px-5 py-2 rounded-[30px] font-medium transition-all duration-500 ease-in-out'
                    )}
                    style={{ fontSize: '18px' }}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <DisclosurePanel className="sm:hidden">            
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-5 py-2 rounded-[30px] text-white font-medium transition-all duration-500 ease-in-out"
                  style={{ fontSize: '18px' }}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
   
  );
  
}

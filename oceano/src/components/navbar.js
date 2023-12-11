import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const earthSelected = <img src='img/icon/earth/earth.png' className=' w-6 ' />
const earth = <img src='img/icon/earth/greyEarth.png' className='w-6 ' />

const waterDropSelected = <img src='img/icon/waterDrop/waterDrop.png' className='w-6 ' />
const waterDrop = <img src='img/icon/waterDrop/waterDropGrey.png' className='w-6' />

const chatSelected = <img src='img/icon/chat/chat.png' className=' w-6' />
const chat = <img src='img/icon/chat/chatGrey.png' className=' w-6'  />



const noSelected = [
  earth, waterDrop, chat
]

const navigation = [
  { name: 'AGIR', href: '/act', svg: earthSelected, current: true },
  { name: 'NOTRE IMPACT', href: '/impact', svg: waterDropSelected, current: false },
  { name: 'COMMUNAUTE', href: '/community', svg: chatSelected, current: false },
]

const currentUrl = window.location.pathname;


for (let i = 0; i < navigation.length; i++) {
  if (currentUrl == navigation[i].href) {
    navigation[i].current = true

  } else {
    navigation[i].current = false
    navigation[i].svg = noSelected[i]
  }
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-neutral-50">
      <div className="mx-auto px-2 sm:px-6  ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button></Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">

                {navigation.map((item) => (

                  <div className=''>
                    <div className='absolute'>
                      {item.svg}
                    </div>

                    <a key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? ' text-cyan-400 ml-6' : 'text-zinc-400 ml-6',
                        ' px-3 py-2 text-sm font-medium '
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >

                      {item.name}
                    </a>

                  </div>

                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full text-gray-400 flex items-center"
            >
              <img src='img/icon/target.png' className='h-7 absolute' />
              <p className='ml-10 extraBoldNunito fontTarget '>3</p>

            </button>
            <button
              type="button"
              className="relative rounded-full text-gray-400 p-4 flex items-center"
            >
              <img src='img/icon/coin.png' className='h-7 absolute' />
              <p className='ml-8 extraBoldNunito fontBell'>152</p>

            </button>
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex rounded-full text-sm p-4 ">
                  <div className='profileImgNav mr-4 flex items-center justify-center'>
                    <div className='whiteCircle flex items-center justify-center'>
                      <img
                        className="h-8 w-8 rounded-full absolute positionImage "
                        src="/img/avatar.png"
                        alt=""
                      />
                    </div></div>

                  <div className='my-auto'>
                    <p className=' blackNunito text-[16px]'>Matéo C.</p>
                    <p className=' semiBoldNunito flex flex-1 levelColor'>Niveau 4</p>
                  </div>

                </Menu.Button>

              </div>
            </Menu>
          </div>
        </div>
      </div>

    </Disclosure >

    // <Disclosure as="nav" className="bg-neutral-50 ">
    //   {({ open }) => (
    //     <>

    //       <div className="mx-auto px-2 sm:px-6  ">
    //         <div className="relative flex h-16 items-center justify-between">
    //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //             {/* Mobile menu button*/}
    //             <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //               <span className="absolute -inset-0.5" />
    //               <span className="sr-only">Open main menu</span>
    //               {open ? (
    //                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    //               ) : (
    //                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    //               )}
    //             </Disclosure.Button>
    //           </div>
    //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //             <div className="hidden sm:ml-6 sm:block">
    //               <div className="flex space-x-4">

    //                 {navigation.map((item) => (
    //                   <a
    //                     key={item.name}
    //                     href={item.href}
    //                     className={classNames(
    //                       item.current ? ' text-cyan-400' : 'text-zinc-400 hover:bg-gray-700 hover:text-white',
    //                       'rounded-md px-3 py-2 text-sm font-medium '
    //                     )}
    //                     aria-current={item.current ? 'page' : undefined}
    //                   >
    //                     {item.svg}
    //                     {item.name}
    //                   </a>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //             <button
    //               type="button"
    //               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    //             >
    //               <span className="absolute -inset-1.5" />
    //               <span className="sr-only">View notifications</span>
    //               <BellIcon className="h-6 w-6" aria-hidden="true" />
    //             </button>

    //             {/* Profile dropdown */}
    //             <Menu as="div" className="relative ml-3">
    //               <div>
    //                 <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    //                   <span className="absolute -inset-1.5" />
    //                   <span className="sr-only">Open user menu</span>
    //                   <img
    //                     className="h-8 w-8 rounded-full"
    //                     src="/img/avatar.png" 
    //                     alt=""
    //                   />
    //                 </Menu.Button>
    //               </div>

    //               <Transition
    //                 as={Fragment}
    //                 enter="transition ease-out duration-100"
    //                 enterFrom="transform opacity-0 scale-95"
    //                 enterTo="transform opacity-100 scale-100"
    //                 leave="transition ease-in duration-75"
    //                 leaveFrom="transform opacity-100 scale-100"
    //                 leaveTo="transform opacity-0 scale-95"
    //               >
    //                 <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <a
    //                         href="../pages/profil.js"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Your Profile
    //                       </a>
    //                     )}
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <a
    //                         href="#"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Settings
    //                       </a>
    //                     )}
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <a
    //                         href="/signin"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Sign out
    //                       </a>
    //                     )}
    //                   </Menu.Item>
    //                 </Menu.Items>
    //               </Transition>
    //             </Menu>
    //           </div>
    //         </div>
    //       </div>

    //       <Disclosure.Panel className="sm:hidden">
    //         <div className="space-y-1 px-2 pb-3 pt-2">
    //           {navigation.map((item) => (
    //             <Disclosure.Button
    //               key={item.name}
    //               as="a"
    //               href={item.href}
    //               className={classNames(
    //                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                 'block rounded-md px-3 py-2 text-base font-medium'
    //               )}
    //               aria-current={item.current ? 'page' : undefined}
    //             >
    //               {item.name}
    //             </Disclosure.Button>
    //           ))}
    //         </div>
    //       </Disclosure.Panel>
    //     </>
    //   )}
    // </Disclosure>
  )
}
export default Navbar;
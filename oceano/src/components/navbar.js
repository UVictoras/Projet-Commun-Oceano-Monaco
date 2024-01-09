import { Disclosure, Menu } from '@headlessui/react'
import { useEffect, useState } from "react";
import { getUserSession } from "../api/session";

const earthSelected = <img src='img/icon/earth/earth.png' className=' w-6 ' alt='earth make it blue'/>
const earth = <img src='img/icon/earth/greyEarth.png' className='w-6 ' alt='earth make it blue' />

const waterDropSelected = <img src='img/icon/waterDrop/waterDrop.png' className='w-6 ' alt='waterDrop make it blue'/>
const waterDrop = <img src='img/icon/waterDrop/waterDropGrey.png' className='w-6' alt='waterDrop make it blue' />

const chatSelected = <img src='img/icon/chat/chat.png' className=' w-6' alt='chat make it blue' />
const chat = <img src='img/icon/chat/chatGrey.png' className=' w-6' alt='chat make it blue' />



const noSelected = [
  earth, waterDrop, chat
]

const navigation = [
  { name: 'AGIR', href: '/act', svg: earthSelected, current: false },
  { name: 'NOTRE IMPACT', href: '/impact', svg: waterDropSelected, current: false },
  { name: 'COMMUNAUTE', href: '/community', svg: chatSelected, current: false },
]

const currentUrl = window.location.pathname;


for (let i = 0; i < navigation.length; i++) {
  if (currentUrl === navigation[i].href) {
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
  const [ user, setUser ] = useState([]);

  useEffect(() => {
    const userFetched = getUserSession();
    userFetched
    .then(result => setUser(result))
    .catch(error=>console.error("Error :",error.message))
  },[]);

  useEffect(() => {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
      let pctXP = (user.PctXP * 80) / 100
      if(pctXP <= 40){
        let pctChelou = pctXP + 60
        progressBar.style.background = `conic-gradient(#D9D9D9 0% 40%, transparent 40% 60%, #D81F26 60% ${pctChelou}%, #D9D9D9 ${pctChelou}% 100%)`;
      }else{
        let pctChelou = pctXP - 40
        progressBar.style.background = `conic-gradient(#D81F26 0% ${pctChelou}%, #D9D9D9 ${pctChelou}% 40%, transparent 40% 60%, #D81F26 60% 100%)`;
      }
    }
  }, [user]);
  return (
    <Disclosure as="nav" className="bg-white border-b-2 border-neutral-200">
      <div className="mr-9">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
              <img src='img/icon/target.png' className='h-7 absolute' alt='target make it blue'/>
              <p className='ml-10 extraBoldNunito fontTarget '>3</p>

            </button>
            <button
              type="button"
              className="relative rounded-full text-gray-400 p-4 flex items-center"
            >
              <img src='img/icon/coin.png' className='h-7 absolute' alt="coin make it blue" />
              <a href='/shop' className='ml-8 extraBoldNunito fontBell'>{user.Money}</a>

            </button>
            <Menu as="div" className="relative ml-3">
              <div>
                <a href='/profil'>
                  <Menu.Button className="relative flex rounded-full text-sm p-4" >

                    <div id="progressBar" className='profileImgNav mr-4 flex items-center justify-center'>
                      <div className='whiteCircle flex items-center justify-center'>
                        <img
                          className="h-10 w-10 rounded-full absolute positionImage "
                          src="/img/profil/loutre.png"
                          alt="avatar make it blue"
                        />
                      </div></div>

                    <div className='my-auto'>
                      <p className=' blackNunito text-[18px] text-left'>{user.Pseudo}</p>
                      <p className=' semiBoldNunito text-[14px] flex flex-1 levelColor'>Niveau {user.Number}</p>
                    </div>

                  </Menu.Button>
                </a>
              </div>
            </Menu>
          </div>
        </div>
      </div>

    </Disclosure >
  )
}
export default Navbar;
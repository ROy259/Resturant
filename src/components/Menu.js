import React from 'react'
import Menuitems from './Menuitems'

const Menu = () => {
  return (
    <>
    <div className='flex justify-around  '>
    <Menuitems img={'/images/dosa.jpg'}  name={'Dosa'} />
    <Menuitems  img={'/images/chhola.jpg'}  name={'Chola'}/>
    <Menuitems  img={'/images/idli.jpg'}  name={'Idli'}/>
    

    </div>
    <div className='flex justify-around'>
    <Menuitems  img={'/images/Masala.jpg'}  name={'Masala'}/>
    <Menuitems  img={'/images/meduvada.jpg'}  name={'Meduvada'}/>
    <Menuitems  img={'/images/Paneer.jpg'}  name={'Paneer'}/>
    </div>
    </>
  )
}

export default Menu

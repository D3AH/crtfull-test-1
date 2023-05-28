import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [itemSelected, setItemSelected] = useState(null);
  const [isItemSelected, setIsItemSelected] = useState(false);

  useEffect(() => {
    setIsItemSelected(itemSelected ? true : false);
  }, [itemSelected]);

  const items = [
    {
      color: '#EEB426',
      name: 'Coffee Maker',
      image: '/test-assets/q2/coffee-maker-desktop.svg'
    },
    {
      color: '#9CAF96',
      name: 'French Press',
      image: '/test-assets/q2/french-press-desktop.svg'
    },
    {
      color: '#D4A1A6',
      name: 'Pour Over',
      image: '/test-assets/q2/pour-over-desktop.svg'
    },
    {
      color: '#DA8464',
      name: 'AeroPress',
      image: '/test-assets/q2/aeropress-desktop.svg'
    },
    {
      color: '#A9C9E1',
      name: 'Espresso',
      image: '/test-assets/q2/espresso-desktop.svg'
    },
    {
      color: '#C47D30',
      name: 'Pods',
      image: '/test-assets/q2/pods-desktop.svg'
    },
    {
      color: '#D2C6C3',
      name: 'Moka Pot',
      image: '/test-assets/q2/moka-pot-desktop.svg'
    }
  ];

  console.log(isItemSelected);

  const selectItem = function(item) {
    setItemSelected(item);
  }

  return (
    <>
      <nav id='navbar'>
        <div className='#space'></div>
        <h1>The Coffee Shop</h1>
        <div className='menu-icon'>
          <img
            src="/test-assets/menu-icon.png"
            alt="3 white bars" />
        </div>
      </nav>
      <div className='main'>
        <div className="steps-bar">
          <div className="step answered">
            <span>1</span>
          </div>
          <div className="step current">
            <span>2</span>
          </div>
          <div className="step">
            <span>3</span>
          </div>
          <div className="step">
            <span>4</span>
          </div>
          <div className="step">
            <span>5</span>
          </div>
          <div className="step">
            <span>6</span>
          </div>
        </div>
        <h1 className='text-center title'>
          How do you brew at home?
        </h1>
        <div className={`select-slider ${isItemSelected ? 'item-selected' : 'item-none'}`}>
          {items.map((_item, idx) => {
            let marginTop = (((idx-3)**2)/-32)*-200;
            console.log(itemSelected.name);
            return (
              <div
                key={idx}
                className={`item ${_item.name == itemSelected.name ? 'selected' : null }`}
                style={{
                  transform: `rotate(${-12 + (idx * 4)}deg)`,
                  marginTop,
                  backgroundColor:  _item.color
                }}
                onClick={() => { selectItem(_item)}}
              >
                <img
                  src={_item.image}
                  alt={_item.name}
                />
                <h2>{_item.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <footer className='footer-navbar'>
        <a href="#">
          {'<'} Back
        </a>
        <a href="#">
          Why it matters +
        </a>
      </footer>
    </>
  )
}

export default App

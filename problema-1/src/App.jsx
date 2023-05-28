import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState(2);
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

  const selectItemOrToggle = function(item) {
    if (itemSelected && item.name == itemSelected.name) {
      setItemSelected(null);
      return;
    }

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
          {Array.from({ length: 6 }).map((_, idx) => {
            let status = null;
            idx = idx + 1;

            if (idx < currentStep) {
              status = 'answered';
            }

            if (idx == currentStep) {
              status = 'current';
            }

            return (
              <div className={`step ${status}`}>
                <span>{idx}</span>
              </div>
            );
          })}
        </div>
        {currentStep == 2 && (
          <>
            <h1
              className='text-center title margin-lg'
            >
              How do you brew at home?
            </h1>
            <div className={`select-slider ${isItemSelected ? 'item-selected' : 'item-none'}`}>
              {items.map((_item, idx) => {
                let marginTop = (((idx-3)**2)/-32)*-200;

                return (
                  <div
                    key={idx}
                    className={`item ${itemSelected && _item.name == itemSelected.name ? 'selected' : null }`}
                    style={{
                      transform: `rotate(${-12 + (idx * 4)}deg)`,
                      marginTop,
                      backgroundColor:  _item.color
                    }}
                    onClick={() => { selectItemOrToggle(_item)}}
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
            { isItemSelected && (
              <div className='text-center'>
                <button type='action' className='primary-button' onClick={() => setCurrentStep(7)}>
                  continue
                </button>
              </div>
            )}
          </>
        )}
        {currentStep == 7 && (
          <>
            <h1 className='text-center text-lg title margin-bottom-md'>
              Meet your new favorite coffee.
            </h1>
            <p className='text-center margin-bottom-md'>
              Here’s what we recommend for your busy days, quiet moments, and upcoming adventures.
            </p>
            <div className='text-center margin-bottom-lg'>
              <a href="#" style={{marginRight: '2rem'}}>
                Email my results
              </a>
              <a href="#" onClick={() => { setCurrentStep(2) }}>
                Retake the quiz
              </a>
            </div>
            <table className='table-bestmatch'>
              <tr>
                <td
                  rowSpan={2}
                  className='text-center'
                  style={{width: '32%'}}
                >
                  <h2 className='font-400 margin-top-0'>BEST MATCH</h2>
                </td>
                <td colSpan={4}>
                  <p>WHY YOU’LL LOVE IT</p>
                  <h3 className='font-400 text-md text-primary-black text-center margin-bottom-md'>
                    If you’ve ever taken a bite from a ripe red apple, <br />
                    you’ll know the way this coffee tastes. 
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='w-full text-center'>
                    <p>Tasting Notes</p>
                    <img src="/test-assets/tasting.png" alt="Brew" />
                    <span>
                      Red Apple,<br />
                      Lemongrass,<br />
                      Malt Chocolate
                    </span>
                  </div>
                </td>
                <td>
                  <div className='w-full text-center'>
                    <p>roast level</p>
                    <img src="/test-assets/roast.png" alt="Brew" />
                    <span>
                      Medium
                    </span>
                  </div>
                </td>
                <td>
                  <div className='w-full text-center'>
                    <p>sipping style</p>
                    <img src="/test-assets/sipping.png" alt="Brew" />
                    <span>
                      Great with <br />
                      milk/cream
                    </span>
                  </div>
                </td>
                <td>
                  <div className='w-full text-center'>
                    <p>brew method</p>
                    <img src="/test-assets/brew.png" alt="Brew" />
                    <span>
                      Brews a delicious cup <br />
                      with a pour over
                    </span>
                  </div>
                </td>
              </tr>
            </table>
          </>
        )}
      </div>
      {
        currentStep < 7 && (
          <footer className='footer-navbar'>
            <a href="#">
              {'<'} Back
            </a>
            <a href="#">
              Why it matters +
            </a>
          </footer>
        )
      }
    </>
  )
}

export default App

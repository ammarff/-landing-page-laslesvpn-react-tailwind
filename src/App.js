import IconLaslesVpn from './assets/Logo.png'
import ilus1 from './assets/Illustration_1.png'
import IconMaps from './assets/maps.png'
import IconServer from './assets/server.png'
import IconUsers from './assets/users.png'
import ilus2 from './assets/Illustration_2.png'
import Check from './assets/Check.png'
import TitleDesc from './components/TitleDesc'
import CardPlan from './components/CardPlan2'

function App() {
  const menus = ["About", "Features", "Pricing","Testimonials","Help"]

  const section3 = [
    {
      icon: IconUsers,
      label:'Users',
      total:'90+'
    },
    {
      icon:IconMaps,
      label:'Locations',
      total:'30+'
    },
    {
      icon:IconServer,
      label:'Servers',
      total:'50+'
    }
  ]

  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Internet without borders.",
    "No specific time limits.",
  ];

  const plans = [
    {
      title: "Free Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
    },
    {
      title: "Standard Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      price: "$9 / mo",
    },
    {
      title: "Premium Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Connect Anyware",
      ],
      price: "$12 / mo",
    },
  ];



  return (
    <div className="bg-white">
      <header className="container mx-auto items-center max-w-5xl space-x-36 pt-7 flex flex-row">
        <img src={IconLaslesVpn} className="w-36" alt="logo" />
        <div className='flex-1'>
          <ul className='flex flex-row space-x-6'>
            {menus.map((val,index)=>(
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className='space-x-6 flex flex-row items-center'>
          <button className='font-bold'>Sign in</button>
          <button className='border py-2 px-6 rounded-full border-red-500 text-red-500'>Sign up</button>
        </div>
      </header>
      <main>
        <div className='container max-w-5xl mx-auto py-24 grid grid-cols-2'>
          <div className='my-auto'>
            <h1 className='font-bold text-4xl pb-5'>
            Want anything to be 
            <br /> easy with LaslesVPN.
            </h1>
            <div className='text-xs font-normal pb-12'>
              Provide a network for all your needs with ease and fun 
              using <br /> LaslesVPN discover interesting features from us.
            </div>
            <button className='bg-red-500 text-white py-4 px-16 rounded-md drop-shadow-3xl'>
              Get Started
            </button>
          </div>
          <div>
              <img src={ilus1} alt="ilustration-laslesvpn"/>
          </div>
        </div>

        <div className="container max-w-5xl mx-auto grid grid-cols-3 shadow-2xl rounded-md py-4">
          {section3.map((val, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row py-4  space-x-6 justify-center ${
                  index + 1 !== section3.length && "border-r border-gray-200"
                }`}
              >
                <div className="rounded-full bg-red-100 p-3 ">
                  <img alt={val.lable} src={val.icon} className="w-6 h-6" />
                </div>
                <div>
                  <div>{val.total}</div>
                  <div>{val.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='container max-w-5xl mx-auto grid grid-cols-2 py-24 items-center'>
          <img src={ilus2} alt="ilus2"/>
          <div className="px-16 space-y-4 ">
            <div className="font-medium text-3xl">
              We Provide Many Features You Can Use
            </div>
            <div className="text-sm font-normal">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </div>
            {features.map((val,index) => {
              return (
                <div className='flex flex-row space-x-3 items-center'>
                  <div key={index}>
                    <img src={Check} alt='check' className='h-6 w-6' />
                  </div>
                  <div className='text-xs'>
                    {val}
                  </div>
                </div>
              )
            }
            )}
          </div>
        </div>
        
        <div className='py-24 bg-gray-50'>
          <TitleDesc 
            title={'Choose your plan'}
            desc={'Lets choose the package that is best for you and explore it happily and cheerfully.'}
          />
          
          <div className='container max-w-5xl grid grid-cols-3 mx-auto space-x-6'>
            {plans.map((val, index) => {
              return (
                <CardPlan 
                key={index}
                {...val}
                isSelect={index + 1 === plans.length}
                />
              )
            })}
          </div>
        </div>

        <div className='py-24'>
            <TitleDesc title={'Huge Global Network of Fast VPN'} desc={"See LaslesVPN everywhere to make it easier for you when you move locations."}/>
        </div>
        
      </main>
    </div>
  );
}

export default App;

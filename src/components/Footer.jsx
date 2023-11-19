import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (

    <footer className="bg-gray-700 text-white py-1">
      <div className="container mx-auto text-center">

        <div className='flex justify-center items-center py-5'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="50" viewBox="0 0 50 50" className='text-white'>
              <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"></path>
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="50" viewBox="0 0 50 50">
              <path d="M 16 3 C 8.8545455 3 3 8.8545455 3 16 L 3 34 C 3 41.145455 8.8545455 47 16 47 L 34 47 C 41.145455 47 47 41.145455 47 34 L 47 16 C 47 8.8545455 41.145455 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.054545 5 45 9.9454545 45 16 L 45 34 C 45 40.054545 40.054545 45 34 45 L 16 45 C 9.9454545 45 5 40.054545 5 34 L 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 37 11 C 35.9 11 35 11.9 35 13 C 35 14.1 35.9 15 37 15 C 38.1 15 39 14.1 39 13 C 39 11.9 38.1 11 37 11 z M 25 14 C 18.954545 14 14 18.954545 14 25 C 14 31.045455 18.954545 36 25 36 C 31.045455 36 36 31.045455 36 25 C 36 18.954545 31.045455 14 25 14 z M 25 16 C 29.954545 16 34 20.045455 34 25 C 34 29.954545 29.954545 34 25 34 C 20.045455 34 16 29.954545 16 25 C 16 20.045455 20.045455 16 25 16 z"></path>
            </svg>

          </div>

          <div className='md:px-6 px-3'>
            <FontAwesomeIcon icon={faGlobe} className='h-10 text-black'/>
          </div>

          <div className='md:px-6 px-3'>
            <FontAwesomeIcon icon={faPhone} className='h-10 text-black'/>
          </div>

          <div className='md:px-6 px-3'>
            <FontAwesomeIcon icon={faEnvelope} className='h-10 text-black'/>
          </div>

        </div>

        <p className="text-sm">&copy; 2023 Sima de las cotorras. Todos los derechos reservados.</p>

      </div>
    </footer>
  );
};

export default Footer;
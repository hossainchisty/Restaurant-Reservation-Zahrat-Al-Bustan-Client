import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-gray-50 py-4'>
      <div className='container flex items-center justify-center px-4 md:px-6'>
        <div className='flex items-center space-x-4'>
          <Link
            to=''
            className='flex items-center space-x-2 text-gray-900'
            rel='ugc'
          >
            <span className='font-semibold'>Zahrat al-Bustan</span>
          </Link>
        </div>
        <nav className='ml-auto'>
          <ul className='flex space-x-4 text-sm font-medium'>
            <li>
              <Link
                to={'/menu'}
                className='text-gray-900 hover:underline hover:text-gray-900'
                rel='ugc'
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to='/chef'
                className='text-gray-900 hover:underline hover:text-gray-900'
                rel='ugc'
              >
                Chef
              </Link>
            </li>
            <li>
              <Link
                to='/reservation'
                className='text-gray-900 hover:underline hover:text-gray-900'
                rel='ugc'
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link
                to='/feedback'
                className='text-gray-900 hover:underline hover:text-gray-900'
                rel='ugc'
              >
                Feedback
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

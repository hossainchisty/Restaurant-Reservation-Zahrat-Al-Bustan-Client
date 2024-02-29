const Menu = () => {
  const MenuItems = [
    {
      name: 'Caesar Salad',
      description:
        'Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing.',
      price: '$8.99',
      image:
        'https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/1:1/w_2800,h_2800,c_limit/0328-ceasar-salad-lede.jpg',
    },
    {
      name: 'Sushi Platter',
      description: 'Assorted sushi rolls with fresh fish, avocado, and rice.',
      price: '$16.99',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuLNx4OYs7aW6hhg6vJIiXpzhO9G1DdAvhm40Jc2EzOQ&s',
    },
    {
      name: 'BBQ Ribs',
      description:
        'Tender pork ribs smothered in barbecue sauce, served with coleslaw and cornbread.',
      price: '$18.99',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOTz9VUaMKRUzQuotaCKWz_NztKYBKkclGa27LGplAQ&s',
    },
    {
      name: 'Classic Burger',
      description:
        'Juicy beef patty with lettuce, tomato, and cheese, served with fries.',
      price: '$9.99',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxxMWgp3FOWNHsXRHOW1Y38XNTC4lbWcBEY4twn7mMWw&s',
    },
    {
      name: 'Margherita Pizza',
      description:
        'Traditional Italian pizza topped with tomato sauce, mozzarella, and fresh basil.',
      price: '$12.99',
      image:
        'https://www.onceuponachef.com/images/2020/06/Margherita-Pizza-scaled.jpg',
    },
    {
      name: 'Chicken Alfredo Pasta',
      description:
        'Creamy Alfredo sauce with grilled chicken breast served over penne pasta.',
      price: '$14.99',
      image:
        'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-06-chicken-alfredo-pasta-reshoot%2Fchicken-alfredo-pasta-2-vertical',
    },
  ];
  return (
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-semibold mb-10'>Our Menu</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {MenuItems.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-lg shadow-md overflow-hidden'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-48 object-cover object-center'
            />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>{item.name}</h3>
              <p className='text-gray-600 mb-2'>{item.description}</p>
              <p className='text-gray-800 font-semibold'>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

function ShopItems(props) {
    return (
      
        <div className="custom-shop-item">
          <div className="top-section w-full h-1/3"></div>
          <div className="center-section">
            <img src="img/shop/glasses.png" alt="Objet à acheter" className="center-image h-full" />
          </div>
          <div className="bottom-section flex flex-col items-center mb-4 ">
            <h1 className="extraBold800 text-center mt-4 mb-4">Lunettes de soleil</h1>
            <button className="text-white shopButton extraBold800 rounded-xl text-sm flex items-center justify-center p-2">
              Obtenir pour : <p className="shopText mx-2">1000</p>
              <img src="img/icon/coin.png" className='h-7' alt="coin make it blue" />
            </button>
          </div>
        </div>
     
    );
  }
  
  export default ShopItems;
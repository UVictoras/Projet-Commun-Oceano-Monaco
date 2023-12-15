function ShopItems(props) {
    return (
      <div className="col-start-2">
        <div className="custom-shop-item">
          <div className="top-section"></div>
          <div className="center-section">
            <img src="img/items.svg" alt="Objet à acheter" className="center-image" />
          </div>
          <div className="bottom-section flex flex-col items-center mb-4">
            <h1 className="extraBold800 text-center mt-4 mb-4">Lunettes de soleil</h1>
            <button className="text-white shopButton extraBold800 rounded-xl text-sm flex items-center justify-center w-[375px] h-[46px]">
              Obtenir pour : <p className="shopText flex-shrink-0 mx-2">1000</p>
              <img src="img/icon/coin.png" className='h-7' alt="coin make it blue" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ShopItems;
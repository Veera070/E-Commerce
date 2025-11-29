import Image from "next/image";

const Catalog = () => {
  return (
    <div>
      <div className="product-section">
      <div style={{display:'flex', gap:'200px'}}>
        <div className="category-tabs">
          <button>All Men's</button>
          <button>Men's Best Seller</button>
          <button>Men's Sale</button>
        </div>
        <div className="sub-tabs">
          <button>Top</button>
          <button>Bottom</button>
          <button>OuterWear</button>
          <button>Shoes</button>
          <button>Accessories</button>
        </div>
      </div>
      <div className="product-grid">
        <div>
          <Image src='/T-shirt.png' width={250} height={700} alt="t-shirt"/>
          <p >Oversized Men's tees</p>
          <p>60$</p>
        </div> 
        <div>
          <Image src='/Zip-Up.png' width={250} height={700} alt="zip-up"/>
          <p>Zip-Up's</p>
          <p>90$</p>
        </div>  
        <div>
          <Image src='/Trouser.png' width={245} height={700} alt="trouser"/>
          <p>Trousers</p>
          <p>120$</p>
        </div>
        <div>
          <Image src='/Jeans.png' width={250} height={700} alt="jeans"/>
          <p>Jean's</p>
          <p>200$</p>
        </div>
      </div>
      </div>
      <div className="flash-sale-bar2">
        <p> 2025 Flash Sale </p>
        <p> 12.00pm </p>
        <p> 2025 Flash Sale </p>
        <p> 12.00pm  </p>
        <p> 2025 Flash Sale  </p>
        <p> 12.00pm  </p>
        <p> 2025 Flash Sale  </p>
        <p> 12.00pm  </p>
        <p> 2025 Flash Sale  </p>
        <p> 12.00pm  </p>
        <p> 2025 Flash Sale  </p>
      </div>
    </div>
  );
};

export default Catalog;

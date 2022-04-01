import DealsProducts from "./DealsProducts"

function Deals() {
    return (
        <div className="card-container">
                
                    <DealsProducts 
                    image={"/img/pexels-ron-lach-10397680.jpg"}
                    itemName={"ADIDAS Sportswear"}
                    discount={"FLAT 60% OFF"}
                    />
                    <DealsProducts 
                    image={"/img/pexels-ron-lach-10397680.jpg"}
                    itemName={"HIGHLANDER Casuals"}
                    discount={"FLAT 70% OFF"}
                    />
                    <DealsProducts 
                    image={"/img/pexels-ron-lach-10397680.jpg"}
                    itemName={"HM funky"}
                    discount={"FLAT 80% OFF"}
                    />
                </div>  
    )
}

export default Deals
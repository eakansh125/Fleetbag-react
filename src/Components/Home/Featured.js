import FeaturedProducts from "./FeaturedProducts"


function Featured() {
    return (
        <div className="card-container">
                    <FeaturedProducts 
                    image={"/img/pexels-ron-lach-10397680.jpg"}
                    itemName={"WROGN Casual"}
                    itemDesc={"Slim fit checked casual shirt"}
                    />
                    <FeaturedProducts 
                    image={"/img/pexels-ron-lach-10397680.jpg"}
                    itemName={"FCUK Denim"}
                    itemDesc={"Slim fit checked casual shirt"}
                    />
                    <FeaturedProducts 
                    image={"/img/pexels-ron-lach-10397680.jpg"}
                    itemName={"Allen Solly Formals"}
                    itemDesc={"Slim fit checked casual shirt"}
                    />
                    <FeaturedProducts 
                    image={"/img/pexels-ron-lach-10397680.jpg"}
                    itemName={"Zara fashion"}
                    itemDesc={"Slim fit checked casual shirt"}
                    />
        </div>  
    )
}

export default Featured
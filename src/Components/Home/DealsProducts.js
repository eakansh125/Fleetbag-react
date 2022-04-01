
function DealsProducts({image ,itemName, discount}) {
    return (    
            <div className="card card-small gray-shadow">
                        <div className="card-upper">
                            <div className="image-vertical">
                                <img className="image-vertical-img-large" src={image} alt="stadium" />
                            </div>
                            <div className="text">
                                <div className="text-heading">
                                    <h3 className="font-bold font-xl margin-no">{itemName}</h3>
                                    <p className="font-bold margin-top-small">{discount}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-lower">
                            <div className="card-footer">
                                <div className="card-lowerLeft">
                                    <p className="font-bold">BUY</p>
                                    <p className="font-bold">ADD</p>
                                </div>
                                <div className="card-lowerRight">
                                    <img src="https://img.icons8.com/ios/18/000000/like--v1.png" alt="icons"/>
                                    <img src="https://img.icons8.com/material/18/000000/share--v1.png" alt="icons"/>
                                    <img src="https://img.icons8.com/material/18/000000/menu-2--v1.png" alt="icons"/>
                                </div>
                            </div>
                        </div>
                    </div>        
    )
}

export default DealsProducts
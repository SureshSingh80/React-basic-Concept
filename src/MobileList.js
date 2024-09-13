import './MobileList.css';
export default function MobileList({image_url,title,price}){
    return(
        <div className="mob-container">
            <div>
                <img src={image_url}></img>
                <p>Title:{title}</p>
                <p>price:{price}</p>
                <button>Add to cart</button>
                

            </div>
        </div>
        
    )
}
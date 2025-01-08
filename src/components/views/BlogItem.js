export default function BlogItem(props) {
    return (
        <div className="col">
            <div className="card shadow h-100">
                <img src={`http://localhost:3002/${props.imgUrl}`} style={{"objectFit": "cover"}} height="250px" className=" card-img-top" alt="Wrong Path" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
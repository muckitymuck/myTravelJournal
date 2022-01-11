import React from "react"

export default function Card(props) {
    
    return (
        <div className="card">
            <img className="card--image" src={props.item.imageUrl} />
            <div className="card--info">
                <div className="card--location">
                    <span><img className="mappoint" src="pngwing.com.png" />  <p className="card--country">{props.item.location}  <a href={props.item.googleMapsUrl} className="card--googlemaps">View On Google Maps</a></p></span>
                </div>
                <div className="card--title">
                    <span>{props.item.title}</span>
                </div>
                <div className="card--stats">
                    <p><span className="card--date-range">{props.item.startDate} - {props.item.endDate}</span></p>
                </div>
                <span><p className="card-description">{props.item.description}</p></span>
            </div>
            
        </div>
    )
    
}
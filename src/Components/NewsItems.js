import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let {title , desc, imageUrl, newsUrl} = this.props;
        return (
            
            <div>
                <div className="card mt-5" style={{width: '18rem'}}>
                    <img className="card-img-top" src={imageUrl} alt='' />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{desc}</p>
                            <a href={newsUrl} target='_blank'  rel="noreferrer" className="btn btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class YoutubeEmbed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            link: "https://www.youtube.com/embed/".concat(props.id)
        }

    }

    render() {
        return (
            <div style={{margin: '5%' ,  alignItems: "center", backgroundColor:"#212121", paddingTop:"2%",paddingBottom:"2%", boxShadow:"5px 5px 15px 5px #777777"}}>
                <h2 style={{ color: 'white', marginBottom: "2%"}}>{this.props.title}</h2>
                <div className="video-responsive">
                    <iframe
                    width="853"
                    height="480"
                    src={this.state.link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
            </div>
        )
    }
}

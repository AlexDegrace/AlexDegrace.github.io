import React, { Component } from 'react'
import YoutubeEmbed from './YoutubeEmbed'

export default class Tutorials extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos : [{id:"EMR7mVL_C04", title:"All Weapons Beginner Combos", visble : true},
            {id:"q_OSfiuGtng", title:"Sword Guide", visble : true},
            {id:"p3esRkvGrDQ", title:"Gautlet Guide", visble : true},
            {id:"5GD-H5REmzc", title:"Scythe Guide", visble : true},
            {id:"5Vt_HHDWZis", title:"Orb Guide", visble : true},
            {id:"4Bnt7gCkkQc", title:"Hammer Guide", visble : true},
            {id:"SxuQ78YoQq0", title:"Rocket Lance Guide", visble : true},
            {id:"UMtuEP7hEJE", title:"Spear Guide", visble : true},
            {id:"EmdVJ3VuFvA", title:"Katar Guide", visble : true},
            {id:"O7ZHlSN2QZ4", title:"Bow Guide", visble : true},
            {id:"9kIyguISV4g", title:"Axe Guide", visble : true},
            {id:"eLZXaV_SMoM", title:"Cannon Guide", visble : true},
            {id:"hsknAG8KOdc", title:"Great Sword Guide", visble : true},
        ]
        }

    }

    sortVideo = (videos) => (event) => {
        let newVideos = [];
        var i;
        if(event.target.value.length == 0){
            for(i =0; i < videos.length; i++ ){
                newVideos.push(videos[i]);
                newVideos.visble =true;
            }
        }
        else{
            
            for(i =0; i < videos.length; i++ ){
                console.log(event.target.value);
                console.log(videos[i].title)
                if(videos[i].title.toLowerCase().includes(event.target.value.toLowerCase())){
                    newVideos.push(videos[i]);
                    newVideos[i].visble = true;
                }
                else{
                    newVideos.push(videos[i]);
                    newVideos[i].visble = false;
                }
            }
        }
        console.log(newVideos[5]);
        this.setState({videos:newVideos});

    }

    render() {
        return (
            <div style={{ minHeight:"1080px"}}>
                <div style={{ paddingTop:"2%", paddingBottom:"2%", margin: '5%', backgroundColor: "#121212"}}>
                    <h2 style={{color:"white", marginBottom:"2%"}}>Tutorials</h2>
                    <input type="text" placeholder="Search" onChange={this.sortVideo(this.state.videos)}></input>
                {this.state.videos.map((video) => {  
                            if(video.visble) {
                                return (<><div class="videoMain"><YoutubeEmbed id={video.id} title={video.title}></YoutubeEmbed></div></>);
                            } 
                            })}
                </div>
            </div>
        )
    }
}

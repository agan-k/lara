import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class Modal extends Component {
   constructor(props) {
      super(props)
      this.state = {
         count: null
      }
   }
   componentDidMount() {
      this.setState({
         count: this.props.index
      })
   }
   render() {
      return (
         <div onClick={() => this.props.handleCloseModal()}
            style={{
            position: 'fixed',
            top: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            zIndex: '999'
            }}>
            
            {this.props.photos ? 
            <div style={{ width: '70%', margin: '2rem auto', textAlign: 'center'}}>                  
               <img src={this.props.photos.results[this.props.index].data.img.url} style={{height: '500px', boxShadow: '0 .2px 5px black'}} />
               </div> :
            (this.props.videos) ?
            <div style={{
               width: 'min-content', margin: '2rem auto', textAlign: 'center',
               backgroundColor: 'red'
            }}>
               <ReactPlayer
                  className='react-player'
                  url={this.props.videos.results[this.props.index].data.video_link[0].text}
                  controls
                  />
               <style jsx>{`
                  .react-player {
                  margin: 0 auto;
                  }
               `}</style>
            </div> : ''
            } 
         </div>
      )
   }
}


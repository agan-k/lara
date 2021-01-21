import React, { Component } from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import Prismic from "prismic-javascript"
import { client } from "../prismic-configuration"
import Modal from '../components/modal'

export default class Videos extends Component {
   constructor(props) {
      super(props)
      this.state = {
         showModal: false
      }
   }
   handleShowModal = (index) => {
      this.setState({
         showModal: !this.state.showModal,
         index: index
      })
   }
   handleCloseModal = () => {
      this.setState({
         showModal: !this.state.showModal,
         index: null
      })
   }
   render() {
      const videos = this.props.videos.results.map((video, index) => (
         <div className='thumbnail-container' key={video.uid} style={{height: '5rem', cursor: 'pointer'}}>
            <img onClick={() => this.handleShowModal(index)} src={video.data.video_thumb.url} alt="video thumbnail" />
            <style jsx>{`
               .thumbnail-container {
                  opacity: .7;
                  overflow: hidden;
                  margin: .1rem;
               }
               .thumbnail-container:hover {
                  opacity: 1;
                  transition: .7s;
               }
               .thumbnail-container img {
                  height: 110%;
               }
            `}</style>
         </div>
      ))
      console.log(videos)
      return (
         <Layout>
            <Head>
               <title>Lara Bello</title>
               <link rel="icon" href="/favicon.ico" />
            </Head> 
           <div style={{ display: 'flex', flexWrap: 'wrap',
               justifyContent: 'center', margin: '4rem auto',
            }}>
               {videos}
            </div>

            {this.state.showModal && (
               <Modal
                  {...this.props}
                  handleCloseModal={this.handleCloseModal}
                  index={this.state.index}
               /> 
            )}
         </Layout>
       )
   }
}

export async function getStaticProps() {
   const video_gallery = await client.getSingle("videos")
   const videos = await client.query(
     Prismic.Predicates.at("document.type", "video"),
     { orderings: "[my.post.date desc]" }
   )
   return {
     props: {
       video_gallery,
       videos,
     },
   }
 }
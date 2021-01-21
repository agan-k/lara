import React, { Component } from 'react'
import Layout from '../components/layout'
import Prismic from "prismic-javascript";
import { client } from "../prismic-configuration";
import Modal from '../components/modal'

export default class Photos extends Component {
   constructor(props) {
      super(props)
      this.state = {
         showModal: false
      }
      console.log(props)
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
      const photos = this.props.photos.results.map((photo, index) => (
         <div className='thumbnail-container' key={photo.uid}
            style={{
               width: '12rem', height: '12rem',
               overflow: 'hidden', cursor: 'pointer',
         }}>
            <img onClick={() => this.handleShowModal(index)}
               src={photo.data.img.url} alt="avatar image" height="320px"
            />
            <style jsx>{`
               .thumbnail-container {
                  opacity: .7;
               }
               .thumbnail-container:hover {
                  opacity: 1;
                  transition: .7s;
               }
               
               `}</style>
            
         </div>
      ))
      console.log(photos)
      return (
         <Layout>
           <div style={{
               display: 'flex',
               flexWrap: 'wrap',
               justifyContent: 'center',
               margin: '8rem auto',
            }}>
               {photos}
            </div>

            {this.state.showModal && (

               <Modal
                  {...this.props}
                  handleCloseModal={this.handleCloseModal}
                  index={this.state.index}
               /> 
            )}
             
         </Layout>
       );
   }
}
export async function getStaticProps() {
   const photo_gallery = await client.getSingle("photos")
   const photos = await client.query(
     Prismic.Predicates.at("document.type", "photo"),
     { orderings: "[my.post.date desc]" }
   )
   return {
     props: {
       photo_gallery,
       photos,
     },
   }
 }
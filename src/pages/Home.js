import React from 'react'
import { gql, useQuery} from '@apollo/client'
import {Grid } from 'semantic-ui-react'
import PostCard from '../components/PostCard'

const FETCH_POSTS_QUERY = gql`
query getPosts {
  getPosts{
      id body createdAt username likeCount
      likes{
          username
      }
      commentCount
      comments{
          id username createdAt body
      }
  }
}

`


export default function Home() {
    const {loading,error,data:{getPosts:posts}} = useQuery(FETCH_POSTS_QUERY)
    if(posts){
        console.log(posts)
    }else {
        console.log('something went wrong...')
    }
    return (
        <Grid columns='three' >
            <Grid.Row className="page-title">
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
              {loading?(
                  <h1>Loading Posts..</h1>
              ):(posts&&posts.map(post=>(
                  <Grid.Column key={post.id} style={{marginBottom:20}}>
                      <PostCard post={post}/>
                  </Grid.Column>
              )))}
               </Grid.Row>
            </Grid>
    )
}

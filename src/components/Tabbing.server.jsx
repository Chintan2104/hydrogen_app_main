import React, { Suspense } from 'react'
import RenderTabbingComp from './RenderTabbingComp.client'
import { Link, Image, gql, useShopQuery, CacheLong, Seo } from "@shopify/hydrogen";

const CollectionTab = () => {
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });

  return (
    <>
      <Suspense>
        <Seo type='collections' data={collections} />
      </Suspense>
      <RenderTabbingComp collections={collections} />
    </>
  )
}
export default CollectionTab

const QUERY = gql`
query FeaturedCollections {
  collections(first: 3, sortKey: UPDATED_AT) {
    nodes {
      id
      title
      handle
      products(first:10 ){
        nodes{
          id
          handle
          title
           images(first:1){
            nodes{
              width
              height
              url
            }
          }
        }
      }
    }
  }
}
`;
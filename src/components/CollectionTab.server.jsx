import React from 'react'
import RenderTabbingComp from './RenderTabbingComp.client'
import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";

const CollectionTab = () => {
    const {
        data: { collections },
    } = useShopQuery({
        query: QUERY,
        cache: CacheLong(),
    });
    return (
        <RenderTabbingComp products={collections} />
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
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;
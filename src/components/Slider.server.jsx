import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
import { useState } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import RenderCollectionComp from "./RenderSliderComp.client";

export default function FeaturedCollections() {
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });
  return (
    <RenderCollectionComp product={collections} />
  );
}

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

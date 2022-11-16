import { Link } from "@shopify/hydrogen";
import { Suspense } from "react";
import FeaturedCollections from "../components/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";
import ServerTest from "./ServerTest.server";
import CollectionSlider from '../components/CollectionSlider.server'
import CollectionTab from "../components/CollectionTab.server";
export default function Home() {
  return (
    <Layout>
      <Suspense>
        <CollectionSlider />
        <CollectionTab />
        <ServerTest />
      </Suspense>
    </Layout>
  );
}

{/* <FeaturedCollections/> */ }
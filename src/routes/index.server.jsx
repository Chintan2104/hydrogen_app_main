import { Link } from "@shopify/hydrogen";
import { Suspense } from "react";
import { Layout } from "../components/Layout.server";
import ServerTest from "./ServerTest.server";
import Slider from '../components/Slider.server'
import Tabbing from "../components/Tabbing.server";
export default function Home() {
  return (
    <Layout>
      <Suspense>
        <Slider />
        <Tabbing />
        {/* <ServerTest /> */}
      </Suspense>
    </Layout>
  );
}

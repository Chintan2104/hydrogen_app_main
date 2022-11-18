import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Image, Link } from "@shopify/hydrogen";

const Client = ({ collections }) => {
  return (
    <Tabs className='text-center mt-10 text-slate-500 dark:text-slate-400 mt-2 text-md '>
      <TabList >
        {
          collections.nodes.map((collections) => {
            return (
              <>
                <Tab id='1'  key={collections.handle}>{collections.title}</Tab>
              </>
            )
          })
        }
      </TabList>
      {
        collections.nodes.map((collections, k) => {
          return (
            <>
              <TabPanel key={k} className='myCls'>{
                collections.products.nodes.slice(0, 3).map((data, k) => {
                  return <>
                    <Link key={k} to={`/products/${data.handle}`} className='flex flex-col  items-center'>
                      <h1 className="m-2 text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{data.title}</h1>
                      {
                        data.images.nodes.map((val) => {
                          return <Image
                            className='rounded aspect-[5/4] md:aspect-[3/2] object-cover'
                            alt='img'
                            height={"200px"}
                            width={"275px"}
                            data={val}
                          />
                        })
                      }
                    </Link>
                  </>
                })
              }
              </TabPanel>
            </>
          )
        })
      }

    </Tabs>
  )
}

export default Client


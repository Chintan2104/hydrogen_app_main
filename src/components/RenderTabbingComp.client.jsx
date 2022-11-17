import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Image, Link } from "@shopify/hydrogen";

const Client = ({ collections }) => {
  return (
    <Tabs className='text-center mt-10'>
      <TabList >
        {
          collections.nodes.map((collections) => {
            return (
              <>
                <Tab id='1' key={collections.handle}>{collections.title}</Tab>
              </>
            )
          })
        }
      </TabList>
      {
        collections.nodes.map((collections,k) => {
          return (
            <>
              <TabPanel key={k} className='myCls'>{
                collections.products.nodes.slice(0,3).map((data,k) => {
                  return <>
                    <Link key={k} to={`/products/${data.handle}`}>
                      <h1>{data.title}</h1>
                      <div className=" ">
                        {
                          data.images.nodes.map((val) => {
                            return <Image
                              className='m-2'
                              alt='img'
                              height={170}
                              data={val}
                            />
                          })
                        }
                      </div>
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


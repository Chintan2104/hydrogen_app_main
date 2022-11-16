import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, Image } from '@shopify/hydrogen';

const RenderTabbingComp = ({ products }) => {
  return (
    <Tabs className='text-center mt-10'>
      <TabList >
        {
          products.nodes.map((collections) => {
            return (
              <>
                <Tab>{collections.title}</Tab>
              </>
            )
          })
        }
      </TabList>

      {
        products.nodes.map((collection) => {
          return (
            <TabPanel>
              <Link key={collection.id} to={`/collections/${collection.handle}`}>
                <div className="flex justify-around mt-10">
                  {collection?.image && (
                    <Image
                      className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                      height={336}
                      alt={`Image of ${collection.title}`}
                      data={collection.image}
                    />
                  )}
                </div>
              </Link>
            </TabPanel>
          )
        })
      }

    </Tabs>
  )
}

export default RenderTabbingComp
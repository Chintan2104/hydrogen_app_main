import { Link } from '@shopify/hydrogen';
import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import { Image } from "@shopify/hydrogen";

const NewCom = ({ product }) => {
    console.log(product);
    return (
        <AwesomeSlider className='h-96'>
            {product.nodes.map((collection) => {
                return (
                    <div className=" ">
                        {collection?.image && (
                            <Link key={collection.id} to={`/collections/${collection.handle}`}>
                                <Image
                                    className=""
                                    width={"100%"}
                                    height={336}
                                    alt={`Image of ${collection.title}`}
                                    data={collection.image}
                                />
                                <h1 className="whitespace-pre-wrap text-6xl max-w-prose font-medium text-copy text-white absolute bottom-10" style={{ left: '40%' }} >
                                    {collection.title}
                                </h1>
                            </Link>
                        )}
                    </div>
                )
            })
            }
        </AwesomeSlider>
    )
}

export default NewCom
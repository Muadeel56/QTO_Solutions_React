import React from 'react'
import comercial from '../../assets/images/comercial.png'

function CommitmentToValue() {
  return (
    <div className='w-full'>
        <div className="flex flex-col space-y-8 text-center px-10 mx-20 mt-10 justify-center items-center">
            <div>
                <h1>Our Commitment to Value</h1>
                <p>At QTO House, we deliver precision-driven quantity takeoff services and comprehensive construction estimating
                    support to businesses across all construction domains and CSI categories. 
                    Our expertise is tailored to elevate your project planning and execution.
                </p>
            </div>
            <div className='flex space-x-10'>
                <div>
                    <div className='flex'>
                        <p>Icon</p>
                        <div className='flex flex-col space-y-2'>
                            <h1>Forge Your Bid with Confidence:</h1>
                            <p>Craft bids that stand distinguished in the arena 
                                of competitive bidding with QTO House as your ally
                                in estimation.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <p>Icon</p>
                        <div className='flex flex-col space-y-2'>
                            <h1>Streamlined Estimating:</h1>
                            <p>Redirect your energy to the projects that matter most. 
                                We handle the intricacies of estimated, ensuring timely, 
                                accurate and detailed outcomes.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <p>Icon</p>
                        <div className='flex flex-col space-y-2'>
                            <h1>Precision Empowerment:</h1>
                            <p>QTP House i your strategic partner, enhancing your estimates with the precision you
                                need to win and manage contracts assertively.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <p>Icon</p>
                        <div className='flex flex-col space-y-2'>
                            <h1>Reliable Estimating Partners:</h1>
                            <p>At QTO House, precision and diligence define our services,
                                ensuring you recieve comprehensive support for every bid.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <p>Icon</p>
                        <div className='flex flex-col space-y-2'>
                            <h1>Bid Better, Win More:</h1>
                            <p>Harness our estimation expertise to craft compelling bids that secure
                                your success in the cut-throat construction market.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={comercial} alt="commercial"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommitmentToValue
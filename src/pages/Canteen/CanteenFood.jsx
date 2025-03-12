import React from 'react'

function CanteenFood(props) {
    return (
        <div className='
         bg-white w-fit inline-flex flex-row px-9 py-4 gap-x-1 rounded-2xl
            hover:scale-105 active:scale-95 transition-all cursor-pointer
         '>
            {/* <div className='w-25 '>
                <img src={props.image} className='w-fit  rounded-2xl' />

            </div> */}
            <div className={`flex text-fuchsia-700 font-semibold flex-col items-center justify-center gap-y-1 text-md font-sans`}>
                <div>{props.food}</div>
                <div>Price: {props.price} Rs</div>
            </div>
        </div>
    )
}

export default CanteenFood
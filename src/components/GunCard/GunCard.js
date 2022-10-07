import React from 'react';

const GunCard = ({gun,handlePlus}) => {
    const {name,img,category,action} = gun;
    console.log(gun)
    return (
        <div className='mt-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-52 h-52' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{category}</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div> 
                    <div className="badge badge-outline">Products</div>
                    </div>
                    <div className='flex gap-3 '>
                    <button onClick={handlePlus} className="btn w-20">Buy</button>
                    <button className="btn btn-secondary">Details</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default GunCard;
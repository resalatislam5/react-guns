import React from 'react';
import {useState} from 'react';
import Model from '../../Model/Model';

const GunCard = ({gun,handlePlus}) => {
    const [handleGun, setHandleGun] = useState({});
    const {name,img,category} = gun;
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
                    <label onClick={() => setHandleGun(gun)}  htmlFor="my-modal-3" className="btn modal-button btn-secondary">Details</label>
                    </div>
                </div>
                </div>
                    { handleGun && (<Model handleGun = {handleGun} setHandleGun = {setHandleGun}></Model>)}
        </div>
    );
};

export default GunCard;
import React from 'react';
import { useState, useEffect } from 'react'
const AllGuns = () => {
    const [loadGuns, setGuns] = useState();
    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <div>
                <h1 className="text-4xl text-center font-bold mt-4">Welcome To Guns Store</h1>
                <p className='text-center py-4 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae tenetur dignissimos, <br /> voluptas dolore ipsa sit explicabo eum aliquam aperiam sint numquam quos aliquid amet omnis exercitationem nihil molestias temporibus nisi?</p>
            </div>
            <div>
                {
                    
                }
            </div>
        </div>
    );
};

export default AllGuns;
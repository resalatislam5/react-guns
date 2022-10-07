import React from 'react';

const Model = (props) => {
    const {handleGun, setHandleGun} = props;
    console.log(handleGun)
    const {name,category} = handleGun;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label onClick={() => setHandleGun(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="py-4">{category}</p>
            </div>
            </div>
        </div>
    );
};

export default Model;
import React from 'react'

const CheckBox = () => {
    return (
        <div>
            <div className="apple_check">
                <input type="checkbox" name="apple" id="apple" />
                <label className='apple_text' htmlFor="apple">Apple</label>
            </div>
        </div>
    )
}

export default CheckBox
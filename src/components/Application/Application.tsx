import React from 'react'

const Application = () => {
    return (
        <>
        <h1>Job Application Form</h1>
        <h2>Step 1</h2>
        <p>All Fields Are Mandatory</p>
        <span title='close'>X</span>
        <img src="http://www.google.com" alt="an person" />
        <form action="">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='FullName' value={'Chandru'} onChange={()=>{}}/>
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <textarea name='bio' id='bio' />
            </div>
            <div>
                <label htmlFor="job-location">Job Location</label>
                <select id="">
                    <option value="">Select a Country</option>
                    <option value="US">United States</option>
                    <option value="IND">India</option>
                    <option value="CAN">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="GB">United Kingdom</option>
                </select>
            </div>
            <div>
                <label >
                    <input type="checkbox" id='terms'/>
                    I Agree to the terms and conditions
                </label>
            </div>
            <button>Submit</button>
        </form>
        </>
    )
}

export default Application
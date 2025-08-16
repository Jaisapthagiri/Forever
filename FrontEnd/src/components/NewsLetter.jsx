import React from 'react'

const NewsLetter = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe Now and get 20% Off</p>
            <p className='text-gray-400 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non modi ratione repellat illo? Ad nesciunt vitae corporis rerum deserunt non.</p>
            <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input
                    type="email"
                    placeholder="Enter Mail"
                    className="w-full sm:flex-1 outline-none"
                    required
                />
                <button type='submit' className='bg-gray-600 text-white text-md hover:bg-gray-900 px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetter
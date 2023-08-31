import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete} = props 
    let renderXMarkIcon
    if (handleDelete) {
        <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
    }

    return (
    <div className='bg-white border border-gray-300 rounded-lg shadow-md p-4 flex justify-between items-center mb-4'>
        <div className='flex items-center gap-4'>
            <figure className='w-16 h-16 overflow-hidden rounded-lg'>
                <img className='w-full h-full object-cover' src={imageUrl} alt={title} />
            </figure>
            <div className='flex flex-col max-w-xs'>
            <p className='text-xs font-light break-words'>{title}</p>
            <p className='text-lg font-medium'>{price}</p>
            </div>
        </div>
        <div className='flex items-center gap-4'>
            {renderXMarkIcon}
        </div>
    </div>
)
}

export default OrderCard
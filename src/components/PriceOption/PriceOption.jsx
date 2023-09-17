
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name , price ,features} = option;
    return (
        <div className='bg-blue-300 rounded-md p-4 flex flex-col text-white'>
            <h2 className='text-center'>
                <span className="text-4xl font-extrabold">{price}</span>
                <span className="text-xl">/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
           <div className='pl-6 flex-grow'>
           {
                features.map((feature,idx )=><Feature key={idx} feature={feature}></Feature>)
            }
           </div>
           <button className='mt-12 bg-green-600 w-full py-4 rounded-lg hover:bg-slate-700'>Buy now </button>
        </div>
    );
};
PriceOption.propTypes ={
    option:PropTypes.object
}
export default PriceOption;
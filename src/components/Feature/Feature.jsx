
import PropTypes from 'prop-types';
import { AiFillSafetyCertificate } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'>
                <AiFillSafetyCertificate className='text-green-500 mr-2'></AiFillSafetyCertificate>
                {feature}
                </p>
        </div>
    );
};
Feature.propTypes ={
   feature:PropTypes.string
}

export default Feature;
import PropTypes from 'prop-types';

const LInk = ({route}) => {
    return (
        <li className="mr-6 hover:bg-yellow-600 px-6">
            <a href={route.path}></a>{route.name}</li>
    );
};
LInk.propTypes ={
    route:PropTypes.object
}
export default LInk;
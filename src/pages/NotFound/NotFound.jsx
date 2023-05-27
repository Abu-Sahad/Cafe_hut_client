import notFoundImg from '../../assets/3828537.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notFoundBody'>
            <div>
                <div className='ms-5'>
                    <h1 className='text-center'>404 - Page Not Found</h1>
                    <p className='text-center'>The page you are looking for does not exist.</p>
                </div>
                <div className='notFound'>
                    <img src={notFoundImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
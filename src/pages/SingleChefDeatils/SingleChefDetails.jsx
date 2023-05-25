import { useLoaderData, useParams } from "react-router-dom";
import SingleChefDeatil from "../SingleChefDeatil/SingleChefDeatil";
import { Row } from "react-bootstrap";

const SingleChefDetails = () => {
    const { id } = useParams
    const chefSingleDetails = useLoaderData()
    console.log(chefSingleDetails)
    return (
        <div className="container">
            {/* <h1>this is single details page</h1> */}
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    chefSingleDetails.map(cefSingle => <SingleChefDeatil
                        key={cefSingle._id}
                        cefSingle={cefSingle}
                    ></SingleChefDeatil>)
                }
            </Row>
        </div>
    );
};

export default SingleChefDetails;
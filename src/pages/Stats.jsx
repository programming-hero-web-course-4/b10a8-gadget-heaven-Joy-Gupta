import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

const Stats = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics</title>
            </Helmet>
            <Navbar/>
            <Heading title='Statistics' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'/>
        </div>
    );
};

export default Stats;
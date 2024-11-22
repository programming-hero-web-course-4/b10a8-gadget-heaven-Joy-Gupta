import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statictics = () => {

    const accesories = useLoaderData();






    return (
        <div>
            <div className="text-center bg-[#9538E2] text-white py-10">
                <h1 className='lg:text-5xl font-bold'>Statistics</h1>
                <p>Explore the latest gadgets statictics.</p>
            </div>
                <h2 className="text-2xl font-semibold mx-5">Total Gadget: {accesories.length}</h2>

        <div className='w-full h-full items-center justify-center     my-3'>
                
            <ResponsiveContainer width={1300} height={400}>
                        <BarChart data={accesories}>
                              
                              <XAxis dataKey="title" />
                              <YAxis dataKey="price"/>
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="price" fill="#8884d8" />
                        </BarChart>
                  </ResponsiveContainer>

            </div>

            
        </div>
    );
};

export default Statictics;
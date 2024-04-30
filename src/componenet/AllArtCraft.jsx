import { useLoaderData } from "react-router-dom";
import TableRow from "./TableRow";


const AllArtCraft = () => {

    const tableData = useLoaderData();



    //min-h-[calc(100vh-367px)]

    return (
        <div className="overflow-x-auto min-h-[calc(100vh-367px)]  ">
  <table className="table">
    {/* head */}
    <thead className="lg:text-xl md:text-lg  text-gray-400">
      <tr>
        <th></th>
        <th>Item Name</th>
        <th>Subcategory</th> 
        <th>Price</th>
        <th>Rating</th>
        <th>Stock Status</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
         {
            tableData.map((data,ind) => <TableRow
              key={data._id}
              data={data}
              index={ind}

            ></TableRow>)
         }
    </tbody>
  </table>
</div>
    );
};

export default AllArtCraft;
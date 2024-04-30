import { Link } from "react-router-dom";


const TableRow = ({data,index}) => {

    const {_id,subCategory,item,price,rating,stockStatus} = data;

    return (
        
            <tr className="text-xs md:text-base">
                <td>{index + 1}</td>
                <td>{item}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{stockStatus}</td>
                <td>
                    <Link to={`/view/${_id}` } >
                        {/* View Details */}
                        <button className="btn btn-link">View Details</button>
                        </Link>
                </td>
            </tr>
            
        
    );
};

export default TableRow;
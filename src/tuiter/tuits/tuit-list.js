import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../../services/tuits-thunks";


const TuitList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk()) }, [dispatch])

    return(
        <div>
            <ul className="list-group">
            {
                loading && <li className="list-group-item"> Loading... </li>
            }
            </ul>
            {

                tuits.map((post) => <TuitItem key={post._id} post={post}/>)
            }
        </div>
        );
    };
export default TuitList;
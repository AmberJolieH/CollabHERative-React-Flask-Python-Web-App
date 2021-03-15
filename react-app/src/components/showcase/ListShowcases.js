/** @jsx jsx */
import {Link} from "react-router-dom";
import { jsx } from "@emotion/react";
import * as showcaseActions from "../../store/showcase"
import { useSelector, useDispatch} from "react-redux"
import {useEffect} from "react"
import CenterCard from "../centerCard/centerCard";

// const componentMap = {
// 		'UX/UI Design':
//         'Product Marketing/Product Management':
//         'Software (Full Stack/Front End/Back End)':
//         'Cloud Computing':
//         'Cybersecurity':
//         'Data Analytics/Data Science':
//         'Tech Sales/Tech Procurement':
//         'AI/Machine Learning/Automation':
    
// }

const ListShowcases = ({ events, isFetching = false }) => {
	const dispatch = useDispatch();
	const showcases = useSelector((state)=> state.showcases)
	useEffect(() => {
		dispatch(showcaseActions.listshowcases())
	},[dispatch])
	return (<div style={isFetching ? { opacity: 0.7 } : {}}>
		<CenterCard>
			
				
		<h1 style={{marginLeft:"2rem"}}> Community Project Showcase </h1>
		{Object.values(showcases).map((showcases) => (
			<div style={{padding:"1rem", display:"flex", justifyContent:"center"}}>
				<div className="box">
				<a  key={showcases.id}>
					<h2>{showcases.title}</h2>
					<Link to={`/showcases/${showcases.id}`}>
						View Project
					</Link>
				</a>
				</div>
			</div>
		))}
			
		
		</CenterCard>
	</div>)
};




// const CommunityShowcase = () => {
// 	const dispatch = useDispatch();
// 	const eventsByEventCategoryId = useSelector(
// 		(state) => state.events.eventsByEventCategoryId
// 	);

// 	useEffect(() => {
// 		dispatch(eventActions.fetchEventsIfNeeded(""));
// 	}, [dispatch]);

// 	const { isFetching, items: events } = eventsByEventCategoryId[""] || {
// 		isFetching: true,
// 		items: [],
// 	};
export default ListShowcases;
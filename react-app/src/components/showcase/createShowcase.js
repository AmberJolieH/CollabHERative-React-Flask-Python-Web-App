/** @jsx jsx */
import React, {useState} from "react";
import { jsx } from "@emotion/react";
import { createShowcase } from "../../store/showcase";
import {useDispatch, useSelector} from "react-redux"
import CenterCard from "../centerCard/centerCard"

const CreateShowcase = () => {
    const dispatch = useDispatch();
    const [techCategoryId, setTechCategoryId] = useState('')
    const [description, setDescription] = useState('')
    const [skill,setSkills] = useState('')
    const [showcaseImgUrl, setshowcaseImgUrl] = useState('')
    const [title, setTitle] = useState('')
    const userId = useSelector(state => state.session.user?.id)

const onSubmit = async (e)=> {
    e.preventDefault()
    const showcase = await dispatch(createShowcase({
        techCategoryId:1,
        description,
        skill:"language",
        showcaseImgUrl,
        title,
        userId
    }))
    console.log('test showcase create working', showcase)
}
    
    const cat = [
        'UX/UI Design',
        'Product Marketing/Product Management',
        'Software (Full Stack/Front End/Back End)',
        'Cloud Computing',
        'Cybersecurity',
        'Data Analytics/Data Science',
        'Tech Sales/Tech Procurement',
        'AI/Machine Learning/Automation',
    ]
 const [CatName, setCatName] = useState(cat[0])
  
 return (
        <CenterCard>
        <div>
            <h2>Create a showcase</h2>
            <form
            onSubmit={onSubmit}
                
                >
                    <label>Title: </label>
                <input
                    name="title"
                    type="text"
                    placeholder="showcase title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                    <label>Description: </label>
                <input
                    name="description"
                    type="text"
                    placeholder="description of showcase"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                
                <label>Select a relative tech category: </label>
                <select
                    name="techCatName"
                    type="text"
                    value={CatName}
                    onChange={e => setCatName(e.target.value)}
                >
                {cat.map((cat)=> {
                    return (
                        <option
                        key={cat}
                        value={cat}
                        >
                            {cat}
                        </option>
                    )
                })}
                </select>
                <button>post showcase</button>
            </form>
        </div>
    </CenterCard>
    )
}

export default CreateShowcase;
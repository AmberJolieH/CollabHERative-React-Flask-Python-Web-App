/** @jsx jsx */
import React, {useState} from "react";
import { jsx } from "@emotion/react";
import { createshowcase } from "../../services/showcase";

const CreateShowcase = () => {
    const [techCategoryId, setTechCategoryId] = useState('')
    const [description, setDescription] = useState('')
    const [skill,setSkills] = useState('')
    const [showcaseImgUrl, setshowcaseImgUrl] = useState('')


const onSubmit = async (e)=> {
    e.preventDefault()
    const showcase = await createshowcase({
        techCategoryId,
        description,
        skill,
        showcaseImgUrl
    })
}
    console.log('test showcase create working')

    

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
        <div>
            <h2>Create a showcase</h2>
            <form
            onSubmit={onSubmit}
                
                >
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
                    value={cat}
                    onChange={e => setCatName(e.target.value)}
                >
                {techCategoryId.map((cat)=> {
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
    )
}

export default createshowcase;
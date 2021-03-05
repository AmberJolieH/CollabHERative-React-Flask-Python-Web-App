/** @jsx jsx */
import React, {useState} from "react";
import { jsx } from "@emotion/react";
import { createshowcase } from "../../services/showcase";

const createShowcase = () =>{
    const [techCategoryId, setTechCategoryId] = useState('')
    const [description, setDescription] = useState('')
    const [skill,setSkills] = useState('')
}

const onSubmit = async (e)=> 
    e.preventDefault()
    const resource = await createshowcase({
        techCategoryId
    })
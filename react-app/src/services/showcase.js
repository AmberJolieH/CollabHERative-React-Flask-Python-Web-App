export const createShowcase = async ({techcategoryId, description, skill, showcaseImgUrl, title}) => {
    const response = await fetch('/api/showcase/create_showcase', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            techcategoryId,
            description,
            skill,
            showcaseImgUrl,
            title
        })
    })
    return await response.json();
}

export const listshowcases = async ()=>{
    const response = await fetch('/api/showcases', {
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json();
}


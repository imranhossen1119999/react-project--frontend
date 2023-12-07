import './stories.scss'

const Stories = () => {

    const stories =[
        {
            id:1,
            name:"John Doe",
            img:"/src/assets/images/hurry.jpg"
        },
        {
            id:2,
            name:"John Doe",
            img:"/src/assets/images/hurry.jpg"
        },
        {
            id:3,
            name:"John Doe",
            img:"/src/assets/images/hurry.jpg"
        },
        {
            id:4,
            name:"John Doe",
            img:"/src/assets/images/hurry.jpg"
        },
    ];

    return (
        <div className='stories'>
            {stories.map(story =>{
                <div className='story'>
                    <img src={story.img} alt=''/>
                    <span>{story.name}</span>
                </div>
            })}
        </div>
            
        
    );
};

export default Stories;
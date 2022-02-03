import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Stonified",
        src: "https://avatars.githubusercontent.com/u/32543950?s=400&v=4",
        profile: "https://avatars.githubusercontent.com/u/32543950?s=400&u=649a7bcec0ca51a59d8310643c3a5e7eb7f5fb86&v=4"
        
    },
    {
        name: "Felix Ivance",
        src: "https://avatars.githubusercontent.com/u/15850969?v=4",
        profile: "https://avatars.githubusercontent.com/u/9800409?v=4",
    },
    {
        name: "David Milai",
        src: "https://avatars.githubusercontent.com/u/34280333?v=4",
        profile: "https://avatars.githubusercontent.com/u/19909399?v=4",
    },
    {
        name: "Titto Mitto",
        src: "https://avatars.githubusercontent.com/u/29174832?v=4",
        profile: "https://avatars.githubusercontent.com/u/18606080?v=4",
    },
    {
        name: "Brian Mutinda",
        src: "https://avatars.githubusercontent.com/u/68685699?v=4",
        profile: "https://avatars.githubusercontent.com/u/19410009?v=4",
    },
]
function Stories (){
    return(
        <div className="flex justify-center space-x-3 mx-auto">
            {
                stories.map(
                    story=>( <StoryCard 
                        key={story.src} 
                        name={story.map} 
                        src={story.src} 
                        profile={ story.profile} />)
                )
            }

        </div>
    )
}

export default Stories 
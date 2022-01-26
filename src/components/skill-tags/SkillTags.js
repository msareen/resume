export default function SkillTags(props) {
    return(
        <div>
        {
            ((tags) => {
                let className = props.className ? props.className :  'bg-success';
                if (tags) {
                    let skillTags = tags.map((tag) => {
                        return (
                            <span>
                                <span className={`${className} badge rounded-pill mr-1`}>{tag}</span>{' '}
                            </span>)
                    })
                    return skillTags;
                }
            })(props.tags)
        }
        </div>
    )
}
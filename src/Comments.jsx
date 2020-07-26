import React from 'react';
import Disqus from "disqus-react"

function Comments(props) {
    console.log(props.url, "card-" + props.identifier, props.title);
    return (
        <Disqus.CommentCount
            shortname='lean-cards'
            config={
                {
                    url: props.url,
                    identifier: "card-" + props.id,
                    title: props.title,
                }
            }
        >
            {/* Placeholder Text */}
    Comments
        </Disqus.CommentCount>
    )
}

export default Comments;
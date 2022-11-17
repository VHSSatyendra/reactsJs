import './Card.css'

const Card = (props) => {

    // This syntax allows to set default Card styling and also the additional styles that's been applied from the child components
    const classes = "card " + props.className;

    return(
        <div className={classes}>{props.children}</div>
    )
}

export default Card;
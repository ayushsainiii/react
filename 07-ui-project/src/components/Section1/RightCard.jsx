import RightCardContent from './RightCardContent';

const RightCard = (props) => {
    return (
        <div className='h-full w-80 shrink-0 rounded-4xl relative overflow-hidden'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            
            <RightCardContent id={props.id} color={props.color} tag={props.tag} intro={props.intro}/>

        </div>
    )
}

export default RightCard

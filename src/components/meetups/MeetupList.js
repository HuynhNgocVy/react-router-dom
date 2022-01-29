import '../layout/MainNavigation.modules.css'
import MeetupItem from './MeetupItem';
function MeetupList(props) {
    return (
        <ul className='list'>
            {props.meetups.map((meetup) =>( 
            <MeetupItem 
                key={meetup.id} 
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                decription={meetup.decription}
            /> 
            
            ))}
        </ul>
    )
}
export default MeetupList;

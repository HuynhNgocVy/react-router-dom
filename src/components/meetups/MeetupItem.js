import '../layout/MainNavigation.modules.css'
import Card from '../../ui/Card';
function MeetupItem(props) {
    return (
        <li>
            <Card>
                <div className='container__list'>
                    <div className='image'>
                        <img src={props.image} alt={props.title}/>
                    </div>
                    <div className='content'>
                        <h3>{props.title}</h3>
                        <address>{props.address}</address>
                        <p>{props.decription}</p>
                    </div>
                    <div className='actions'>
                        <button>To Favorites</button>
                    </div>
                </div>
            </Card>
        </li>
    )
}
export default MeetupItem;

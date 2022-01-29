import NewMeetupForm from "../components/meetups/NewMeetupFrom";
// import { useHistory } from "react-router-dom";
import history from "../history";  //Sẽ dẫn tới trang khác khi hoàn thành xong
function NewMeetupPages() {
        
    const handleAddMeetup = (meetupData) => {
        fetch(
            'https://react-getting-started-b6081-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                header: {
                    'Content-Type':'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        })
    }
    
    return (
    <section>
        <h1 style={{fontSize:"2rem", fontWeight:"bold", color:"#a50e48", textAlign:"center" }}>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
    )
}
export default NewMeetupPages;

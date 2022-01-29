import Card from "../../ui/Card";
import './NewMeetupForm.module.css'
import { useRef } from 'react'
function NewMeetupForm(props) {
    const titleInput = useRef()
    const imageInput = useRef()
    const addressInput = useRef()
    const decripInput = useRef()
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const enteredTitle = titleInput.current.value;
        const enteredImage = imageInput.current.value;
        const enteredAddress = addressInput.current.value;
        const enteredDecrip = decripInput.current.value;

        const meetupData = {
            title:enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            decription: enteredDecrip
        }
        props.onAddMeetup(meetupData);
    }
    return (
    <Card>
        <form className="form" onSubmit={handleSubmit}>
            <div className="control">
                <label htmlFor="title" >Meetup Title</label>
                <input type="text" required id="title" ref={titleInput}/>
            </div>
            <div className="control">
                <label htmlFor="image" >Meetup Image</label>
                <input type="url" required id="image" ref={imageInput}/>
            </div>
            <div className="control">
                <label htmlFor="address" >Address</label>
                <input type="text" required id="address" ref={addressInput}/>
            </div>
            <div className="control">
                <label htmlFor="decription" >Decription</label>
                <textarea id='decription' required rows='5' ref={decripInput}> </textarea>
            </div>
            <div className="actions" style={{textAlign:"right"}}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
    )
}
export default NewMeetupForm;

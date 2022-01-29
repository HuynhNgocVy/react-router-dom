import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect, useRef } from 'react'
const DUMMY_DATA = [
    {
        id: 1,
        title: "This is a first meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Midtown_Manhattan_Skyline_seen_from_Wall_Street.jpg/1200px-Midtown_Manhattan_Skyline_seen_from_Wall_Street.jpg",
        address: 'Meetupstreet 5, 12345 Meetup City',
        decription: "Thành phố New York là thành phố lớn nhất tiểu bang New York, Hoa Kỳ. Tên chính thức City of New York, là thành phố đông dân nhất tại Hoa Kỳ và trung tâm của Vùng đô thị New York, một trong những vùng đô thị đông dân nhất trên thế giới."
    },
    {
        id: 2,
        title: "This is a first meetup",
        image: "https://www.planetware.com/wpimages/2020/04/scotland-top-rated-cities-edinburgh.jpg",
        address: 'Scotland City',
        decription: "Edinburgh (Ê-đin-brơ) là thủ đô của Scotland và là thành phố lớn thứ hai của Scotland. Thành phố nằm ở Đông Nam của Scotland, bờ Đông Vành đai miền Trung của Scotland, bên bờ Nam của vịnh Firth of Forth, bờ Biển Bắc."
    }
]
function AllMeetupPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedMeetups, setLoadedMeetups] = useState([])
    const meetups = useRef([]);
    const arrayMeetups = useRef([]);

    useEffect(() => {
        fetch(
            'https://react-getting-started-b6081-default-rtdb.firebaseio.com/meetups.json',
        ).then(responsse => 
            responsse.json()
        ).then(data => {
            
            for(const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }; 
                meetups.current.push(meetup)
            }
            arrayMeetups.current = DUMMY_DATA.concat(meetups.current)
            setIsLoading(false);
            setLoadedMeetups(data)
        })

    }, [])
    // const array = meetups.pu
    if(isLoading) { //câu lệnh điều khiển chờ khi load data
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    return (
        <section>
            <h1 style={{display:"flex", justifyContent:"center"}}>All Meetups</h1>
            <MeetupList meetups={arrayMeetups.current} />
        </section>
    )
}
export default AllMeetupPage;

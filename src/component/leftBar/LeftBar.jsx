import './leftBar.scss';
import Friends from '../../assets/images/friends.png';
import Groups from '../../assets/images/groups.png';
import Market from '../../assets/images/marketplace.png';
import Watch from '../../assets/images/watch.png';
import Memories from '../../assets/images/memories.png';
import Events from '../../assets/images/events.png';
import Gaming from '../../assets/images/gaming.png';
import Gallery from '../../assets/images/gallery.png';
import Videos from '../../assets/images/videos.png';
import Messages from '../../assets/images/messages.png';
import Tutorials from '../../assets/images/tutorials.png';
import Courses from '../../assets/images/courses.png';
import Fund from '../../assets/images/fundraiser.png';
import { AuthContext } from '../../context/authContext';
import {useContext} from 'react';


const LeftBar = () => {

    const {currentUser}=useContext(AuthContext);

    return (
        <div className='leftBar'>
            <div className='container'>
                <div className='menu'>
                    <div className='user'>
                    <img src={currentUser?.profilePic} alt=''/>
                        <span>{currentUser?.name}</span>
                    </div>
                    <div className='item'>
                        <img src={Friends} alt=''/>
                        <span>Friends</span>
                    </div>
                    <div className='item'>
                        <img src={Groups} alt=''/>
                        <span>Groups</span>
                    </div>
                    <div className='item'>
                        <img src={Market} alt=''/>
                        <span>Marketplace</span>
                    </div>
                    <div className='item'>
                        <img src={Watch} alt=''/>
                        <span>Watch</span>
                    </div>
                    <div className='item'>
                        <img src={Memories} alt=''/>
                        <span>Memories</span>
                    </div>
                </div>
                <hr/>
                <div className='menu'>
                    <span>Your shortcuts</span>
                    <div className='item'>
                        <img src={Events} alt=''/>
                        <span>Events</span>
                    </div>
                    <div className='item'>
                        <img src={Gaming} alt=''/>
                        <span>Gaming</span>
                    </div>
                    <div className='item'>
                        <img src={Gallery} alt=''/>
                        <span>Gallery</span>
                    </div>
                    <div className='item'>
                        <img src={Videos} alt=''/>
                        <span>Videos</span>
                    </div>
                    <div className='item'>
                        <img src={Messages} alt=''/>
                        <span>Messages</span>
                    </div>
                </div>
                <hr/>
                <div className='menu'>
                    <span>Others</span>
                    <div className='item'>
                        <img src={Fund} alt=''/>
                        <span>Fundraiser</span>
                    </div>
                    <div className='item'>
                        <img src={Tutorials} alt=''/>
                        <span>Tutorials</span>
                    </div>
                    <div className='item'>
                        <img src={Courses} alt=''/>
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
            
        
    );
};

export default LeftBar;
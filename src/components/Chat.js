import React from 'react'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import NoProfile from '../assets/imgs/no-profile.png';
import Torahack from '../assets/imgs/v2AugOoQ_400x400.jpg';


const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';
   return(
    <ListItem className={classes}>
      <ListItemAvatar>
          {isQuestion ? (
              <Avatar alt="icon" src={Torahack} />
          ):(
              <Avatar alt="icon" src={NoProfile} />
          )}
        
      </ListItemAvatar>
          <div classname ="p-chat_bubble">{props.text}</div>
    </ListItem>
   )
}

export default Chat
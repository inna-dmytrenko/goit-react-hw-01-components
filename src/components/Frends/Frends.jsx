import { friendsList } from '../../utils/friends';
import { FriendsList, Item, Status, Avatar, Name } from './Frends.styles';
import { Aside } from '../../components/User/User.styles';

function Friends() {
  return (
    <Aside>
      <FriendsList>
        {friendsList.map(({ avatar, name, isOnline }) => (
          <Item key={name}>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt={name} width="48" />

            <Name>{name}</Name>
          </Item>
        ))}
      </FriendsList>
    </Aside>
  );
}

export default Friends;

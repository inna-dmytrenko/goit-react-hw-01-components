import { friendsList } from '../../data/friends';

function Friends() {
  return (
    <ul class="friend-list">
      {friendsList.map(({ avatar, name, isOnline }) => (
        <li class="item">
          <span class="status">{isOnline}</span>
          <img class="avatar" src={avatar} alt={name} width="48" />

          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}
export default Friends;

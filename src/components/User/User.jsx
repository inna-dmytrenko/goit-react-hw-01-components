import React from 'react';
import user from '../../data/user.json';
import {
  Aside,
  Profile,
  Description,
  Image,
  Name,
  Tag,
  Location,
  Status,
  StatusList,
  Labele,
  Quantity,
} from '../../components/User/User.styles';

function User() {
  return (
    <Aside>
      <Profile>
        <Description>
          <Image
            src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
            alt="Аватар пользователя"
          />
          <Name>{user.name}</Name>
          <Tag>{user.tag}</Tag>
          <Location>{user.location}</Location>
        </Description>

        <Status>
          <StatusList>
            <Labele>Followers</Labele>
            <Quantity>{user.stats.followers}</Quantity>
          </StatusList>
          <StatusList>
            <Labele>Views</Labele>
            <Quantity>{user.stats.views}</Quantity>
          </StatusList>
          <StatusList>
            <Labele>Likes</Labele>
            <Quantity>{user.stats.likes}</Quantity>
          </StatusList>
        </Status>
      </Profile>
    </Aside>
  );
}
export default User;

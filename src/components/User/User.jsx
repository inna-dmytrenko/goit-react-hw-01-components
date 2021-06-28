import React from 'react';
import PropTypes from 'prop-types';
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

function User({
  avatar = user.avatar,
  name = user.name,
  tag = user.tag,
  location = user.location,
  followers = user.stats.followers,
  views = user.stats.views,
  likes = user.stats.likes,
}) {
  return (
    <Aside>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      >
        <Description>
          <Image src={avatar} alt={name} />
          <Name>{name}</Name>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <Status>
          <StatusList>
            <Labele>Followers</Labele>
            <Quantity>{followers}</Quantity>
          </StatusList>
          <StatusList>
            <Labele>Views</Labele>
            <Quantity>{views}</Quantity>
          </StatusList>
          <StatusList>
            <Labele>Likes</Labele>
            <Quantity>{likes}</Quantity>
          </StatusList>
        </Status>
      </Profile>
    </Aside>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
Profile.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
};
export default User;

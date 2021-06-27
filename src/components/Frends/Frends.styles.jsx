import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: grid;
  justify-content: center;
  text-align: center;
`;
export const Item = styled.li`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  width: 380px;
  background-color: #e1f3e2;
  padding: 10px;
  cursor: pointer;
  /* vertical-align: middle; */
  /* justify-content: right; */
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 20px;
  background-color: ${props => (props.isOnline ? 'teal' : 'palevioletred')};
  margin-right: 16px;
  /* display: grid;
  justify-content: center; */
`;
export const Avatar = styled.img`
  margin-right: 16px;
  /* vertical-align: middle; */
  /* display: grid;
  justify-content: center; */
`;
export const Name = styled.p`
  font-size: 20px;

  /* text-align: center; */
  /* display: grid;
  justify-content: center; */
`;

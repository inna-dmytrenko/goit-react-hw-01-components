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
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 20px;
  background-color: ${props => (props.isOnline ? 'teal' : 'palevioletred')};
  margin-right: 16px;
`;
export const Avatar = styled.img`
  margin-right: 16px;
`;
export const Name = styled.p`
  font-size: 20px;
`;

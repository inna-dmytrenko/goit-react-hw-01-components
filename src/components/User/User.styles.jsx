import styled from '@emotion/styled';
export const Aside = styled.aside`
  width: 400px;
  background-color: #caf5d2;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
export const Profile = styled.div`
  padding: 20px;
  background-color: #ebf3f3;
`;
export const Description = styled.div`
  /* display: flex; */
  text-align: center;
  margin-bottom: 10px;
`;
export const Image = styled.img`
  margin-bottom: 20px;
  width: 120px;
  height: 120px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #010101;
  margin-bottom: 5px;
  /* margin-left: 16px; */
  /* &:hover {
    color: #ff6b0a;
  } */
  /* width: 120px;
  height: 120px; */
`;
export const Tag = styled.p`
  font-size: 20px;
  /* font-weight: 700; */
  color: #686464;
  margin-bottom: 5px;
  /* margin-left: 16px; */
  /* width: 120px;
  height: 120px; */
`;
export const Location = styled.p`
  font-size: 20px;
  /* margin-bottom: 5px; */
  /* font-weight: 700; */
  color: #686464;
  /* width: 120px;
  height: 120px; */
`;
export const Status = styled.ul`
  font-size: 20px;
  /* margin-bottom: 5px; */
  /* font-weight: 700; */
  color: #686464;
  /* width: 120px;
  height: 120px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const StatusList = styled.li`
  display: grid;
  text-align: center;
  background-color: #ffffff;
  /* margin: 1px; */
  padding: 10px;
  border: thick double #32a1ce;
`;
export const Labele = styled.span`
  font-size: 16px;
`;
export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

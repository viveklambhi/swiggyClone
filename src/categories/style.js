import styled from 'styled-components';

export const SideBar = styled.div``;

export const CategoryList = styled.ul`
  width: 300px;
  list-style-type: none;
  padding: 0;
  box-shadow: 0.5px 0.5px 5px 1px grey;
  position: sticky;
  top: 9rem;
`; 

export const CategoryItem = styled.li`
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
  font-size: 1.8rem;
  text-transform: capitalize;
  line-height: 2.2rem;
  background-color: ${props=>props.active ? '#e46d47': '#fff'};
  color: ${props=>props.active ? '#fff': '#000'};
  cursor: pointer;
  span {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.6rem;
  }
`; 
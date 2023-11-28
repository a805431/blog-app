import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

export const PostContainer = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

export const Title = styled.h2`
  color: #007bff;
`;

export const Author = styled.p`
  color: #555;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ReadButton = styled.button`
  padding: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
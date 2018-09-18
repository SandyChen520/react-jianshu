import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width:960px;
  height:300px;
  margin:0 auto;
`;
export const HomeLeft = styled.div`
  float: left;
  width:625px;
  padding-top:30px;
  margin-left: 15px;
  height:300px;
  .banner-img{
    width: 100%;
    height:275px;
    img{
      display: inline-block;
      width:100%;
      height:100%;
    }
  }
`;
export const HomeRight = styled.div`
  width:240px;
  float:right;
  background:red;
`;
// topic
export const TopicWrapper = styled.div`
  padding:20px 0 10px 0;
`;
export const TopicItem = styled.div`
  float:left;
  margin:0 10px 10px 0;
  height:32px;
  padding:0 10px;
  background:#f7f7f7;
  line-height:32px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  font-size:14px;
  &:hover{
    cursor: pointer;
  }
`;
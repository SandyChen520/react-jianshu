import styled from 'styled-components';
import logoPic from '../../static/logo.png';
export const HeaderWrapper = styled.div`
  position:relative;
  height: 56px;
  border-bottom:1px solid #ccc;
  background: #fff;
`;
export const Logo = styled.a.attrs({href:'/'})`
  position: absolute;
  left:30px;
  top:0;
  display: block;
  width:100px;
  height: 56px;
  background: url(${logoPic}) no-repeat center;
  background-size: contain;
`;

export const Nav = styled.div`
  width:960px;
  height:100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin:0 auto;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding:0 10px;
  color: #333;
  &.left {
    float:left;
  }
  &.right{
    float: right;
    color:#999;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position:relative;
`;
export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:56px;
  width:180px;
  padding:10px 15px;
  box-shadow: 0 0 10px 0 #ccc;
  background:#fff;
`;
export const SearchInfoTitle = styled.div`
  font-size:14px;
  color:#999;
  line-height:32px;
`;
export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
  &:hover{
    cursor:pointer;
  }
  .spin{
    float:left;
    font-size:20px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;
export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  padding:5px;
  border:1px solid #ccc;
  margin:0 10px 10px 0;
  font-size:12px;

`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  padding:0 20px;
  box-sizing: border-box;
  background:#eee;
  border:none;
  outline:none;
  color: #333;
  margin-top:9px;
  border-radius: 19px;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
  &.slide-enter {
    width:160px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
`;

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`;

export const Button = styled.div`
  float:right;
  height:38px;
  line-height: 38px;
  border-radius: 19px;
  border:1px solid #ec6149;
  font-size:14px;
  padding: 0 20px;
  margin:9px 10px;
  &.reg {
    color: #ec6149;
  }
  &.write{
    color:#fff;
    background: #ec6149;
  }
`
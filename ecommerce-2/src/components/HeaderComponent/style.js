import styled from "styled-components";
import { Row } from "antd"

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: rgb(56,34,15);
    align-items: center;
    gap: 20px;
    flex-wrap: nowrap;
`

export const WrapperTextHeader = styled.span`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    text-align: left;
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
`

export const WrapperTextHeaderSmall =styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover  {
      
        color: #967259;
    }



`
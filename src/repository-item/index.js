import React from "react";
import * as S from "./styled"


const RepositoryItem = ({ name, linkToRepo, fullName }) =>{
    return <S.Wrapper>
        <S.WrapperTitle>{ name }</S.WrapperTitle>
        <S.WrapperFullname>fullname: </S.WrapperFullname>
        <S.WrapperLink href={linkToRepo} 
        rel="noopener noreferrer">
        {fullName}
        </S.WrapperLink>
    </S.Wrapper>
};

export default RepositoryItem;
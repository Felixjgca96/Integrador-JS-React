import Link from "../../components/UI/Link/Link";

import {
  FoundContainerStyled,
  FoundSubtitleStyled,
  FoundTextStyled,
  FoundTitleStyled,
} from "./PageNotFoundStyles";

const PageNotFound = () => {
  return (
    <div>
      <FoundContainerStyled>
        <FoundTextStyled>
          <FoundTitleStyled>404 Error</FoundTitleStyled>
          <FoundSubtitleStyled>
            ¡No existe la pagina que buscas!
          </FoundSubtitleStyled>
          <p>Parece que la página que buscás no existe o fue removida</p>
          <Link />
        </FoundTextStyled>
        <img src="./logo.png" alt="" className="imgNotFound" />
      </FoundContainerStyled>
    </div>
  );
};

export default PageNotFound;

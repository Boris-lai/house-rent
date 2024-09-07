import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StyledSectionFaq = styled.section`
  background-color: var(--color-grey-100);
  padding-bottom: 2rem;
`;

const StyledFaq = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const H3 = styled.h3`
  padding-top: 3rem;
  font-size: 3.6rem;
  text-align: center;

  @media (max-width: 44em) {
    font-size: 2.4rem;
  }
`;

const FaqContent = styled.div``;

const FaqGroup = styled.div`
  border-bottom: 1px solid var(--color-grey-100);
  padding-bottom: 0.2rem;
`;

const FaqGroupHeader = styled.div`
  padding: 2rem 0;
  margin-bottom: 0.8rem;
  position: relative;
`;

const H4 = styled.h4`
  font-size: 2rem;
  line-height: 1.4;
  font-weight: normal;
  margin: 2.4rem 0 0.8rem;

  @media (max-width: 44em) {
    font-size: 1.4rem;
  }
`;

const StyledPlusIcon = styled.div`
  position: absolute;
  right: -2.6rem;
  top: 4.4rem;
  cursor: pointer;
`;

const FaqGroupContent = styled.div``;

const FaqContentBody = styled.p`
  color: var(--color-grey-400);
  font-size: 1.6rem;
  font-weight: lighter;

  @media (max-width: 44em) {
    font-size: 1.2rem;
  }
`;

function SectionFaq() {
  const [open, setIsOpen] = useState(false);
  const [iconId, setIconId] = useState("");

  const handleClick = (e) => {
    const { iconId } = e.target.dataset;

    setIconId(iconId);

    setIsOpen(!open);

    // console.log(iconPlus.current);
    // if (iconPlus) setClicked(true);
  };

  //   onClick={() => setIsOpen((show) => !show)}

  return (
    <StyledSectionFaq id="qaquetion">
      <StyledFaq>
        <H3>常見問題 FAQ 🤔</H3>
        {/* <ul className="faq-menu">
          <li className="active">All</li>
          <li>Getting Started</li>
          <li>Pricing</li>
        </ul> */}
        <FaqContent>
          <FaqGroup>
            <FaqGroupHeader>
              <H4>Q: 如何註冊並使用租賃管理平台？</H4>
              <StyledPlusIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  size="2x"
                  data-icon-id="1"
                  onClick={handleClick}
                />
              </StyledPlusIcon>
            </FaqGroupHeader>
            <FaqGroupContent>
              {iconId === "1" && open ? (
                <FaqContentBody>
                  A:
                  您可以透過我們的網站註冊帳戶。註冊後，您可以將您的租賃物件上傳至平台，並使用我們的工具來管理租約、收取租金和與租戶溝通。
                </FaqContentBody>
              ) : (
                ""
              )}
            </FaqGroupContent>
          </FaqGroup>
          <FaqGroup>
            <FaqGroupHeader>
              <H4>Q: 如何上傳和管理租賃物件的資訊？</H4>
              <StyledPlusIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  size="2x"
                  data-icon-id="2"
                  onClick={handleClick}
                />
              </StyledPlusIcon>
            </FaqGroupHeader>
            <FaqGroupContent>
              {iconId === "2" && open ? (
                <FaqContentBody>
                  A:
                  登入您的帳戶後，進入「物件管理」頁面，點擊「新增物件」，並填寫相關資訊，如物件地址、租金、照片等。完成後，您可以隨時編輯或更新這些資訊。
                </FaqContentBody>
              ) : (
                ""
              )}
            </FaqGroupContent>
          </FaqGroup>

          <FaqGroup>
            <FaqGroupHeader>
              <H4>Q: 我可以透過平台自動收取租金嗎？</H4>
              <StyledPlusIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  size="2x"
                  data-icon-id="3"
                  onClick={handleClick}
                />
              </StyledPlusIcon>
            </FaqGroupHeader>
            <FaqGroupContent>
              {iconId === "3" && open ? (
                <FaqContentBody>
                  A:
                  是的，我們的平台支持自動收取租金。您可以設定自動收款功能，並選擇租戶每月的支付日期。我們將自動生成發票並向租戶發送付款通知。
                </FaqContentBody>
              ) : (
                ""
              )}
            </FaqGroupContent>
          </FaqGroup>
          <FaqGroup>
            <FaqGroupHeader>
              <H4>Q: 平台如何幫助我處理租戶投訴或維修請求？</H4>
              <StyledPlusIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  size="2x"
                  data-icon-id="4"
                  onClick={handleClick}
                />
              </StyledPlusIcon>
            </FaqGroupHeader>
            <FaqGroupContent>
              {iconId === "4" && (
                <FaqContentBody>
                  A:
                  租戶可以透過平台提交維修請求或投訴。我們會將這些請求轉發給您，您可以直接與租戶聯繫並安排處理。平台還提供工單管理功能，幫助您跟進和記錄維修進度。
                </FaqContentBody>
              )}
            </FaqGroupContent>
          </FaqGroup>
          <FaqGroup>
            <FaqGroupHeader>
              <H4>Q: 如果租戶逾期未付款，我該怎麼辦？</H4>
              <StyledPlusIcon>
                <FontAwesomeIcon
                  icon={faPlus}
                  size="2x"
                  data-icon-id="5"
                  onClick={handleClick}
                />
              </StyledPlusIcon>
            </FaqGroupHeader>
            <FaqGroupContent>
              {iconId === "5" && open ? (
                <FaqContentBody>
                  A:
                  如果租戶未按時付款，平台會自動發送催繳通知給租戶。您也可以選擇啟動法律程序，平台會提供相關的法律文件範本和流程指引，以幫助您處理欠租問題。
                </FaqContentBody>
              ) : (
                ""
              )}
            </FaqGroupContent>
          </FaqGroup>
        </FaqContent>
      </StyledFaq>
    </StyledSectionFaq>
  );
}

export default SectionFaq;

import { useDormitoryServiceGetDormitoreById } from "@/shared/api/openApi/queries";
import { Header } from "@/widgets/Header/Header";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export const DormitoryPage = () => {

    const { id } = useParams();
    const { data, isLoading } = useDormitoryServiceGetDormitoreById({ id: id as string })

    const Navigate = useNavigate()


    return (
      <>
      <Header />
        <Div>
            <Div3>{data?.title}</Div3>
            <Div4>
                <Div5>
                    <Column>
                        <Div6>
                            <div style={{display: 'flex', flexDirection:'column', height: '180px', justifyContent: 'space-around'}}>
                                {/* <h1>Контакты</h1> */}
                               <h1>Контакты</h1>
                            
                               <p>Номер: 8-(989)-999-99-99</p>
                           
                               <p>Почта: mmmmmmm@mail.ru</p>
                               <p>Местонахождение: там, где хорошо</p>
                            </div>
                            <Div13>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odio tempore molestiae exercitationem odit voluptatem consequuntur eveniet, consequatur recusandae voluptas obcaecati est. Sapiente nisi, nam non dolor repellat possimus aliquid?.
                            </Div13>
                            <Div14>
                                <Div15 onClick={() => Navigate('/panorama')}>Осмотреть общежитие в 3D</Div15>
                                <Img3
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/283c8ac47dd9b75edfd0cdd5097f87e8d3cc8f4090d6b2c32eb1c12fa412722c?"
                                />
                            </Div14>
                        </Div6>
                    </Column>
                    <Column2>
                        <Img4
                            loading="lazy"
                            src="https://lh5.googleusercontent.com/proxy/-Tjgdvay8JySNQsTiEk3P2Y_gSL-A6icnqnmRscx5xhErSRUEvSzrB_6blt2_ItPk5hgy-7TLwcLZx4kI43orAac5OjO_sIv0PtcLkNPwoCLQS3KSlIWfsaxkPiBceIQUBYBb9t4MAiOJPC8Hg"
                        />
                    </Column2>
                </Div5>
            </Div4>
        </Div>
      </>
      
    );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Div3 = styled.div`
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #1a1a1a;
  margin-top: 30px;
  width: 100%;
  font: 700 70px RoadRadio, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Div4 = styled.div`
  margin-top: 76px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div5 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 41%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div6 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-size: 17px;
  color: var(--Text-color, #b6b6b6);
  font-weight: 700;
  line-height: 100%;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div7 = styled.div`
  align-self: start;
  display: flex;
  gap: 20px;
  font-size: 14px;
  white-space: nowrap;
  justify-content: space-between;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div8 = styled.div`
  display: flex;
  gap: 7px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img = styled.img`
  aspect-ratio: 1.33;
  object-fit: auto;
  object-position: center;
  width: 24px;
  stroke-width: 1.5px;
  stroke: var(--Text-color, #b6b6b6);
  border-color: rgba(182, 182, 182, 1);
  border-style: solid;
  border-width: 2px;
`;

const Div9 = styled.div`
  font-family: RoadRadio, sans-serif;
  margin: auto 0;
`;

const Div10 = styled.div`
  display: flex;
  gap: 7px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div11 = styled.div`
  font-family: RoadRadio, sans-serif;
  margin: auto 0;
`;

const Div12 = styled.div`
  color: var(--White, #fff);
  margin-top: 29px;
  font: 42px Gilroy, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div13 = styled.div`
  font-family: Gilroy, sans-serif;
  font-weight: 500;
  line-height: 26px;
  margin-top: 37px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div14 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 38px;
  gap: 9px;
  color: var(--Yellow, #fddd0a);
  font-weight: 400;
`;

const Div15 = styled.div`
  font-family: RoadRadio, sans-serif;
  flex-grow: 1;
`;

const Img3 = styled.img`
  aspect-ratio: 0.91;
  object-fit: auto;
  object-position: center;
  width: 10px;
  stroke-width: 1.5px;
  stroke: var(--Yellow, #fddd0a);
  border-color: rgba(253, 221, 10, 1);
  border-style: solid;
  border-width: 2px;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 59%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

const Img4 = styled.img`
  aspect-ratio: 1.82;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
  }
`;

const Img5 = styled.img`
  aspect-ratio: 16.67;
  object-fit: auto;
  object-position: center;
  width: 1094px;
  margin-top: 52px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;



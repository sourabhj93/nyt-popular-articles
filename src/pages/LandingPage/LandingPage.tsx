import { CSSProperties, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { getListOfArticles } from "../../services/api";
import Select from "../../common/Select/Select";
import { ArticleListView } from "../../components/ArticleListView/ArticleListView";
import "./LandingPage.css";

const override: CSSProperties = {
  display: "block",
  margin: "140px auto",
  borderColor: "blue",
};

export const LandingPage = () => {
  const [popularArticleList, setPopularArticleList] = useState([]);
  const [selectedPeriodValues, setSelectedPeriodValues] = useState("1");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getListOfArticles(selectedPeriodValues);
      setPopularArticleList(response);
    };

    fetchData();
  }, [selectedPeriodValues]);

  const clickHandler = (data: string) => {
    navigate("/detailedArticle", { state: data });
  };

  return (
    <>
      {popularArticleList?.length === 0 ? (
        <ClipLoader
          color={"#ffffff"}
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <div className="selectSection">
            <Select
              selectedOption={selectedPeriodValues}
              setSelectedOption={setSelectedPeriodValues}
            />
          </div>
          <div className="containerSection">
            {popularArticleList?.map((item: any, index: number) => (
              <ArticleListView
                key={item.id}
                item={item}
                index={index}
                handleClick={clickHandler}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

import React, { useEffect, useState } from "react";
import "./rewievs.scss";
import { getReviews } from "../../../API/mockPublicAPI";
import ReviewCard from "./ReviewCard";
import strings from "../../../constants/strings";
import ListIndicator from "../../reusable/ListIndicator/ListIndicator";
import { HTTP_STATUS } from "../../../constants/contacts";

const Reviews = () => {
  const [content, setContent] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviews()
      .then((res) => {
        if (res.status === HTTP_STATUS.SUCCESS) {
          setContent(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="reviews">
      <div className="reviews__wrapper">
        <div className="reviews__inner">
          <div className="reviews__title">
            {strings.reviews_from_our_clients}
          </div>
          <div className="reviews__cards">
            {content.map((item, index) => (
              <ReviewCard key={index} data={item} isLoading={isLoading} />
            ))}
          </div>
        </div>
        <ListIndicator pointAmount={3} activePoint={page} setPoint={setPage} />
      </div>
    </div>
  );
};

export default Reviews;

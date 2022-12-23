import React, {useEffect, useState} from 'react';
import "./rewievs.scss";
import {getReviews} from "../../../API/PublicAPI";
import ReviewCard from "./ReviewCard";
import strings from "../../../constants/strings";
import ListIndicator from "../../reusable/ListIndicator/ListIndicator";

const Reviews = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        setContent(getReviews());
    }, [])
    return (
        <div className="reviews">
            <div className="reviews__wrapper">
                <div className="reviews__inner">
                    <div className="reviews__title">{strings.reviews_from_our_clients}</div>
                    <div className="reviews__cards">
                    {content.map(item => (<ReviewCard key={item.id} data={item}/>))}
                    </div>
                </div>
                <ListIndicator pointAmount={3} activePoint={page} setPoint={setPage}/>
            </div>
        </div>
    );
};

export default Reviews;
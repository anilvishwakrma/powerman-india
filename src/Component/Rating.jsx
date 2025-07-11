import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { commentdatalist, ratings } from '../redux/actions/action-creator';

const RatingPage = () => {
    const dispatch = useDispatch();
    const { commnetlist = [] } = useSelector(state => state.common);
    const [rating, setRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);

    const [ratingData, setRatingData] = useState({
        star: '',
        name: '',
        comment: '',
    });

    useEffect(() => {
        dispatch(commentdatalist());
    }, [dispatch]);

    const handleStarClick = (star) => {
        setRating(star);
        setRatingData({ ...ratingData, star });
    };

    const Validate_Function = () => {
        const { name, comment, star } = ratingData;
        if (!name.trim()) return toast.error('Please enter your name');
        if (!comment.trim()) return toast.error('Please enter your comment');
        if (!star) return toast.error('Please select a rating');
        API_FUNCTION();
    };

    const API_FUNCTION = () => {
        const { star, name, comment } = ratingData;

        let formData = new FormData();
        formData.append('star', star);
        formData.append('name', name);
        formData.append('comment', comment);

        dispatch(ratings(formData))
            .then((response) => {
                if (response?.status === 'success') {
                    toast.success('Submitted Successfully');

                    setRating(0);
                    setRatingData({ star: '', name: '', comment: '' });

                    dispatch(commentdatalist());
                }
            })
            .catch((error) => {
                toast.error(error.message || 'Submission failed');
            });
    };

    return (
        <div className="container ">
            <div className="raring_star_modal" style={{ display: 'flex', marginBottom: 8 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                        key={star}
                        size={30}
                        style={{ cursor: 'pointer', marginRight: 5 }}
                        color={star <= (hoveredStar || rating) ? '#ffc107' : '#e4e5e9'}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                    />
                ))}
            </div>

            {/* Name Input */}
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    value={ratingData.name}
                    onChange={(e) => setRatingData({ ...ratingData, name: e.target.value })}
                />
            </div>

            {/* Comment Input */}
            <div className="input-group mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Write your comment..."
                    value={ratingData.comment}
                    onChange={(e) => setRatingData({ ...ratingData, comment: e.target.value })}
                />
                <button
                    className="btn"
                    style={{
                        backgroundColor: '#ff4d4f',
                        color: '#fff',
                        border: 'none',
                        transition: '0.3s',
                    }}
                    onClick={Validate_Function}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = '#d9363e'}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = '#ff4d4f'}
                >
                    <i className="fa fa-paper-plane me-1" /> Submit
                </button>
            </div>

            <h5 className="fw-bold mb-3">User Comments</h5>

            {commnetlist.length === 0 && <p>No comments yet.</p>}
            {commnetlist
                .slice() // clone array
                .reverse() // latest comment on top
                .map((item, index) => (
                    <div key={index} className="commmnet_list_data">
                        <div className="commmnet_list_data_item_name  ">
                            <h6 className="mb-0">{item.name}</h6>
                            <small className="text-muted">
                                {item.date} at {item.createdAt}
                            </small>
                        </div>
                        <p className="mb-2">{item.comment}</p>
                        <div className="raring_star_list_commnet" style={{ display: 'flex', }}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    size={16}
                                    color={star <= item.star ? '#ffc107' : '#e4e5e9'}
                                />
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default RatingPage;


export const Post = ({ 
    user = { name: '', avatar: '' }, 
    date = '', 
    text = '', 
    images = [], 
    likes = 0, 
    comments = 0, 
    commentData = { name: '', avatar: '', text: '', date: '' } 
  }) => {
  
  return (
    <div className="Post _liked _marked">
      <div className="UserElem">
        <img src={user.avatar} alt="User" />
        <div className="user__description">
          <a href="#" className="main__text">
            {user.name}
          </a>
          <p className="secondary__text">{date}</p>
        </div>
      </div>
      <p className="Post__text">{text}</p>
      <div className="media-container">
        {images.map((image, index) => (
          <img
            key={index}
            className="media__item"
            src={image}
            alt={`Post Item ${index + 1}`}
          />
        ))}
      </div>
      <div className="PostControls">
        <div className="icon-wrapper like">
          <span className="count likes-count">{likes}</span>
          <svg className="icon icon-like" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
            <path id="icon" d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z" />
          </svg>
        </div>
        <div className="icon-wrapper comment">
          <span className="count comments-count">{comments}</span>
          <svg className="icon icon-comment" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
            <path id="comment" d="M9.25 25.5C8.91848 25.5 8.60054 25.3683 8.36612 25.1339C8.1317 24.8995 8 24.5815 8 24.25V20.5H3C2.33696 20.5 1.70107 20.2366 1.23223 19.7678C0.763392 19.2989 0.5 18.663 0.5 18V3C0.5 2.33696 0.763392 1.70107 1.23223 1.23223C1.70107 0.763392 2.33696 0.5 3 0.5H23C23.663 0.5 24.2989 0.763392 24.7678 1.23223C25.2366 1.70107 25.5 2.33696 25.5 3V18C25.5 18.663 25.2366 19.2989 24.7678 19.7678C24.2989 20.2366 23.663 20.5 23 20.5H15.375L10.75 25.1375C10.5 25.375 10.1875 25.5 9.875 25.5H9.25ZM10.5 18V21.85L14.35 18H23V3H3V18H10.5Z" fill="#6D6F7A" />
          </svg>
        </div>
        {/* Additional controls here */}
      </div>
      <div className="CommentBlock">
        <img src={commentData.avatar} alt="User" />
        <div className="comment__description">
          <a href="#" className="comment__owner">
            {commentData.name}
          </a>
          <p className="comment__text">{commentData.text}</p>
          <a href="#" className="reply">
            Ответить
          </a>
        </div>
        <span className="date">{commentData.date}</span>
      </div>
    </div>
  );
};





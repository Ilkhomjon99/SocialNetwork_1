
import { Post }  from './Post';

export const App = () => {
  const postData = {
    user: {
      name: "Александр Майков",
      avatar: "./img/users/aleksandr-maykov.jpeg",
    },
    date: "Сегодня 9:37",
    text: "Момент умиротворения и спокойствия",
    images: [
      "./img/post/nature-png",
      "./img/post/nature-2.png",
      "./img/post/nature-3.png",
      "./img/post/nature-4.png",
      "./img/post/nature-5.png",
      "./img/post/nature-6.png",
    ],
    likes: -500,
    comments: 500,
    commentData: {
      name: "Карина Савина",
      avatar: "./img/users/aleksandr-maykov.jpeg",
      text: "Это текст комментария...",
      date: "25 марта",
    },
  };

  return (
    <div className="App">
      <Post {...postData} /> 
    </div>
  );
};


